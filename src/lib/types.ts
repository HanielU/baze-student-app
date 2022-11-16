import type { Writable } from "svelte/store";

export type NavLink = {
  path: string;
  name: string;
  classes: {
    fill?: string;
    line?: string;
    /**
     * Classlist for styling icon wrapper
     */
    wrapper?: string;
  };
};

export type Day = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export type Course = {
  startTime: number;
  endTime: number;
  moduleName: string;
  moduleCode: string;
  lecturer: string;
  venue: string;
  day?: Day;
};

export type WritableCapacitorStorage<T> = Writable<T>;

type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}-${S2}` : never) : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K;
}[keyof T];
