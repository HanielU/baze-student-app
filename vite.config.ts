import type { UserConfig } from "vite";
import unocss from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const config: UserConfig = {
  plugins: [unocss(), vanillaExtractPlugin(), sveltekit()],
  build: {
    rollupOptions: {
      external: ["theme-config"],
    },
  },
};

export default config;
