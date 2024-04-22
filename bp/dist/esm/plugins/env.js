// src/plugins/env.ts
import fp from "fastify-plugin";
import env from "@fastify/env";
var schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3e3
    }
  }
};
var options = {
  confKey: "config",
  // Optional, default: 'config'
  schema,
  dotenv: true
  // Will read .env in root folder
};
var env_default = fp(async (fastify) => {
  await fastify.register(env, options);
});
export {
  env_default as default
};
//# sourceMappingURL=env.js.map