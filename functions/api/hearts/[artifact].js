const artifacts = new Set(['gat-clip', 'water-dropper']);
const headers = { 'Cache-Control': 'no-store' };

function reply(data, status = 200) {
  return Response.json(data, { status, headers });
}

export async function onRequest({ request, env, params }) {
  const artifact = params.artifact;
  if (!artifacts.has(artifact)) return reply({ error: 'Unknown artifact' }, 404);
  if (!env.HEARTS) return reply({ error: 'Heart storage unavailable' }, 503);

  if (request.method === 'GET') {
    const count = await env.HEARTS.prepare('SELECT count FROM artifact_hearts WHERE artifact = ?')
      .bind(artifact).first('count');
    return reply({ count: count ?? 0 });
  }

  if (request.method === 'POST') {
    if (request.headers.get('Origin') !== new URL(request.url).origin) {
      return reply({ error: 'Origin not allowed' }, 403);
    }

    const count = await env.HEARTS.prepare(`
      INSERT INTO artifact_hearts (artifact, count) VALUES (?, 1)
      ON CONFLICT (artifact) DO UPDATE SET count = count + 1
      RETURNING count
    `).bind(artifact).first('count');
    return reply({ count });
  }

  return Response.json({ error: 'Method not allowed' }, {
    status: 405,
    headers: { ...headers, Allow: 'GET, POST' },
  });
}
