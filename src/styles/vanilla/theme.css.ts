export { themeVars } from "theme-config";
import { themeVars, themeVars3 } from "theme-config";
import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/#formatting-the-variable-names
export const theme = createGlobalThemeContract(
  { ...themeVars, ...themeVars3 },
  (_value, path) =>
    `${path
      .map(s => s)
      .join("-")
      // replace all capital letters with "-"+CapitalLetter.toLowerCase()
      // i.e primaryRed -> primary-red
      .replace(/[A-Z]/, v => `-${v.toLowerCase()}`)}`
);

createGlobalTheme(":root", theme, { ...themeVars, ...themeVars3 });

export type Theme = typeof theme;
