// const plugin = require("tailwindcss/plugin");

// exists to share theme variables with vanilla-extract
export const themeVars = {
  color: {
    base: {
      100: "hsl(0, 0%, 100%)",
      "100Alt": "hsl(240, 6.7%, 97.1%)",

      200: "hsl(0, 0%, 97%)",
      "200Alt": "hsl(0, 0%, 98%)", // sd
      // '200Alt': "hsl(206, 54%, 97%)" // sd

      300: "hsl(228, 16.1%, 93.9%)",
      "300Alt": "hsl(192, 19%, 95%)", // sd

      400: "hsl(228, 16.1%, 93.9%)",
      "400Alt": "hsl(228, 14%, 93%)", // sd

      content: "hsl(190, 13%, 18%)",
      contentAlt: "hsl(228, 6%, 15%)", // sd
      contentMuted: "hsl(207, 4%, 59%)",
    },

    primary: "hsl(249, 26.5%, 9.6%)",
    primaryContent: "hsl(0, 0%, 100%)",

    red: "hsl(360, 100%, 90%)",
    redContent: "hsl(360, 100%, 20%)",

    blue: "hsl(195, 100%, 90%)",
    blueContent: "hsl(195, 100%, 20%)",

    green: "hsl(152, 68%, 90%)",
    greenContent: "hsl(158, 74%, 38%)",

    brown: "hsl(35, 100%, 90%)",
    brownContent: "hsl(35, 100%, 20%)",
  },
  font: {
    primary: "OpenSans",
    secondary: "Poppins",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const old = {
  base: {
    100: {
      DEFAULT: "hsl(0, 0%, 100%)",
      alt: "hsl(240, 6.7%, 97.1%)",
    },
    200: {
      DEFAULT: "hsl(0, 0%, 98%)",
      alt: "hsl(206, 54%, 97%)", // sd
    },
    300: {
      DEFAULT: "hsl(228, 16.1%, 93.9%)",
      alt: "hsl(192, 19%, 95%)", // sd
    },
    400: {
      DEFAULT: "hsl(228, 16.1%, 93.9%)",
      alt: "hsl(228, 14%, 93%)", // sd
    },
    content: {
      DEFAULT: "hsl(190, 13%, 18%)",
      alt: "hsl(228, 6%, 15%)", // sd
      muted: "hsl(209, 14%, 43%)",
    },
  },
  primary: {
    DEFAULT: "hsl(249, 26.5%, 9.6%)",
    content: "hsl(0, 0%, 100%)",
  },
  red: {
    DEFAULT: "hsl(360, 100%, 90%)",
    content: "hsl(360, 100%, 20%)",
  },
  blue: {
    DEFAULT: "hsl(195, 100%, 90%)",
    content: "hsl(195, 100%, 20%)",
  },
  green: {
    DEFAULT: "hsl(152, 68%, 90%)",
    content: "hsl(152, 68%, 20%)",
  },
  brown: {
    DEFAULT: "hsl(35, 100%, 90%)",
    content: "hsl(35, 100%, 20%)",
  },
};
