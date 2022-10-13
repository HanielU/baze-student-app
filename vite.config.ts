import { sveltekit } from "@sveltejs/kit/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [vanillaExtractPlugin(), sveltekit()]
};

export default config;
