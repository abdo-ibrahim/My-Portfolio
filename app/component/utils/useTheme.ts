"use client";

import { useSyncExternalStore } from "react";
import { defaultTheme, themes, themeStorageKey, type ThemeId } from "../../data/themes";

const changeEvent = "portfolio-theme-change";

function applyTheme(id: string | null) {
  const theme = themes.find(item => item.id === id) ?? defaultTheme;
  document.documentElement.dataset.theme = theme.id;
  for (const [property, value] of Object.entries(theme.colors)) {
    document.documentElement.style.setProperty(property, value);
  }
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    applyTheme(event.newValue);
    onChange();
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme ?? defaultTheme.id;
}

function setTheme(id: ThemeId) {
  applyTheme(id);
  try { localStorage.setItem(themeStorageKey, id); } catch { /* The palette still works when storage is unavailable. */ }
  window.dispatchEvent(new Event(changeEvent));
}

export function useTheme() {
  const id = useSyncExternalStore(subscribe, getSnapshot, () => defaultTheme.id);
  return { theme: themes.find(item => item.id === id) ?? defaultTheme, setTheme };
}
