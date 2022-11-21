import { WebPlugin } from "@capacitor/core";
import type { SmallestWidthPlugin } from "./definitions";

export class SmallestWidthWeb extends WebPlugin implements SmallestWidthPlugin {
  constructor() {
    super();
  }

  async getSmallestWidth() {
    return { value: window.innerWidth - 1 };
  }
}
