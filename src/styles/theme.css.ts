export { themeVars } from "tailwind.config.cjs";
import { themeVars } from "tailwind.config.cjs";
import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/#formatting-the-variable-names
export const theme = createGlobalThemeContract(
  themeVars,
  (_value, path) => `${path.map(s => s).join("-")}`
);

createGlobalTheme(":root", theme, themeVars);

export type Theme = typeof theme;
