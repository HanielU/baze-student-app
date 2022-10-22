/** Converts CSS pixel values to rem values */
export const pxr = (px: number) => `${px * 0.0625}rem`;

export function resolveVars<T extends Record<string, T[keyof T]>, FK extends string>(vars: T) {
  return Object.entries(vars)
    .flatMap(([k, v]) => format<T, FK>([k, v, null]))
    .reduce((prevObj, currObj) => Object.assign(prevObj, currObj));
}

// T = Object
// FK = FormattedKey
export function format<T extends Record<string, T[keyof T]>, FK extends string>([
  key,
  value,
  prevK,
]: [string, T[keyof T], string | null]) {
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
