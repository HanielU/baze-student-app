import { registerPlugin } from "@capacitor/core";

import type { SmallestWidthPlugin } from "./definitions";

const SmallestWidth = registerPlugin<SmallestWidthPlugin>("SmallestWidth", {
  web: () => import("./web").then(m => new m.SmallestWidthWeb()),
});

export * from "./definitions";
export { SmallestWidth };
