import { writable } from "svelte/store";
import { capacitorStorageStore } from "./capacitor-storage";

export const navigationStack = capacitorStorageStore("history-length", window.history.length);
export const sidebarOpen = writable(false);
