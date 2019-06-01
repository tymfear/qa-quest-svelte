import { writable } from "svelte/store";

const initial = Math.random() < 0.5;

export const showKitty = writable(initial);
export const showAdminArea = writable(false);
