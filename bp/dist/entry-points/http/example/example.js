"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/entry-points/http/example/example.ts
var example_exports = {};
__export(example_exports, {
  default: () => example_default
});
module.exports = __toCommonJS(example_exports);

// src/data-access/models/example.model.ts
var import_mongoose = __toESM(require("mongoose"));
var import_uuid = require("uuid");
var exampleSchema = new import_mongoose.default.Schema({
  exampleId: { type: String, default: (0, import_uuid.v4)() },
  exampleName: { type: String, required: false }
});
var exampleModel = import_mongoose.default.model("example", exampleSchema);

// src/data-access/example.repo.ts
var getExample = async () => {
  const examples = await exampleModel.find();
  return examples;
};
var updateExample = async (exampleId, example2) => {
  const updatedExample = await exampleModel.findOneAndUpdate(
    { exampleId },
    {
      $set: {
        exampleName: example2.exampleName
      }
    },
    { new: true }
  ).lean();
  return updatedExample;
};
var deleteExample = async (exampleId) => {
  const example2 = await exampleModel.deleteOne({
    exampleId
  }).lean();
  return example2;
};
var getOneExample = async (exampleId) => {
  const example2 = await exampleModel.findOne({
    exampleId
  });
  return example2;
};

// src/domain/example/use-cases/get-example/get-example.usecase.ts
var getExampleUseCase = async () => {
  const getAllExample = await getExample();
  return getAllExample;
};
var get_example_usecase_default = getExampleUseCase;

// src/domain/example/use-cases/get-example/get-example.schema.ts
var getExampleSchema = {
  summary: "Get all products",
  tags: ["Example"],
  security: [{}],
  response: {}
};

// src/lib/logger/pino.logger.ts
var import_pino = require("pino");
var _logger;
var PinoLogger = class {
  constructor(level, prettyPrintEnabled, destStream) {
    this.level = level;
    this.prettyPrintEnabled = prettyPrintEnabled;
    this.destStream = destStream;
    __privateAdd(this, _logger, void 0);
    __privateSet(this, _logger, (0, import_pino.pino)({
      level,
      transport: prettyPrintEnabled ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          sync: true
        }
      } : void 0
    }));
  }
  debug(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).debug(metadata, message);
    } else {
      __privateGet(this, _logger).debug(message);
    }
  }
  error(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).error(metadata, message);
    } else {
      __privateGet(this, _logger).error(message);
    }
  }
  info(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).info(metadata, message);
    } else {
      __privateGet(this, _logger).info(message);
    }
  }
  warning(message, metadata) {
    if (metadata) {
      __privateGet(this, _logger).warn(metadata, message);
    } else {
      __privateGet(this, _logger).warn(message);
    }
  }
};
_logger = new WeakMap();

// src/lib/logger/index.ts
var _underlyingLogger, _getInitializeLogger, getInitializeLogger_fn;
var LoggerWrapper = class {
  constructor() {
    __privateAdd(this, _getInitializeLogger);
    // @ts-expect-error description: 'abcd'
    __privateAdd(this, _underlyingLogger, null);
  }
  configureLogger(configuration, overrideIfExists = true) {
    var _a, _b;
    if (__privateGet(this, _underlyingLogger) === null || overrideIfExists) {
      __privateSet(this, _underlyingLogger, new PinoLogger(
        (_a = configuration.level) != null ? _a : "info",
        (_b = configuration.prettyPrint) != null ? _b : false
      ));
    }
  }
  resetLogger() {
    __privateSet(this, _underlyingLogger, null);
  }
  debug(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).debug(message);
  }
  error(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).error(message);
  }
  info(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).info(message);
  }
  warning(message, metadata) {
    __privateMethod(this, _getInitializeLogger, getInitializeLogger_fn).call(this).warning(message);
  }
};
_underlyingLogger = new WeakMap();
_getInitializeLogger = new WeakSet();
getInitializeLogger_fn = function() {
  this.configureLogger({ prettyPrint: true }, false);
  return __privateGet(this, _underlyingLogger);
};
var logger = new LoggerWrapper();

// src/lib/error-handeling/index.ts
var AppError = class extends Error {
  constructor(name, message, HTTPStatus = 500, isTrusted = true, code = "ERR_GENERAL", cause) {
    super(message);
    this.name = name;
    this.message = message;
    this.HTTPStatus = HTTPStatus;
    this.isTrusted = isTrusted;
    this.code = code;
    this.cause = cause;
  }
};

// src/domain/example/use-cases/create-example/create-example.usecase.ts
var createExampleUseCase = async (newExample) => {
  const newExampleCreated = "created";
  if (!newExampleCreated) {
    throw new Error("Error creating example");
  }
  throw new AppError("Error creating example", "Error creating example", 500);
};
var create_example_usecase_default = createExampleUseCase;

// src/domain/example/use-cases/create-example/create-example.schema.ts
var import_typebox2 = require("@sinclair/typebox");

// src/domain/example/example.schema.ts
var import_typebox = require("@sinclair/typebox");
var ExampleSchema = import_typebox.Type.Object({
  exampleId: import_typebox.Type.String(),
  exampleName: import_typebox.Type.String(),
  _id: import_typebox.Type.Optional(import_typebox.Type.String())
});

// src/domain/example/use-cases/create-example/create-example.schema.ts
var createExampleRequest = import_typebox2.Type.Omit(ExampleSchema, [
  "_id",
  "exampleId"
]);
var createExampleSchema = {
  summary: "Create example schema",
  tags: ["Example"],
  description: "Create example schema",
  security: [{}],
  body: createExampleRequest,
  response: {
    200: ExampleSchema
  }
};

// src/domain/example/use-cases/update-example/update-example.usecase.ts
var updateExampleUseCase = async (exampleId, example2) => {
  const updatedExample = await updateExample(exampleId, example2);
  return updatedExample;
};
var update_example_usecase_default = updateExampleUseCase;

// src/domain/example/use-cases/update-example/update-example.schema.ts
var import_typebox3 = require("@sinclair/typebox");
var paramSchema = import_typebox3.Type.Object({
  exampleId: import_typebox3.Type.String()
});
var bodySchema = import_typebox3.Type.Partial(import_typebox3.Type.Omit(ExampleSchema, ["_id", "exampleId"]));
var updateExampleSchema = {
  summary: "Update example schema",
  tags: ["Example"],
  description: "Update example schema",
  security: [{}],
  body: bodySchema,
  params: paramSchema,
  response: {
    200: ExampleSchema
  }
};

// src/domain/example/use-cases/delete-example/delete-example.usecase.ts
var deleteExampleUseCase = async (exampleId) => {
  const data = await deleteExample(exampleId);
  return data;
};
var delete_example_usecase_default = deleteExampleUseCase;

// src/domain/example/use-cases/delete-example/delete-example.schema.ts
var import_typebox4 = require("@sinclair/typebox");
var ParamSchema = import_typebox4.Type.Object({
  exampleId: import_typebox4.Type.String()
});
var deleteExampleSchema = {
  summary: "Delete example schema",
  tags: ["Example"],
  security: [{}],
  params: ParamSchema
  // response: {
  //   200: ExampleSchema,
  // },
};

// src/domain/example/use-cases/get-one-example/getone-example.usecase.ts
var getOneExampleUseCase = async (exampleId) => {
  const data = await getOneExample(exampleId);
  return data;
};
var getone_example_usecase_default = getOneExampleUseCase;

// src/domain/example/use-cases/get-one-example/getone-example.schema.ts
var import_typebox5 = require("@sinclair/typebox");
var paramSchema2 = import_typebox5.Type.Object({
  exampleId: import_typebox5.Type.String()
});
var getOneExampleSchema = {
  summary: "Get one example schema",
  description: "Get one example schema",
  tags: ["Example"],
  params: paramSchema2,
  security: [{}]
};

// src/entry-points/http/example/example.ts
var example = async (fastify, opts) => {
  fastify.withTypeProvider().get("/", { schema: getExampleSchema }, async () => {
    const getAllexample = await get_example_usecase_default();
    return getAllexample;
  }).post("/", { schema: createExampleSchema }, async (request, reply) => {
    const example2 = await create_example_usecase_default(request.body);
    return example2;
  }).put(
    "/:exampleId",
    { schema: updateExampleSchema },
    async (request, reply) => {
      const { exampleId } = request.params;
      const exampleBody = request.body;
      const updatedExample = await update_example_usecase_default(exampleId, exampleBody);
      if (updatedExample) {
        await reply.code(200).send(updatedExample);
      }
    }
  ).delete(
    "/:exampleId",
    { schema: deleteExampleSchema },
    async (request, reply) => {
      const { exampleId } = request.params;
      const example2 = await delete_example_usecase_default(exampleId);
      await reply.code(200).send(example2);
    }
  ).get(
    "/:exampleId",
    { schema: getOneExampleSchema },
    async (request, reply) => {
      const { exampleId } = request.params;
      const example2 = await getone_example_usecase_default(exampleId);
      return example2;
    }
  );
};
var example_default = example;
//# sourceMappingURL=example.js.map