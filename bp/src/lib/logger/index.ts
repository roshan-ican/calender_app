import { type Logger, type LoggerConfiguration } from "./definition";
import PinoLogger from "./pino.logger";
import { metricsExporter } from "../error-handeling";

export class LoggerWrapper implements Logger {
  // @ts-expect-error description: 'abcd'
  #underlyingLogger: Logger | undefined = null;

  configureLogger(
    configuration: Partial<LoggerConfiguration>,
    overrideIfExists = true,
  ): void {
    if (this.#underlyingLogger === null || overrideIfExists) {
      this.#underlyingLogger = new PinoLogger(
        configuration.level ?? "info",
        configuration.prettyPrint ?? false,
      );
    }
  }

  resetLogger() {
    // @ts-expect-error description: 'abcd'
    this.#underlyingLogger = null;
  }

  debug(message: string, metadata?: Record<string, unknown>): void {
    this.#getInitializeLogger().debug(message);
  }

  error(message: string, metadata?: Record<string, unknown>): void {
    this.#getInitializeLogger().error(message);
  }

  info(message: string, metadata?: Record<string, unknown>): void {
    // If never initialized, the set default configuration
    this.#getInitializeLogger().info(message);
  }

  warning(message: string, metadata?: Record<string, unknown>): void {
    this.#getInitializeLogger().warning(message);
  }

  #getInitializeLogger(): Logger {
    this.configureLogger({ prettyPrint: true }, false);

    return this.#underlyingLogger!;
  }
}

export const logger = new LoggerWrapper();
