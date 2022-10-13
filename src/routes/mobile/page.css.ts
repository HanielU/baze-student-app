import { style } from "@vanilla-extract/css";

export const wrapper = style([
  /*tw*/ "illegal-scroll flex max-w-full items-between gap-5 overflow-x-scroll px-5",
  {
    boxShadow: "-9px 0px 0px 0px var(--color-primary-DEFAULT) inset"
  }
]);
