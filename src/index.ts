import type { Plugin } from "vite";
import { transform, type TransformOptions } from "oxc-transform-relay";

const plugin = (options?: TransformOptions | null | undefined): Plugin[] => {
  return [
    {
      name: "vite:relay-oxc",
      async transform(code, id) {
        if (/.(t|j)sx?/.test(id) && code.includes("graphql`")) {
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
        }
      },
    },
  ];
};

export default plugin;
