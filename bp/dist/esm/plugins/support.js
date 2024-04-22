// src/plugins/support.ts
import fp from "fastify-plugin";
var support_default = fp(async (fastify, opts) => {
  fastify.decorate("someSupport", () => "hugs");
});
export {
  support_default as default
};
//# sourceMappingURL=support.js.map