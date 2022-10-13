import { writable } from "svelte/store";

export const navigationStack = writable(0);
export const sidebarOpen = writable(false);
