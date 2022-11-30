import type { Paths } from "../types";
import type { Theme } from "./theme.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { resolveVars, pxr } from "./utils";
import { theme as t } from "./theme.css";

type FormattedColorKey = Paths<Theme["color"]>;
type FormattedFontKey = Paths<Theme["font"]>;
const themeColors = resolveVars<Theme["color"], FormattedColorKey>(t.color);
const themeFonts = resolveVars<Theme["font"], FormattedFontKey>(t.font);

const spacing = {
  px: pxr(1),
  "0": pxr(0),
  "0.5": pxr(2),
  "1": pxr(4),
  "1.5": pxr(6),
  "2": pxr(8),
  "2.5": pxr(10),
  "3": pxr(12),
  "3.5": pxr(14),
  "4": pxr(16),
  "5": pxr(20),
  "6": pxr(24),
  "7": pxr(28),
  "8": pxr(32),
  "9": pxr(36),
  "10": pxr(40),
  "11": pxr(44),
  "12": pxr(48),
  full: "100%",
  auto: "auto",
  "fit-content": "fit-content",
  "max-content": "max-content",
};

const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
    xl: { "@media": "screen and (min-width: 1280px)" },
  },
  defaultCondition: "default",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    width: spacing,
    maxWidth: spacing,
    minWidth: spacing,
    height: spacing,
    maxHeight: spacing,
    minHeight: spacing,
    top: spacing,
    bottom: spacing,
    left: spacing,
    right: spacing,
  },

  shorthands: {
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],

    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],

    w: ["width"],
    maxW: ["maxWidth"],
    minW: ["minWidth"],
    h: ["height"],
    maxH: ["maxHeight"],
    minH: ["minHeight"],

    placeItems: ["justifyContent", "alignItems"],
  },
});

const properties = defineProperties({
  properties: {
    borderRadius: spacing,
    color: themeColors,
    borderColor: themeColors,
    backgroundColor: themeColors,

    fontFamily: themeFonts,
    fontWeight,
    letterSpacing,
    textTransform: ["none", "lowercase", "capitalize", "uppercase"],
    textAlign: ["center", "left", "end"],
  },

  shorthands: {
    rounded: ["borderRadius"],
  },
});

/**
 * Vanilla-Extract Sprinkles!
 * ---
 * Named "tws" as an alias for tailwind-sprinkles
 * cos it's sortof like tailwind
 */
export const tws = createSprinkles(responsiveProperties, properties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof tws>[0];
