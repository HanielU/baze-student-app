import { SmallestWidth } from "$plugins/smallest-width";
import { Device } from "@capacitor/device";
import { readable, writable } from "svelte/store";
import { capacitorStorageStore } from "./capacitor-storage";

export const navigationStack = capacitorStorageStore("history-length", window.history.length);
export const sidebarOpen = writable(false);

/**
 * The value of the devices smallest width (android)
 */
export const smallestWidth = readable(0, set => {
  SmallestWidth.getSmallestWidth().then(({ value }) => set(value));
  return () => null;
});

/**
 * The device platform (lowercase).
 */
export const platform = readable<"web" | "ios" | "android">("web", set => {
  Device.getInfo().then(({ platform }) => set(platform));
  return () => null;
});
