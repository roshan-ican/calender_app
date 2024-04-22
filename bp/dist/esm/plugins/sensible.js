// src/plugins/sensible.ts
import fp from "fastify-plugin";
import sensible from "@fastify/sensible";
var sensible_default = fp(async (fastify) => {
  fastify.register(sensible);
});
export {
  sensible_default as default
};
//# sourceMappingURL=sensible.js.map