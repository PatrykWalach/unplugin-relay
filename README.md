# Vite Plugin Relay OXC

## Usage

```tsx
import relay from "vite-plugin-relay-oxc";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

export default defineConfig({
  devtools: true,
  plugins: [
    relay({
      language: relayConfig.language,
      eagerEsModules: relayConfig.eagerEsModules,
      artifactDirectory: path.resolve(relayConfig.artifactDirectory),
    }),
  ],
});
```
