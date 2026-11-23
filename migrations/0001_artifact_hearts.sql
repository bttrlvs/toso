CREATE TABLE IF NOT EXISTS artifact_hearts (
  artifact TEXT PRIMARY KEY CHECK (artifact IN ('gat-clip', 'water-dropper')),
  count INTEGER NOT NULL CHECK (count >= 0)
);
