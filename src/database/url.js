import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("dev.db");

export function createDatabase() {
  database.exec(`
        CREATE TABLE IF NOT EXISTS TB_URLS(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        code VARCHAR(6) UNIQUE NOT NULL
        )`);
}

export function create(url, code) {
  const stmt = database.prepare(
    "INSERT INTO TB_URLS (url, code) VALUES (?, ?)"
  );
  stmt.run(url, code);
  console.log("Url encurtada com sucesso");
}

export function findByCode(code) {
  const stmt = database.prepare("SELECT url FROM TB_URLS WHERE code = ?");
  return stmt.get(code);
}
