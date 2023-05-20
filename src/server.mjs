// Golem Network Image ID: 1e88943d64a9175ab9855ebb2d628b4728b6656b2730541899d15b63

import Fastify from "fastify";
import tts from "./tts.mjs";
import * as uuid from "uuid";

function buildServer() {
  const server = Fastify({
    logger: false,
  });


  server.get("/healthcheck", async function (request, reply) {
    return reply.status(200).send({ status: "OK" });
  });

  server.get("/tts", async function (request, reply) {
    const query = request.query;
    let text = query.q;
    if (!text) {
      return reply.status(400).send({ error: "Missing query parameter 'q'" });
    }

    // generate a uuid for the filename
    const id = uuid.v4();
    tts(text, id);
    return reply.status(200).send({ 'status': 'Success', 'id': id, 'text': text });

  });

  return server;
}

export default buildServer;
