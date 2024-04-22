// src/app.ts
import { join } from "path";
import AutoLoad from "@fastify/autoload";
import { TypeBoxValidatorCompiler } from "@fastify/type-provider-typebox";
var options = {};
var app = async (fastify, opts) => {
  void fastify.setValidatorCompiler(TypeBoxValidatorCompiler);
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts
  });
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "./entry-points/http/"),
    options: opts
  });
};
var app_default = app;
export {
  app,
  app_default as default,
  options
};
//# sourceMappingURL=app.js.map