import { writable } from "svelte/store";

export const originalText = writable("");
export const parsedText = writable([]);
export const textChanged = writable(true);
export const percentageClozed = writable(0);

export const step = writable(1);
