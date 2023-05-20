import buildServer from "./server.mjs";

const server = buildServer();

(async function () {
  try {
    await server.listen({
      host: "0.0.0.0",
      port: 3000,
    });

    console.log(`Server ready at http://localhost:3000`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
