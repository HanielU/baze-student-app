import {
  defineConfig,
  extractorSvelte,
  presetIcons,
  presetUno,
  presetAttributify,
  presetTagify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/preset-tagify
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

import { themeVars } from "./theme-config";

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  extractors: [extractorSvelte],
  configDeps: ["./theme-config.ts"],

  // https://github.com/unocss/unocss#extend-theme
  theme: {
    fontFamily: themeVars.font,
    colors: themeVars.color,
    boxShadow: {
      DEFAULT: "0px 4px 16px hsla(225, 12.9%, 87.8%, 0.3);",
    },
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {
    "page-heading": "mb-10 px-5 font-secondary text-3xl font-semibold tracking-tight",
    "flex-between": "flex justify-between items-center",
    "flex-center": "flex justify-center items-center",
  },

  // https://github.com/unocss/unocss#using-presets
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2 }),
    presetTagify({
      prefix: "un:",
      extraProperties: matched => {
        if (matched.startsWith("i-")) return { display: "inline-block" };
        return { display: "block" };
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
