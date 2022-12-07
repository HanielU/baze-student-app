import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { dependencies, devDependencies } from "./package.json";

export default defineConfig({
  // entry: ["src/index.ts"],
  entry: {
    index: "src/index.ts",
    theme: "src/theme/index.ts",
    sprinkles: "src/vanilla/sprinkles.css.ts",
    "v-theme": "src/vanilla/theme.css.ts",
  },
  outDir: "dist",
  splitting: false,
  bundle: true,
  minify: false,
  // sourcemap: true,
  format: [/* "cjs", */ "esm"],
  dts: true,
  platform: "browser",
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: "short",
    }),
  ],
  external: Object.keys(dependencies).concat(Object.keys(devDependencies)),
  clean: true,
});
