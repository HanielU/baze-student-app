import { createGlobalTheme, createGlobalThemeContract, globalStyle } from "@vanilla-extract/css";

// :highlight:
// DEFAULT - default color
// content - text/content color to be used on the default color background

// https://vanilla-extract.style/documentation/global-api/create-global-theme-contract/#formatting-the-variable-names
export const vars = createGlobalThemeContract(
  {
    color: {
      base: {
        "100": {
          DEFAULT: "",
          alt: ""
        },
        "200": {
          DEFAULT: "",
          alt: ""
        },
        "300": {
          DEFAULT: "",
          alt: ""
        },
        content: {
          DEFAULT: "",
          alt: ""
        }
      },
      primary: {
        DEFAULT: "",
        content: ""
      }
      // secondary: {
      //   DEFAULT: null,
      //   content: null
      // },
      // accent: {
      //   DEFAULT: null,
      //   content: null
      // },
      // neutral: {
      //   DEFAULT: null,
      //   content: null
      // }
    },
    font: {
      primary: null,
      secondary: null
    }
  },
  (_value, path) => `${path.map(s => s).join("-")}`
);

export const rawVars = {
  color: {
    // base: {
    //   "100": "#FBFBFD", // base
    //   "100-alt": "#EFEFF1", // base
    //   "200": "#F6F7F8", // darker
    //   "200-alt": "#F2F2F6", // base
    //   "300": "#EDEEF2", // darkest
    //   "300-alt": "#ECECEC", // base
    //   content: "#283234",
    //   "content-alt": vars.color.primary.DEFAULT
    // },
    base: {
      "100": {
        DEFAULT: "#FBFBFD",
        alt: "#EFEFF1"
      },
      "200": {
        DEFAULT: "#F6F7F8",
        alt: "#F2F2F6"
      },
      "300": {
        DEFAULT: "#EDEEF2",
        alt: "#ECECEC"
      },
      content: {
        DEFAULT: "#283234",
        alt: vars.color.primary.DEFAULT
      }
    },
    primary: {
      DEFAULT: "#14121F",
      content: "#ffffff"
    }
  },
  font: {
    primary: "Roboto",
    secondary: "Poppins"
  }
};

createGlobalTheme(":root", vars, rawVars);

globalStyle(":root", {
  fontFamily: vars.font.primary,
  color: vars.color.base.content.alt,
  backgroundColor: vars.color.primary.content
});
