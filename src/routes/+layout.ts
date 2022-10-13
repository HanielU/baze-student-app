export const prerender = true;
export const ssr = false;

import type { LayoutLoad } from "./$types";
import { Device } from "@capacitor/device";
import { goto } from "$app/navigation";

export const load: LayoutLoad = async ({ url }) => {
  const { platform } = await Device.getInfo();
  console.log({ platform, window });

  switch (platform) {
    case "web":
      !url.pathname.startsWith("/mobile") && goto("/mobile");
      // !url.pathname.startsWith("/desktop") && goto("/desktop")
      break;
    default:
      !url.pathname.startsWith("/mobile") && goto("/mobile");
      break;
  }
};
