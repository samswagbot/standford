import type { Apod } from "@/types/apod";

const VISITED_KEY = "visited_apods";
const SELECTED_APOD_KEY = "selected_apod";
const APODS_KEY = "cached_apods";

const isBrowser = typeof window !== "undefined";

export const getVisited = (): string[] => {
  if (!isBrowser) return [];
  return JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
};

export const addVisited = (date: string) => {
  if (!isBrowser) return;

  const visited = new Set(getVisited());
  visited.add(date);

  localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
};

export const clearVisited = () => {
  if (!isBrowser) return;
  localStorage.removeItem(VISITED_KEY);
};

export const setSelectedApod = (apod: Apod) => {
  if (!isBrowser) return;
  sessionStorage.setItem(SELECTED_APOD_KEY, JSON.stringify(apod));
};

export const getSelectedApod = (): Apod | null => {
  if (!isBrowser) return null;
  return JSON.parse(sessionStorage.getItem(SELECTED_APOD_KEY) || "null");
};

export const setCachedApods = (apods: Apod[]) => {
  if (!isBrowser) return;
  sessionStorage.setItem(APODS_KEY, JSON.stringify(apods));
};

export const getCachedApods = (): Apod[] => {
  if (!isBrowser) return [];
  return JSON.parse(sessionStorage.getItem(APODS_KEY) || "[]");
};
