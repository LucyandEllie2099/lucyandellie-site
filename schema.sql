-- Lucy & Ellie Podcast — Cloudflare D1 schema
-- Run once after creating the D1 database

CREATE TABLE IF NOT EXISTS comments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  location   TEXT,
  message    TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS blocked_notes (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT,
  message    TEXT NOT NULL,
  reason     TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);
