// const plugin = require("tailwindcss/plugin");

// exists to share theme variables with vanilla-extract
const themeVars = {
  color: {
    base: {
      100: "hsl(0, 0%, 100%)",
      "100-alt": "hsl(240, 6.7%, 97.1%)",

      200: "hsl(0, 0%, 98%)",
      "200-alt": "hsl(0, 0%, 98%)", // sd
      // '200-alt': "hsl(206, 54%, 97%)" // sd

      300: "hsl(228, 16.1%, 93.9%)",
      "300-alt": "hsl(192, 19%, 95%)", // sd

      400: "hsl(228, 16.1%, 93.9%)",
      "400-alt": "hsl(228, 14%, 93%)", // sd

      content: "hsl(190, 13%, 18%)",
      "content-alt": "hsl(228, 6%, 15%)", // sd
      "content-muted": "hsl(207, 4%, 59%)"
    },

    primary: "hsl(249, 26.5%, 9.6%)",
    "primary-content": "hsl(0, 0%, 100%)",

    red: "hsl(360, 100%, 90%)",
    "red-content": "hsl(360, 100%, 20%)",

    blue: "hsl(195, 100%, 90%)",
    "blue-content": "hsl(195, 100%, 20%)",

    green: "hsl(152, 68%, 90%)",
    "green-content": "hsl(152, 68%, 20%)",

    brown: "hsl(35, 100%, 90%)",
    "brown-content": "hsl(35, 100%, 20%)"
  },
  font: {
    primary: "OpenSans",
    secondary: "Poppins"
  }
};

/** @type {import('tailwindcss').Config & {themeVars:typeof themeVars}} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: themeVars.font,
    extend: {
      maxWidth: ({ theme }) => ({ ...theme("width") }),
      minWidth: ({ theme }) => ({ ...theme("width") }),
      colors: themeVars.color,
      boxShadow: {
        DEFAULT: "box-shadow: 0px 0px 16px hsla(225, 12.9%, 87.8%, 0.7)"
      }
    }
  },
  plugins: [],

  // custom export
  themeVars
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const old = {
  base: {
    100: {
      DEFAULT: "hsl(0, 0%, 100%)",
      alt: "hsl(240, 6.7%, 97.1%)"
    },
    200: {
      DEFAULT: "hsl(0, 0%, 98%)",
      alt: "hsl(206, 54%, 97%)" // sd
    },
    300: {
      DEFAULT: "hsl(228, 16.1%, 93.9%)",
      alt: "hsl(192, 19%, 95%)" // sd
    },
    400: {
      DEFAULT: "hsl(228, 16.1%, 93.9%)",
      alt: "hsl(228, 14%, 93%)" // sd
    },
    content: {
      DEFAULT: "hsl(190, 13%, 18%)",
      alt: "hsl(228, 6%, 15%)", // sd
      muted: "hsl(209, 14%, 43%)"
    }
  },
  primary: {
    DEFAULT: "hsl(249, 26.5%, 9.6%)",
    content: "hsl(0, 0%, 100%)"
  },
  red: {
    DEFAULT: "hsl(360, 100%, 90%)",
    content: "hsl(360, 100%, 20%)"
  },
  blue: {
    DEFAULT: "hsl(195, 100%, 90%)",
    content: "hsl(195, 100%, 20%)"
  },
  green: {
    DEFAULT: "hsl(152, 68%, 90%)",
    content: "hsl(152, 68%, 20%)"
  },
  brown: {
    DEFAULT: "hsl(35, 100%, 90%)",
    content: "hsl(35, 100%, 20%)"
  }
};
