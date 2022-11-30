import { svelteConfig } from "@packages/config";

/** @type {import('@sveltejs/kit').Config} */
export default {
  ...svelteConfig,
  kit: {
    ...svelteConfig.kit,
    alias: {
      $styles: "./src/styles",
      $plugins: "./src/plugins",
    },
  },
};
