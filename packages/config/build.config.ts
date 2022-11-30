import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/style", "src/theme"],
  clean: true,
  declaration: true,
  externals: [
    "vite",
    "unocss",
    "unocss/vite",
    "@unocss/preset-wind",
    "@sveltejs/kit",
    "@sveltejs/kit/vite",
    "@sveltejs/adapter-static",
    "svelte-preprocess",
    "@vanilla-extract/vite-plugin",
    "@vanilla-extract/sprinkles",
    "@vanilla-extract/css",
    "@packages/shared",
  ],
  rollup: {
    emitCJS: false,
  },
});
