import type { UserConfig as ViteConfig } from "vite";
import unocss from "unocss/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// import { sveltekit } from "@sveltejs/kit/vite"; // removed because Idk how it works and it's messing stuff up

const viteConfig: ViteConfig = {
  plugins: [unocss(), vanillaExtractPlugin()],
};

export default viteConfig;
