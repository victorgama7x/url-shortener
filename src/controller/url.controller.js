import { create, findByCode } from "../database/url.js";

import { randomBytes } from "node:crypto";

export async function routes(req, res) {
  const { method, url } = req;

  if (method === "POST" && url === "/shorten") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        const { url } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ error: "URL é obrigatória" }));
        }

        const code = randomBytes(3).toString("hex").slice(0, 6);
        create(url, code);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ shortUrl: `http://localhost:3000/${code}` }));
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Erro ao criar URL" }));
      }
    });
  } else if (method === "GET" && url.startsWith("/")) {
    const code = url.substring(1);
    const result = findByCode(code);

    if (!result) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Código não encontrado");
    }

    res.writeHead(302, { Location: result.url });
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Rota não encontrada" }));
  }
}
