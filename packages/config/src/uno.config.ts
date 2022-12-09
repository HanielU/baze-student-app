import {
  extractorSvelte,
  presetIcons,
  presetUno,
  presetAttributify,
  presetTagify,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  type UserConfig as UnoConfig,
} from "unocss";
import { themeVars, themeVars2, themeColorsMain } from "@packages/shared/theme";

// https://github.com/unocss/unocss#configurations
export const unoConfig: UnoConfig = {
  extractors: [extractorSvelte],
  // configDeps: ["./theme-config.ts"],

  // https://github.com/unocss/unocss#extend-theme
  theme: {
    fontFamily: themeVars.font,
    colors: {
      ...themeVars.color,
      ...themeVars2,
      ...themeColorsMain,
    },
    boxShadow: {
      DEFAULT: "0px 4px 16px hsla(225, 12.9%, 87.8%, 0.3);",
    },
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: [
    {
      "page-heading": "mb-8 px-5 font-(secondary semibold) text-(3xl neutral-900) tracking-tight",
    },
    [
      // s-flex stands for flex-shortcut
      // to avoid mixups with default flex utilities like flex-wrap
      /^s-flex-([a-z]+)-?([a-z]*)$/,
      ([, justify, align]) => `flex justify-${justify} items-${align || "center"}`,
    ],
    // use when width and height values are the same
    [/^square-(.*)$/, ([, v]) => `h-${v} w-${v}`],
  ],

  variants: [
    matcher => {
      const [m1, m2, m3] = ["scrollbar:", "scrollbar-track:", "scrollbar-thumb:"];
      let matchedStr = "";

      if (matcher.startsWith(m1)) {
        matchedStr = m1;
      } else if (matcher.startsWith(m2)) {
        matchedStr = m2;
      } else if (matcher.startsWith(m3)) {
        matchedStr = m3;
      } else {
        return matcher;
      }

      return {
        matcher: matcher.slice(matchedStr.length),
        selector: s =>
          `${s}::-webkit-scrollbar${
            matchedStr == m2 ? "-track" : matchedStr == m3 ? "-thumb" : ""
          }`,
      };
    },
  ],

  preflights: [
    {
      getCSS: ({ theme }: { theme: any }) => `
      *,
      *::before,
      *::after {
        user-select:none;
        border-color: ${theme.colors.neutral[100]};
      }

      html,
      body {
        overflow-x: hidden !important;
      }

      :root {
        -webkit-tap-highlight-color: transparent;
        position: relative;
        color: ${theme.colors.neutral[300]};
        font-family: OpenSans;
        background-color: ${theme.colors.neutral[50]};
      }
      `,
    },
  ],
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
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
};
