import { expect, test } from "vite-plus/test";
import { unplugin } from "../src/index.ts";

test("unplugin", () => {
  expect(unplugin).toBeDefined();
});
