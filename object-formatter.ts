const obj = {
  base: {
    content: "hey",
    "content-alt": "hey gorl",
    new: { damn: "sheesh" },
    fr: {
      hell: {
        to: "yeah",
        shit: {
          storm: "france",
          rd: "bean",
        },
      },
    },
  },
  primary: "Sheesh",
};

type Join<S1, S2> = S1 extends string
  ? S2 extends string
    ? `${S1}-${S2}`
    : never
  : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Join<K, Paths<T[K]>>
    : K;
}[keyof T];

type Obj = typeof obj;
type K = Paths<Obj>;

const entries = Object.entries(obj);
const concatenated = entries
  .flatMap(([k, v]) => format<Obj, K>([k, v, null]))
  .reduce((prevObj, currObj) => Object.assign(prevObj, currObj));

console.log(concatenated["primary"]);

function format<T, K extends string>([key, value, prevK]: [
  string,
  T[keyof T],
  string | null
]) {
  const d: Record<K, string>[] = [];

  // check if second entry is an object
  if (typeof value == "object") {
    const entryObjKeys = Object.keys(value); // get keys of current object

    entryObjKeys.forEach(objKey => {
      const objValue = value[objKey];

      if (typeof objValue === "string") {
        const formattedKey = `${(prevK && prevK + "-") || ""}${key}-${objKey}`;
        d.push(<Record<K, string>>{ [formattedKey]: objValue });
      } else {
        const entries = Object.entries({ [objKey]: objValue });
        d.push(
          ...entries.flatMap(([k, v]) =>
            format<T, K>([k, v, `${prevK ? prevK + "-" + key : key}`])
          )
        );
      }
    });
  } else {
    d.push(<Record<K, string>>{ [key]: value as unknown as string });
  }
  return d;
}
