import http from "node:http";
import { createDatabase } from "./database/url.js";
import { routes } from "./controller/url.controller.js";

createDatabase();

const server = http.createServer(routes);

server.listen(3000, () => {
  console.log("Tudo certo com o servidor");
});
