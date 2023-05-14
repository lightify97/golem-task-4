import Fastify, { FastifyRequest, FastifyReply } from "fastify";
// import { version } from "../package.json";


function buildServer() {
  const server = Fastify({
    logger: true,
  });

  server.get("/healthcheck", async function () {
    return { status: "OK" };
  });

  return server;
}

export default buildServer;
