import { theme } from "$styles/theme.css";
import { style } from "@vanilla-extract/css";

export const menuBtn = style({
  position: "relative",
  height: 2,
  width: 25,
  background: "transparent",

  selectors: {
    "&::before, &::after": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      height: "inherit",
      width: "inherit",
      background: theme.color.base.content.alt,
      borderRadius: 2,
      transition: "transform 400ms ease"
    },
    "&::before": {
      transform: "translateY(-3px)"
    },
    "&::after": {
      transform: "translateY(3px)"
    },
    "&.open::before": {
      transform: "rotate(-45deg)"
    },
    "&.open::after": {
      transform: "rotate(45deg)"
    }
  }
});
