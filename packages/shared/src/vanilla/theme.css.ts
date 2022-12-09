import { themeVars, themeColorsMain } from "@/theme";
import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/#formatting-the-variable-names
export const theme = createGlobalThemeContract(
  { ...themeVars, ...themeColorsMain },
  (_value, path) =>
    `${path
      .map(s => s)
      .join("-")
      // replace all capital letters with "-"+CapitalLetter.toLowerCase()
      // i.e primaryRed -> primary-red
      .replace(/[A-Z]/, v => `-${v.toLowerCase()}`)}`
);

createGlobalTheme(":root", theme, { ...themeVars, ...themeColorsMain });

export type Theme = typeof theme;
