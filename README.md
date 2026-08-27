# Unlugin Relay

[![Open on npmx.dev](https://npmx.dev/api/registry/badge/version/unplugin-relay)](https://npmx.dev/package/unplugin-relay)
[![pkg.pr.new](https://pkg.pr.new/badge/PatrykWalach/unplugin-relay)](https://pkg.pr.new/~/PatrykWalach/unplugin-relay)

## Install

```bash
npm i unplugin-relay
```


<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import relay from "unplugin-relay/vite";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

export default defineConfig({
  plugins: [relay({
    language: relayConfig.language,
    eagerEsModules: relayConfig.eagerEsModules,
    artifactDirectory: path.resolve(relayConfig.artifactDirectory),
  })],
});
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import relay from "unplugin-relay/rollup";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

export default {
  plugins: [relay({
    language: relayConfig.language,
    eagerEsModules: relayConfig.eagerEsModules,
    artifactDirectory: path.resolve(relayConfig.artifactDirectory),
  })],
};
```

<br></details>

<details>
<summary>Rolldown</summary><br>

```ts
// rolldown.config.js
import relay from "unplugin-relay/rolldown";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

export default {
  plugins: [relay({
    language: relayConfig.language,
    eagerEsModules: relayConfig.eagerEsModules,
    artifactDirectory: path.resolve(relayConfig.artifactDirectory),
  })],
};
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require("unplugin-relay/webpack")({
    language: relayConfig.language,
    eagerEsModules: relayConfig.eagerEsModules,
    artifactDirectory: path.resolve(relayConfig.artifactDirectory),
  })],
};
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [["unplugin-relay/nuxt", {
    language: relayConfig.language,
    eagerEsModules: relayConfig.eagerEsModules,
    artifactDirectory: path.resolve(relayConfig.artifactDirectory),
  }]],
});
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require("unplugin-relay/webpack")({
      language: relayConfig.language,
      eagerEsModules: relayConfig.eagerEsModules,
      artifactDirectory: path.resolve(relayConfig.artifactDirectory),
    })],
  },
};
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from "esbuild";
import relay from "unplugin-relay/esbuild";
import relayConfig from "./relay.config.json" with { type: "json" };
import path from "path";

build({
  plugins: [relay()],
});
```

<br></details>
