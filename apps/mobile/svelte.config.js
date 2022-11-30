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

// :highlight: Needs to be outside src for `svelte-kit sync` to work

// const config = {
//   // Consult https://github.com/sveltejs/svelte-preprocess
//   // for more information about preprocessors
//   preprocess: preprocess(),

//   kit: {
//     adapter: adapter(),
//     alias: {
//       $styles: "./src/styles",
//       $plugins: "./src/plugins",
//     },
//   },
// };

// export default config;
