/** Converts CSS pixel values to rem values */
export const pxr = (px: number) => `${px * 0.0625}rem`;

/** Shape of object with theme variables */
type VarObject<T> = Record<string, string | Record<string, string | T[keyof T]>>;

export function resolveVars<T extends VarObject<T>, FK extends string>(vars: T) {
  return Object.entries(vars)
    .flatMap(([k, v]) => format<T, FK>([k, v as string | T[keyof T], null]))
    .reduce((prevObj, currObj) => Object.assign(prevObj, currObj));
}

// T = Object
// FK = FormattedKey
export function format<T extends VarObject<T>, FK extends string>([key, value, prevK]: [
  string,
  string | T[keyof T],
  string | null
]) {
  const d: Record<FK, string>[] = [];

  // check if second entry is an object
  if (typeof value == "object") {
    const entryObjKeys = Object.keys(value); // get keys of current object

    entryObjKeys.forEach(objKey => {
      const objValue = value[objKey];

      if (typeof objValue === "string") {
        const formattedKey = `${(prevK && prevK + "-") || ""}${key}-${objKey}`;
        d.push(<Record<FK, string>>{ [formattedKey]: objValue });
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
    d.push(<Record<FK, string>>{ [key]: value });
  }
  return d;
}
