/* eslint-disable @typescript-eslint/no-floating-promises */
import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

export default fp(async (fastify) => {
  fastify.register(swagger, {
    openapi: {
      info: {
        title: "",
        description: "",
        version: "0.1.0",
      },
      servers: [
        {
          url: "http://localhost:4200",
        },
      ],
    },
    hideUntagged: false,
  });
  fastify.register(swaggerUi);
});
