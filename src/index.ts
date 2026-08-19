import type { UnpluginFactory } from "unplugin";
import type { Options } from "./types";
import { createUnplugin } from "unplugin";
import { transform } from "oxc-transform-relay";

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options) => ({
  name: "unplugin-relay",
  transformInclude(id) {
    return /.(t|j)sx?/.test(id);
  },
  async transform(code, id) {
    const result = await transform(id.split("?")[0]!, code, { sourcemap: true, ...options });

    const diagnostics = result.errors.map(
      (error) => `${error.message}${error.codeframe ? `\n${error.codeframe}` : ""}`,
    );

    for (const diagnostic of diagnostics) {
      this.warn(diagnostic);
    }

    return {
      code: result.code,
      map: result.map,
    };
  },
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
