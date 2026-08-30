import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { lazyPlugins } from "vite-plus";
import relay from "unplugin-relay/vite";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  lint: {
    plugins: ["react", "typescript", "oxc"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  plugins: lazyPlugins(() => {
    if (
      relayConfig.language !== "typescript" &&
      relayConfig.language !== "javascript" &&
      relayConfig.language !== "flow"
    ) {
      throw new Error(
        "Invalid relay config: language must be one of: typescript, javascript, flow",
      );
    }
    return [
      relay({
        language: relayConfig.language,
        eagerEsModules: relayConfig.eagerEsModules,
        artifactDirectory: path.resolve(relayConfig.artifactDirectory),
      }),
      react(),
    ];
  }),
});
