const stage = document.querySelector('.dig');
const footer = document.querySelector('.site-footer');
const canvas = document.querySelector('#background');
const header = document.querySelector('header');
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#site-menu');
const details = document.querySelector('#find-dialog');
const markers = [...document.querySelectorAll('.find')];
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const artifacts = [
  {
    title: '붓다메이커\nBUDDHA MAKER',
    description: "4세기 후반 한반도에 불교가 들어온 이후, 불교는 한반도의 문화와 역사의 큰 영향을 미쳤다. 짧은 시간에 압축성장을 한 대한민국사회는 2020년대 들어 마음챙김과 휴식의 가치가 다시 주목받으며 젊은 세대를 중심으로 불교가 유행하기 시작했다. 번뇌와 무지를 없애고 깨달음을 얻어 부처가 되는 것을 '성불'이라고 하였는데, 붓다메이커는 삼국시대 신라의 동제불두 유물을 차용해 만들어 진 성불템이다. 눈 오는 겨울날은 눈으로, 여름날 해변에서는 모래로 나만의 부처를 만들 수 있도록 가위형태의 손잡이와 불두 형태의 몰드가 결합이 돼 있다.",
    image: './assets/buddha-maker-cutout.webp', imageAlt: '붓다메이커 제품 사진',
    facts: [['Original Relic', '동제불두 (경주381), 국립경주박물관'], ['Material', '플라스틱']],
    fundingNote: '2026년 뮷즈 하반기 공모 최종선정. 펀딩을 통해 특별 할인혜택을 받아보세요.',
    descriptionFirst: true,
    x: -0.26, z: -2.36, markerX: 0.76, markerZ: -0.43,
  },
  {
    title: '인두형 토제품 치약캡\nTOOTHPASTE CAP',
    description: '특유의 귀여운 표정 때문에 많은 사람에게 사랑받는 인두형 토제품은 5세기 가야의 유물이다. 흙으로 만든 가면이고, 제사장이 제의를 행할 때 썼을 것으로 추정된다. 국립진주박물관의 대표 유물이다. 제사장의 머리에 쓰던 것을 치약에 씌웠다. 인두형 토제품 치약캡은 실리콘으로 제작돼 평소에는 닫혀있는 토출구가 치약을 누르면 열리며 입부분에서 치약이 빼꼼 나온다.',
    image: './assets/toothpaste-cap-cutout.webp', imageAlt: '인두형 토제품 치약캡 앞면과 뒷면',
    facts: [['Original Relic', '인두형 토제품 (진주 20501)'], ['Material', '실리콘']],
    fundingNote: '2026년 뮷즈 하반기 공모 최종선정. 펀딩을 통해 특별 할인혜택을 받아보세요.',
    descriptionFirst: true,
    x: -1.08, z: -0.80, markerX: -0.64, markerZ: 0.02,
  },
  {
    title: '갓클립\nGAT CLIP',
    description: '갓을 여기저기 다 씌워보려는 제작자의 집착. 결국 갓모양의 클립까지 만들게 되었다. 종이 다발의 고정, 뜯은 봉투의 밀봉 등 실용적 기능으로 쓰기에도 좋을 뿐 아니라, 친구의 사진 위에 갓클립을 한번 씌워보자. 평범한 친구 얼굴도 케데헌의 진우로 탈바꿈 시켜줄 것이다.',
    heartKey: 'gat-clip', heartLabel: '갓클립 응원',
    gallery: ['패키지', '클립 정면', '과자 봉투 밀봉', '종이 고정', '사진에 끼운 모습'],
    facts: [['Original Relic', '갓/갓집 (공주 32041)'], ['Material', 'ABS']],
    fundingNote: '2026년 하반기 뮷즈 공모 1차까지 올라간 제품. 제품 설계까지 다 마치고 디자인 등록 완료 상태. 양산을 원한다면 아래 하트버튼을 눌러 주시면, 펀딩을 곧 오픈하겠습니다.',
    descriptionFirst: true,
    x: 1.70, z: -0.38, markerX: 0.63, markerZ: 0.48,
  },
  {
    title: '청자사자모양연적 물뿌리개\nI WAS A WATER DROPPER',
    description: '고려시대 제작된 이 사자모양 연적은 태안 앞바다에서 다른 청자들과 함께 발견 되었다. 벼루 위의 물줄기를 다스리던 사자가 오늘날 화분 위의 물줄기를 다스리는 사자로 환생한다. 물뿌리개로 써도 좋지만 공예적 조형미를 그대로 감상하는 인테리어 오브제로도, 화병으로도 활용 가능하다.',
    image: './assets/lion-water-dropper-cutout.svg', imageAlt: '청록색 사자 모양 물뿌리개 제품 사진',
    facts: [['Original Relic', '청자 사자모양 연적 (신안 14871)'], ['Material', 'PLA']],
    fundingNote: '2026년 하반기 뮷즈 공모 1차까지 올라간 제품. 제품 설계까지 다 마쳤고, 3D 프린터로 오더메이드로 판매할 예정입니다.',
    heartKey: 'water-dropper', heartLabel: '물뿌리개 응원',
    descriptionFirst: true,
    x: -1.10, z: 1.78, markerX: 0.64, markerZ: -0.53,
  },
];

function setMenuOpen(open) {
  header.toggleAttribute('data-menu-open', open);
  menuButton.querySelector("span").textContent = open ? 'CLOSE' : 'MENU';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  menu.inert = !open;
  stage.inert = open;
  footer.inert = open;
}

menuButton.addEventListener('click', () => setMenuOpen(menu.inert));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.inert) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

const gallery = document.querySelector('#find-gallery');
const slides = document.querySelector('#find-slides');
const slideNumber = document.querySelector('#find-slide-number');
const previousSlide = document.querySelector('#find-prev');
const nextSlide = document.querySelector('#find-next');
const heart = document.querySelector('#find-heart');
const heartCount = heart.querySelector('.heart-count');
const heartLabel = heart.querySelector('.heart-label');
const heartCounts = new Map();
const heartStatus = document.querySelector('#find-heart-status');
let activeHeartKey;
let heartRefreshTimer;

async function refreshHeartCount(key, method = 'GET') {
  try {
    const response = await fetch(`/api/hearts/${key}`, { method, cache: 'no-store' });
    if (!response.ok) throw new Error('Heart count unavailable');
    const { count } = await response.json();
    if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid heart count');
    const latest = Math.max(heartCounts.get(key) ?? 0, count);
    heartCounts.set(key, latest);
    if (activeHeartKey === key && details.open) {
      heartCount.textContent = latest;
      if (method === 'POST') heartStatus.textContent = '';
    }
  } catch {
    if (activeHeartKey === key && details.open && method === 'POST') {
      heartStatus.textContent = '응원 수를 반영했는지 확인할 수 없습니다.';
    }
  }
}

heart.addEventListener('click', () => {
  if (activeHeartKey) void refreshHeartCount(activeHeartKey, 'POST');
});

details.addEventListener('close', () => {
  if (details.open) return;
  clearInterval(heartRefreshTimer);
  activeHeartKey = undefined;
});

function updateGallery() {
  if (gallery.hidden) return;
  const index = Math.round(slides.scrollLeft / slides.clientWidth);
  slideNumber.textContent = `${index + 1} / ${slides.children.length}`;
  previousSlide.disabled = index === 0;
  nextSlide.disabled = index === slides.children.length - 1;
}

slides.addEventListener('scroll', updateGallery, { passive: true });
previousSlide.addEventListener('click', () => slides.scrollBy({ left: -slides.clientWidth, behavior: motion.matches ? 'instant' : 'smooth' }));
nextSlide.addEventListener('click', () => slides.scrollBy({ left: slides.clientWidth, behavior: motion.matches ? 'instant' : 'smooth' }));

for (const marker of markers) {
  marker.addEventListener('click', () => {
    const artifact = artifacts[Number(marker.dataset.find)];
    document.querySelector('#find-title').textContent = artifact.title;
    const description = document.querySelector('#find-description');
    const factList = document.querySelector('#find-facts');
    description.textContent = artifact.description;
    details.classList.toggle('artifact-card--description-first', Boolean(artifact.descriptionFirst));
    if (artifact.descriptionFirst) factList.before(description);
    else factList.after(description);

    const fundingNote = document.querySelector('#find-funding-note');
    fundingNote.textContent = artifact.fundingNote ?? '';
    fundingNote.hidden = !artifact.fundingNote;

    const image = document.querySelector('#find-image');
    gallery.hidden = !artifact.gallery;
    activeHeartKey = artifact.heartKey;
    heart.hidden = !activeHeartKey;
    document.querySelector('#find-funding').hidden = Boolean(activeHeartKey);
    if (activeHeartKey) {
      heartCount.textContent = heartCounts.get(activeHeartKey) ?? '–';
      heartStatus.textContent = '';
      heartLabel.textContent = ` ${artifact.heartLabel}`;
    }
    image.hidden = Boolean(artifact.gallery);
    if (artifact.gallery) {
      slides.replaceChildren(...artifact.gallery.map((caption, index) => {
        const photo = document.createElement('img');
        photo.src = `./assets/gat-clip-${index + 1}.webp`;
        photo.alt = `갓클립 ${caption}`;
        return photo;
      }));
    } else {
      image.src = artifact.image;
      image.alt = artifact.imageAlt ?? artifact.objectName;
    }
    document.querySelector('#find-credit').hidden = !artifact.source;
    const sourceLink = document.querySelector('#find-source');
    if (artifact.source) sourceLink.href = artifact.source;
    else sourceLink.removeAttribute('href');

    const facts = artifact.facts ? [...artifact.facts] : [];
    if (artifact.objectName) facts.unshift(['Object Name', artifact.objectName]);
    factList.replaceChildren(...facts.map(([label, value]) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const definition = document.createElement('dd');
      term.textContent = label;
      definition.textContent = value;
      row.append(term, definition);
      return row;
    }));
    details.scrollTop = 0;
    details.showModal();
    clearInterval(heartRefreshTimer);
    if (activeHeartKey) {
      const key = activeHeartKey;
      void refreshHeartCount(key);
      heartRefreshTimer = setInterval(() => {
        if (!document.hidden) void refreshHeartCount(key);
      }, 3000);
    }
    if (artifact.gallery) {
      slides.scrollLeft = 0;
      updateGallery();
    }
  });
}

const soundToggle = document.querySelector('#sound-toggle');
const excavationAudio = document.querySelector('#excavation-audio');
const soundLabel = soundToggle.querySelector('span');

function updateSoundToggle() {
  const playing = !excavationAudio.paused && !excavationAudio.error;
  const label = playing ? 'SOUND ON' : 'SOUND OFF';
  soundToggle.setAttribute('aria-pressed', String(playing));
  soundToggle.setAttribute('aria-label', `발굴터 배경음 · ${label}`);
  soundLabel.textContent = label;
}

for (const event of ['play', 'pause', 'error']) {
  excavationAudio.addEventListener(event, updateSoundToggle);
}
soundToggle.addEventListener('click', async () => {
  if (!excavationAudio.paused) {
    excavationAudio.pause();
    return;
  }
  try {
    await excavationAudio.play();
  } catch {
    updateSoundToggle();
  }
});

void import('./assets/vendor/three.module.min.js').then(startExcavation).catch(error => {
  console.warn('Using the animated 2D excavation scene', error);
});

async function startExcavation(THREE) {
  const page = canvas.parentElement;
  const compactDevice = matchMedia('(pointer: coarse)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !compactDevice });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera();
  camera.up.set(0, 0, -1);
  camera.position.set(0, 16, 0);
  camera.lookAt(0, 0, 0);
  camera.far = 40;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compactDevice ? 1 : 1.65));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.13;

  scene.add(new THREE.HemisphereLight(0xffe9d2, 0x8d5840, 1.8));
  const sun = new THREE.DirectionalLight(0xffdfb7, 2.4);
  sun.position.set(-4, 7, -5);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, far: 24 });
  sun.shadow.mapSize.setScalar(compactDevice ? 512 : 1024);
  sun.shadow.normalBias = 0.028;
  sun.shadow.bias = -0.0002;
  scene.add(sun);

  let seed = 917;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const material = (color, roughness = 0.9) => new THREE.MeshStandardMaterial({ color, roughness });
  const ellipsoid = new THREE.SphereGeometry(1, 18, 12);
  function mesh(parent, geometry, surface, x = 0, y = 0, z = 0) {
    const object = new THREE.Mesh(geometry, surface);
    object.position.set(x, y, z);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  }
  function oval(parent, surface, x, y, z, w, h, d) {
    const object = mesh(parent, ellipsoid, surface, x, y, z);
    object.scale.set(w, h, d);
    return object;
  }
  function soilTexture() {
    const tile = document.createElement('canvas');
    tile.width = tile.height = 512;
    const context = tile.getContext('2d');
    const pixels = context.createImageData(512, 512);
    const octaves = [5, 14, 39, 97].map(size => ({
      size, values: Float32Array.from({ length: size * size }, random),
    }));
    function noise(x, y, { size, values }) {
      const gx = x * size / 512;
      const gy = y * size / 512;
      const col = Math.floor(gx);
      const row = Math.floor(gy);
      const fx = gx - col;
      const fy = gy - row;
      const a = fx * fx * (3 - 2 * fx);
      const b = fy * fy * (3 - 2 * fy);
      const nextCol = (col + 1) % size;
      const nextRow = (row + 1) % size;
      return THREE.MathUtils.lerp(
        THREE.MathUtils.lerp(values[row * size + col], values[row * size + nextCol], a),
        THREE.MathUtils.lerp(values[nextRow * size + col], values[nextRow * size + nextCol], a),
        b,
      );
    }
    for (let y = 0; y < 512; y++) {
      for (let x = 0; x < 512; x++) {
        const i = (y * 512 + x) * 4;
        const shade = noise(x, y, octaves[0]) * 22 + noise(x, y, octaves[1]) * 27
          + noise(x, y, octaves[2]) * 16 + noise(x, y, octaves[3]) * 9 + random() * 29 - 26;
        pixels.data.set([79 + shade, 47 + shade * 0.78, 28 + shade * 0.59, 255], i);
      }
    }
    context.putImageData(pixels, 0, 0);
    for (let i = 0; i < 3600; i++) {
      context.fillStyle = i % 2 ? '#34231a80' : '#c19a735e';
      context.beginPath();
      context.ellipse(random() * 512, random() * 512, random() * 3 + 0.5, random() * 2 + 0.4, random() * 3, 0, Math.PI * 2);
      context.fill();
    }
    const texture = new THREE.CanvasTexture(tile);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(9, 9 * 40 / 22);
    texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    return texture;
  }

  const ground = new THREE.PlaneGeometry(32, 40, 150, 188);
  ground.rotateX(-Math.PI / 2);
  const vertices = ground.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const x = vertices.getX(i);
    const z = vertices.getZ(i);
    const ledge = 0.25 * Math.exp(-Math.pow((z + 4.55 + Math.sin(x * 0.8) * 0.2) / 0.22, 2))
      + 0.19 * Math.exp(-Math.pow((z - 2 - Math.sin(x * 0.65) * 0.28) / 0.23, 2));
    vertices.setY(i, -0.12 + ledge + Math.sin(x * 2 + z) * 0.035 + random() * 0.095);
  }
  ground.computeVertexNormals();
  const terrain = mesh(scene, ground, new THREE.MeshStandardMaterial({ map: soilTexture(), roughness: 1 }));
  terrain.castShadow = false;

  const stone = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), material(0xffffff), 510);
  const matrix = new THREE.Object3D();
  for (let i = 0; i < stone.count; i++) {
    const size = 0.018 + random() ** 3 * 0.13;
    matrix.position.set((random() - 0.5) * 19, -0.025, (random() - 0.5) * 11);
    matrix.scale.set(size * 1.15, size * 0.5, size);
    matrix.rotation.set(random() * 3, random() * 3, random() * 3);
    matrix.updateMatrix();
    stone.setMatrixAt(i, matrix.matrix);
    stone.setColorAt(i, new THREE.Color().setHSL(0.065 + random() * 0.035, 0.23 + random() * 0.15, 0.14 + random() * 0.22));
  }
  stone.receiveShadow = true;
  scene.add(stone);

  const excavationLine = material(0xb39a75);
  const lineGeometry = new THREE.CylinderGeometry(0.009, 0.009, 1, 12);
  function addExcavationLine(start, end) {
    const from = new THREE.Vector3(...start);
    const to = new THREE.Vector3(...end);
    const direction = to.clone().sub(from);
    const line = mesh(scene, lineGeometry, excavationLine);
    line.position.copy(from).lerp(to, 0.5);
    line.scale.y = direction.length();
    line.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  }
  for (const x of [-2.75, 2.7]) addExcavationLine([x, 0.09, -5.4], [x, 0.09, 2.6]);
  for (const z of [-4.35, 1.92]) addExcavationLine([-5, 0.12, z], [5, 0.12, z]);

  const finds = artifacts.map(({ x, z }) => {
    const group = new THREE.Group();
    group.position.set(x, 0.03, z);
    scene.add(group);
    return group;
  });
  const productTextures = new THREE.TextureLoader();
  const productGlows = [];
  const glowPadding = 0.15;
  const glowVertex = `
    varying vec2 glowUv;
    void main() {
      glowUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  const glowFragment = `
    uniform sampler2D silhouette;
    uniform vec2 size;
    uniform float padding;
    uniform float intensity;
    varying vec2 glowUv;

    float mask(vec2 point) {
      if (any(lessThan(point, vec2(0.0))) || any(greaterThan(point, vec2(1.0)))) return 0.0;
      return smoothstep(0.25, 0.68, texture2D(silhouette, point).a);
    }

    void main() {
      vec2 point = (glowUv * (size + 2.0 * padding) - padding) / size;
      float interior = mask(point);
      if (interior > 0.99) discard;
      float rim = 0.0;
      float halo = 0.0;
      for (int i = 0; i < 12; i++) {
        float angle = float(i) * 0.523599;
        vec2 stepSize = vec2(cos(angle), sin(angle)) / size;
        rim = max(rim, mask(point + stepSize * 0.033));
        halo += mask(point + stepSize * 0.092) / 12.0;
      }
      float alpha = max(rim * 0.84, halo * 0.60) * (1.0 - interior) * intensity;
      gl_FragColor = vec4(mix(vec3(1.0, 0.64, 0.20), vec3(1.0, 0.91, 0.65), rim), alpha);
    }
  `;
  function loadBuriedRelic(find, file, width, rotation) {
    return productTextures.loadAsync(file).then(texture => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      const height = width * texture.image.height / texture.image.width;
      const geometry = new THREE.PlaneGeometry(width, height);
      geometry.rotateX(-Math.PI / 2);
      const product = mesh(find, geometry, new THREE.MeshBasicMaterial({
        map: texture, transparent: true, alphaTest: 0.12, toneMapped: false,
      }), 0, 0.13);
      product.castShadow = false;
      product.rotation.y = rotation;

      const glowGeometry = new THREE.PlaneGeometry(width + 2 * glowPadding, height + 2 * glowPadding);
      glowGeometry.rotateX(-Math.PI / 2);
      const glowMaterial = new THREE.ShaderMaterial({
        vertexShader: glowVertex,
        fragmentShader: glowFragment,
        uniforms: {
          silhouette: { value: texture },
          size: { value: new THREE.Vector2(width, height) },
          padding: { value: glowPadding },
          intensity: { value: 0.7 },
        },
        transparent: true,
        depthWrite: false,
        toneMapped: false,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.y = 0.126;
      glow.rotation.y = rotation;
      find.add(glow);
      productGlows.push({ intensity: glowMaterial.uniforms.intensity, phase: finds.indexOf(find) * 0.64 });
    });
  }

  const relicsReady = [
    loadBuriedRelic(finds[0], './assets/original-relic-01.webp', 0.43, -0.16),
    loadBuriedRelic(finds[1], './assets/original-relic-02.webp', 0.43, 0.18),
    loadBuriedRelic(finds[2], './assets/original-relic-03.webp', 0.871, -0.30),
    loadBuriedRelic(finds[3], './assets/original-relic-04.webp', 0.465, -0.21),
  ];

  for (const find of finds) {
    for (let i = 0; i < 15; i++) {
      const angle = random() * Math.PI * 2;
      const r = 0.47 + random() * 0.18;
      const clod = 0.028 + random() * 0.055;
      oval(find, material(i % 2 ? 0x69432e : 0x493024), Math.cos(angle) * r, 0.02, Math.sin(angle) * r, clod, clod * 0.6, clod);
    }
  }

  const hands = [0.2, 2.0, 3.8].map(phase => ({ phase }));

  const portraits = [
    { file: 'bun', x: -0.63, z: -2.16, direction: 0.86, height: 2.8, tip: [0.46, 0.986], wrist: [0.291, 0.762], cropWidth: 327, hide: [
      [[75, 222], [86, 214], [98, 223], [105, 255], [117, 278], [130, 291], [122, 302], [91, 299], [81, 280], [74, 252]],
      [[235, 217], [245, 221], [247, 244], [238, 265], [222, 282], [202, 293], [207, 280], [220, 265], [230, 242]],
    ] },
    { file: 'bob', x: 1.65, z: -0.62, direction: -0.43, height: 2.48, tip: [0.55, 0.986], wrist: [0.678, 0.71], cropWidth: 320, hide: [
      [[0, 75], [42, 84], [50, 91], [45, 122], [48, 145], [43, 168], [30, 196], [20, 224], [0, 221]],
      [[71, 207], [90, 233], [115, 254], [137, 267], [155, 274], [179, 278], [205, 270], [223, 255], [231, 245], [230, 266], [221, 288], [206, 297], [188, 299], [175, 325], [68, 328]],
    ] },
    { file: 'khaki', x: -1.08, z: 2.46, direction: 2.81, height: 3.536, tip: [0.52, 0.987], wrist: [0.646, 0.76], cropWidth: 310, hide: [
      [[0, 66], [64, 55], [51, 81], [39, 112], [33, 141], [28, 172], [33, 190], [0, 195]],
      [[239, 55], [310, 47], [310, 163], [262, 177], [254, 151], [256, 129], [250, 98]],
      [[85, 234], [100, 229], [112, 230], [112, 251], [116, 274], [129, 300], [99, 304], [81, 291], [81, 271]],
    ] },
  ];

  const portraitLoader = new THREE.TextureLoader();

  function maskTexture(texture, polygons, width, height) {
    const layer = document.createElement('canvas');
    layer.width = texture.image.width;
    layer.height = texture.image.height;
    const context = layer.getContext('2d');
    context.drawImage(texture.image, 0, 0);
    context.scale(layer.width / width, layer.height / height);
    context.globalCompositeOperation = 'destination-out';
    for (const polygon of polygons) {
      context.beginPath();
      context.moveTo(...polygon[0]);
      for (const point of polygon.slice(1)) context.lineTo(...point);
      context.closePath();
      context.fill();
    }
    const masked = new THREE.CanvasTexture(layer);
    masked.colorSpace = THREE.SRGBColorSpace;
    return masked;
  }

  function setPortrait(hand, { file, x, z, direction, height, tip, wrist, hide, cropWidth }) {
    return Promise.all([
      portraitLoader.loadAsync(`./assets/archaeologist-${file}.webp`),
      portraitLoader.loadAsync(`./assets/archaeologist-${file}-hand.webp`),
    ]).then(([bodyTexture, handTexture]) => {
      const width = height * bodyTexture.image.width / bodyTexture.image.height;
      const photo = new THREE.Group();
      photo.position.set(x, 0.26, z);
      photo.rotation.y = direction;
      scene.add(photo);

      function layer(parent, texture, origin) {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        const surface = new THREE.PlaneGeometry(width, height);
        surface.rotateX(-Math.PI / 2);
        surface.translate((0.5 - origin[0]) * width, 0, (0.5 - origin[1]) * height);
        const portrait = mesh(parent, surface, new THREE.MeshBasicMaterial({
          map: texture, color: 0xe6d4c0, transparent: true, alphaTest: 0.12, toneMapped: false,
        }));
        portrait.customDepthMaterial = new THREE.MeshDepthMaterial({
          depthPacking: THREE.RGBADepthPacking, map: texture, alphaTest: 0.55,
        });
        return portrait;
      }

      layer(photo, maskTexture(bodyTexture, hide, cropWidth, 420), tip);
      bodyTexture.dispose();
      const wristPivot = new THREE.Group();
      wristPivot.position.set((wrist[0] - tip[0]) * width, 0.007, (wrist[1] - tip[1]) * height);
      photo.add(wristPivot);
      layer(wristPivot, handTexture, wrist);
      hand.portrait = {
        wristPivot, brushX: (tip[0] - wrist[0]) * width, brushZ: (tip[1] - wrist[1]) * height,
      };
    });
  }

  const dogRig = new THREE.Group();
  dogRig.rotation.y = -0.12;
  dogRig.scale.set(-1.7, 1, 1.7);
  scene.add(dogRig);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = shadowCanvas.height = 64;
  const shadowContext = shadowCanvas.getContext('2d');
  const shadowGradient = shadowContext.createRadialGradient(32, 32, 5, 32, 32, 30);
  shadowGradient.addColorStop(0, 'rgba(28, 15, 9, 0.42)');
  shadowGradient.addColorStop(1, 'rgba(28, 15, 9, 0)');
  shadowContext.fillStyle = shadowGradient;
  shadowContext.fillRect(0, 0, 64, 64);
  const dogShadowGeometry = new THREE.PlaneGeometry(2.32, 0.94);
  dogShadowGeometry.rotateX(-Math.PI / 2);
  const dogShadow = new THREE.Mesh(dogShadowGeometry, new THREE.MeshBasicMaterial({
    map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false,
  }));
  dogShadow.position.set(-0.06, 0.065, 0.06);
  dogRig.add(dogShadow);
  dogRig.visible = false;

  let dogPaw;
  let dogTail;

  function loadDogPortrait() {
    return portraitLoader.loadAsync('./assets/jindo-excavation-cutout.webp').then(texture => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      const width = 2.37;
      const height = width * texture.image.height / texture.image.width;
      const geometry = new THREE.PlaneGeometry(width, height, 44, 28);
      geometry.rotateX(-Math.PI / 2);
      const pawOutline = [[311, 140], [333, 129], [350, 136], [390, 136], [391, 170], [343, 177], [308, 176], [293, 161]];
      const bodyCut = [[321, 144], [337, 132], ...pawOutline.slice(2, -1), [309, 163]];
      const bodyTexture = maskTexture(texture, [bodyCut], 430, 250);
      const image = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        map: bodyTexture, transparent: true, alphaTest: 0.10, toneMapped: false,
      }));
      image.position.y = 0.22;
      dogRig.add(image);

      const positions = geometry.getAttribute('position');
      const uv = geometry.getAttribute('uv');
      const strands = [];
      for (let i = 0; i < positions.count; i++) {
        const x = uv.getX(i);
        const y = 1 - uv.getY(i);
        const tips = 1 - THREE.MathUtils.smoothstep(x, 0.07, 0.38);
        const aboveHindLeg = 1 - THREE.MathUtils.smoothstep(y, 0.65, 0.76);
        const weight = tips * aboveHindLeg;
        if (weight > 0) strands.push({
          index: i, x: positions.getX(i), z: positions.getZ(i),
          weight, phase: x * 5.8 + y * 4.2, fringe: y * 21,
        });
      }
      dogTail = { positions, strands };

      const toX = x => (x / 430 - 0.5) * width;
      const toZ = z => (z / 250 - 0.5) * height;
      const pivot = new THREE.Group();
      pivot.position.set(toX(324), 0.23, toZ(150));
      dogRig.add(pivot);

      const contour = pawOutline.map(([x, y]) => new THREE.Vector2(x, y));
      const pawGeometry = new THREE.BufferGeometry();
      pawGeometry.setIndex(THREE.ShapeUtils.triangulateShape(contour, []).flat());
      pawGeometry.setAttribute('position', new THREE.Float32BufferAttribute(
        pawOutline.flatMap(([x, y]) => [toX(x) - pivot.position.x, 0, toZ(y) - pivot.position.z]), 3));
      pawGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(
        pawOutline.flatMap(([x, y]) => [x / 430, 1 - y / 250]), 2));
      const pawMaterial = new THREE.MeshBasicMaterial({
        map: texture, transparent: true, alphaTest: 0.10, side: THREE.DoubleSide, toneMapped: false,
      });
      pivot.add(new THREE.Mesh(pawGeometry, pawMaterial));
      dogPaw = { pivot, tipX: toX(378) - pivot.position.x, tipZ: toZ(151) - pivot.position.z };
      dogRig.visible = true;
    });
  }

  const brushDustCount = 48;
  const pawDustCount = 22;
  const dust = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.022, 0), material(0xffffff), brushDustCount + pawDustCount);
  dust.frustumCulled = false;
  scene.add(dust);
  const grains = Array.from({ length: brushDustCount }, (_, i) => {
    dust.setColorAt(i, new THREE.Color(0x9b6b46));
    return { source: i % hands.length, offset: random(), sway: random() - 0.5, speed: 0.22 + random() * 0.7 };
  });
  const pawGrains = Array.from({ length: pawDustCount }, (_, i) => {
    dust.setColorAt(brushDustCount + i, new THREE.Color(i % 3 ? 0x9c6843 : 0x694129));
    return {
      delay: random() * 0.18, reach: 0.28 + random() * 0.81,
      spread: (random() - 0.5) * 1.30, lift: 0.13 + random() * 0.28,
      size: 0.65 + random() * 1.7,
    };
  });
  const origin = new THREE.Vector3();
  const vector = new THREE.Vector3();

  let elapsed = 0;
  let previous = 0;
  let frame = 0;
  let contextLost = false;
  let renderFailed = false;

  function useFallback() {
    cancelAnimationFrame(frame);
    page.removeAttribute('data-scene-ready');
    markers.forEach(marker => {
      marker.style.removeProperty('--render-x');
      marker.style.removeProperty('--render-y');
    });
  }

  function draw(time) {
    for (const { intensity, phase } of productGlows) {
      intensity.value = motion.matches ? 0.7 : 0.68 + Math.sin(time * 2.3 + phase) * 0.29;
    }
    for (const { phase, portrait } of hands) {
      const sweep = time * 4.3 + phase;
      if (portrait) {
        portrait.wristPivot.rotation.y = Math.sin(sweep) * 0.15;
      }
    }
    const scratch = motion.matches ? 0 : Math.sin(time * 9);
    if (dogPaw) {
      dogPaw.pivot.rotation.y = scratch * 0.11;
      dogPaw.pivot.scale.x = 1 + scratch * 0.16;
    }
    if (dogTail) {
      const { positions, strands } = dogTail;
      const tailTime = time * 2.8;
      const flutter = motion.matches ? 0 : 1;
      for (const { index, x, z, weight, phase, fringe } of strands) {
        const sway = Math.sin(tailTime - phase);
        const tips = Math.sin(tailTime * 1.7 - phase + fringe);
        positions.setX(index, x + weight * flutter * (sway * 0.033 + tips * 0.006));
        positions.setZ(index, z + weight * flutter * (sway * 0.067 + tips * 0.013));
      }
      positions.needsUpdate = true;
    }
    scene.updateMatrixWorld(true);
    grains.forEach(({ source, offset, sway, speed }, i) => {
      const age = (time * speed + offset) % 1;
      const { portrait } = hands[source];
      portrait.wristPivot.localToWorld(origin.set(portrait.brushX, -0.17, portrait.brushZ));
      matrix.position.copy(origin);
      matrix.position.x += sway * age;
      matrix.position.z += (sway + 0.36) * age;
      matrix.position.y += Math.sin(Math.PI * age) * 0.19;
      matrix.scale.setScalar((1 - age) * 1.45);
      matrix.rotation.set(age, 0, age * 2);
      matrix.updateMatrix();
      dust.setMatrixAt(i, matrix.matrix);
    });
    const sweepPeriod = Math.PI * 2 / 9;
    const burstTime = (time + sweepPeriod * 0.30) % sweepPeriod;
    if (dogPaw) dogPaw.pivot.localToWorld(origin.set(dogPaw.tipX, -0.15, dogPaw.tipZ));
    pawGrains.forEach(({ delay, reach, spread, lift, size }, i) => {
      const age = (burstTime - delay) / 0.51;
      const flying = dogPaw && !motion.matches && age > 0 && age < 1;
      if (flying) {
        matrix.position.copy(origin);
        matrix.position.x += reach * age;
        matrix.position.z += spread * age;
        matrix.position.y += Math.sin(Math.PI * age) * lift;
        matrix.rotation.set(age * 4, i, age * 3);
      }
      matrix.scale.setScalar(flying ? size * (1 - THREE.MathUtils.smoothstep(age, 0.64, 1)) : 0);
      matrix.updateMatrix();
      dust.setMatrixAt(brushDustCount + i, matrix.matrix);
    });
    dust.instanceMatrix.needsUpdate = true;
    if (contextLost || renderFailed) return;
    try {
      renderer.render(scene, camera);
    } catch (error) {
      renderFailed = true;
      console.warn('Using the animated 2D excavation scene', error);
    }
    if (renderFailed) useFallback();
  }

  function resize() {
    const { width, height } = stage.getBoundingClientRect();
    const extension = parseFloat(getComputedStyle(stage).paddingBottom);
    const baseHeight = height - extension;
    const renderHeight = height + footer.getBoundingClientRect().height;
    if (width <= 0 || baseHeight <= 0 || contextLost || renderFailed) return;
    const aspect = width / baseHeight;
    const visibleHeight = Math.max(10.65, 5.85 / aspect);
    const compact = width < 720;
    dogRig.position.set(compact ? 0.42 : Math.min(2.5, visibleHeight * aspect / 2 - 2.42),
      0, compact ? 7.30 : 3.67);
    camera.left = -visibleHeight * aspect / 2;
    camera.right = -camera.left;
    camera.top = visibleHeight / 2;
    camera.bottom = -camera.top - (renderHeight - baseHeight) * visibleHeight / baseHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, renderHeight, false);
    artifacts.forEach(({ x, z, markerX, markerZ }, i) => {
      vector.set(x + markerX, 0, z + markerZ).project(camera);
      const marker = markers[i];
      marker.style.setProperty('--render-x', `${(vector.x + 1) * 50}%`);
      marker.style.setProperty('--render-y', `${(1 - vector.y) * renderHeight / 2}px`);
    });
    draw(elapsed);
    if (!renderFailed) page.setAttribute('data-scene-ready', '');
  }

  function tick(now) {
    if (previous) elapsed += Math.min((now - previous) / 1000, 0.05);
    previous = now;
    draw(elapsed);
    if (!renderFailed && !contextLost) frame = requestAnimationFrame(tick);
  }
  function updatePlayback() {
    cancelAnimationFrame(frame);
    previous = 0;
    if (!motion.matches && !document.hidden && !renderFailed && !contextLost) frame = requestAnimationFrame(tick);
  }
  await Promise.all([...relicsReady, ...hands.map((hand, i) => setPortrait(hand, portraits[i])), loadDogPortrait()]);
  contextLost = renderer.getContext().isContextLost();

  function changeMotion() {
    if (!contextLost && !renderFailed) draw(elapsed);
    updatePlayback();
  }
  if (motion.addEventListener) motion.addEventListener('change', changeMotion);
  else motion.addListener(changeMotion);
  document.addEventListener('visibilitychange', updatePlayback);
  window.addEventListener('pageshow', () => {
    resize();
    updatePlayback();
  });
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    contextLost = true;
    useFallback();
  });
  canvas.addEventListener('webglcontextrestored', () => {
    contextLost = false;
    renderFailed = false;
    resize();
    updatePlayback();
  });
  if (typeof ResizeObserver === 'function') {
    const layoutObserver = new ResizeObserver(resize);
    layoutObserver.observe(stage);
    layoutObserver.observe(footer);
  } else {
    window.addEventListener('resize', resize);
  }
  resize();
  updatePlayback();
}
