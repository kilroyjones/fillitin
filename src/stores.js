import { writable } from "svelte/store";

export const updateFlag = writable(false);
export const percentageClozed = writable(0);
export const includePunctuation = writable(false);
export const selectSimilar = writable(false);
export const regex = writable(/(\s+)|([\.\;\!\?\,\:\"])/);
export const step = writable(1);
