import type { Updater } from "svelte/store";
import type { WritableCapacitorStorage } from "../types";
import { Preferences } from "@capacitor/preferences";
import { writable } from "svelte/store";

const client = typeof window !== "undefined";

export function capacitorStorageStore<T>(
  key: string,
  initial: T
): WritableCapacitorStorage<T> {
  const {
    set: setStore,
    update: updateStore,
    subscribe,
  } = writable(initial, () => {
    if (!client) return;
    getAndSetFromCapacitorStorage();
    return () => 0;
  });

  /** Set both the LocalStorage and this Svelte store */
  const setSync = (value: T) => {
    setStore(value);
    Preferences.set({ key, value: JSON.stringify(value) });
  };

  /** update both the capacitor storage and the svelte store */
  const updateSync = (value: Updater<T>) => {
    let track = 0;
    const unsub = subscribe(async current => {
      // makes sure this function runs only once during the lifecycle
      // of the "updateSync" function, which is after "updateStore"
      // has run.
      if (++track == 1) return;

      client &&
        (await Preferences.set({ key, value: JSON.stringify(current) }));
    });
    updateStore(value);
    unsub();
  };

  const getAndSetFromCapacitorStorage = async () => {
    const { value: localValue } = await Preferences.get({ key });

    if (localValue === null) setSync(initial);
    else {
      try {
        setStore(JSON.parse(localValue));
      } catch {
        setSync(initial);
      }
    }
  };

  return { subscribe, set: setSync, update: updateSync };
}
