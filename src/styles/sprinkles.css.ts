import type { Paths } from "$lib/types";
import type { Theme } from "./theme.css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { theme as t } from "./theme.css";

const spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

type FormattedColorKey = Paths<Theme["color"]>;

const themeColors = Object.entries(t.color)
  .flatMap(([k, v]) => format<Theme["color"], FormattedColorKey>([k, v, null]))
  .reduce((prevObj, currObj) => Object.assign(prevObj, currObj));

const properties = defineProperties({
  properties: {
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
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
    backgroundColor: themeColors,
    color: themeColors
  }
});

export const sprinkles = createSprinkles(properties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];

export const testSprinkles = sprinkles({ backgroundColor: "blue", color: "blue-content" });

// T = Object
// FK = FormattedKey
function format<T extends Record<string, T[keyof T]>, FK extends string>([key, value, prevK]: [
  string,
  T[keyof T],
  string | null
]) {
  const d: Record<FK, string>[] = [];

  // check if second entry is an object
  if (typeof value == "object") {
    const entryObjKeys = Object.keys(value); // get keys of current object

    entryObjKeys.forEach(objKey => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const objValue = value[objKey];

      if (typeof objValue === "string") {
        const formattedKey = `${(prevK && prevK + "-") || ""}${key}-${objKey}`;
        d.push(<Record<FK, string>>{ [formattedKey]: objValue as string });
      } else {
        const entries = Object.entries({ [objKey]: objValue });
        d.push(
          ...entries.flatMap(([k, v]) =>
            format<T, FK>([k, v, `${prevK ? prevK + "-" + key : key}`])
          )
        );
      }
    });
  } else {
    d.push(<Record<FK, string>>{ [key]: value as unknown as string });
  }
  return d;
}
