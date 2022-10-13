const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      primary: "var(--font-primary)",
      secondary: "var(--font-secondary)"
    },
    extend: {
      maxWidth: ({ theme }) => ({ ...theme("width") }),
      minWidth: ({ theme }) => ({ ...theme("width") }),
      colors: ({ theme }) => ({
        base: {
          100: {
            DEFAULT: "hsl(240, 33.3%, 98.8%)",
            alt: "hsl(240, 6.7%, 97.1%)"
          },
          200: {
            DEFAULT: "hsl(210, 12.5%, 96.9%)",
            alt: "hsl(240, 18.2%, 95.7%)"
          },
          300: {
            DEFAULT: "hsl(228, 16.1%, 93.9%)",
            alt: "hsl(0, 0%, 92.5%)"
          },
          content: {
            DEFAULT: "hsl(190, 13%, 18%)",
            alt: "hsl(249, 26.5%, 9.6%)"
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
          DEFAULT: "hsl(15, 86%, 90%)",
          content: "hsl(15, 86%, 20%)"
        }
      })
    }
  },
  plugins: []
};

function hexToHSL(hex, satAndLight) {
  // convert hex to rgb
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = +("0x" + hex[1] + hex[1]);
    g = +("0x" + hex[2] + hex[2]);
    b = +("0x" + hex[3] + hex[3]);
  } else if (hex.length === 7) {
    r = +("0x" + hex[1] + hex[2]);
    g = +("0x" + hex[3] + hex[4]);
    b = +("0x" + hex[5] + hex[6]);
  }

  // then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsl(${h}, ${satAndLight?.s || s}%, ${satAndLight?.l || l}%)`;
}
