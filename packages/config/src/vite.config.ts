import type { UserConfig as ViteConfig } from "vite";
import unocss from "unocss/vite";
import { macaronVitePlugin } from "@macaron-css/vite";
// import { sveltekit } from "@sveltejs/kit/vite"; // removed because Idk how it works and it's messing stuff up

const viteConfig: ViteConfig = {
  plugins: [unocss(), macaronVitePlugin()],
};

export default viteConfig;
