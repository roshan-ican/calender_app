// src/entry-points/http/root.ts
var root = async (fastify, opts) => {
  fastify.withTypeProvider().get("/", { schema: {} }, async (request, reply) => ({ root: true }));
};
var root_default = root;
export {
  root_default as default
};
//# sourceMappingURL=root.js.map