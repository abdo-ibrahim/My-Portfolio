export const themes = [
  {
    id: "copper", name: "Copper",
    colors: { "--accent": "#e7a06d", "--accent-hover": "#f2b98f", "--accent-soft": "#332a20", "--background": "#151816", "--foreground": "#1b1e1b", "--surface": "#1e221e", "--surface-raised": "#262b26", "--surface-border": "#363d35", "--muted": "#a3aa9e" },
  },
  {
    id: "sage", name: "Sage",
    colors: { "--accent": "#a8ca98", "--accent-hover": "#c2dfb5", "--accent-soft": "#243121", "--background": "#141916", "--foreground": "#1a211c", "--surface": "#1f2821", "--surface-raised": "#29332a", "--surface-border": "#37473b", "--muted": "#a1afa1" },
  },
  {
    id: "ocean", name: "Ocean",
    colors: { "--accent": "#89bde0", "--accent-hover": "#b0d5ef", "--accent-soft": "#20303e", "--background": "#13191e", "--foreground": "#1a2129", "--surface": "#1e2932", "--surface-raised": "#283541", "--surface-border": "#364651", "--muted": "#a0aeb9" },
  },
  {
    id: "violet", name: "Violet",
    colors: { "--accent": "#bda4e5", "--accent-hover": "#d4c1f1", "--accent-soft": "#30263e", "--background": "#19161e", "--foreground": "#211d28", "--surface": "#292331", "--surface-raised": "#342c3e", "--surface-border": "#443a50", "--muted": "#b0a5bb" },
  },
  {
    id: "rose", name: "Rose",
    colors: { "--accent": "#e5a0ad", "--accent-hover": "#efbdc6", "--accent-soft": "#3b252d", "--background": "#1c1719", "--foreground": "#241e21", "--surface": "#2c2328", "--surface-raised": "#382d32", "--surface-border": "#4b3b41", "--muted": "#b6a4ab" },
  },
] as const;

export type ThemeId = typeof themes[number]["id"];
export const themeStorageKey = "portfolio-color-theme";
export const defaultTheme = themes[0];

// Run before paint so a saved palette does not flash back to Copper on reload.
export const themeInitScript = `(function(){try{var themes=${JSON.stringify(themes)};var saved=localStorage.getItem(${JSON.stringify(themeStorageKey)});var theme=themes.find(function(t){return t.id===saved})||themes[0];var root=document.documentElement;root.dataset.theme=theme.id;Object.keys(theme.colors).forEach(function(key){root.style.setProperty(key,theme.colors[key])})}catch(e){}})();`;
