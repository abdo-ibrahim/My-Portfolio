"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { LuPalette } from "react-icons/lu";
import { themes } from "../../data/themes";
import { useTheme } from "../utils/useTheme";
import "./ThemePicker.css";

export default function ThemePicker() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    root.current?.querySelector<HTMLInputElement>("input:checked")?.focus();
    const onOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      trigger.current?.focus();
    };
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div className="theme-picker" ref={root}>
      <button ref={trigger} type="button" className="theme-trigger" aria-label="Choose color theme" title="Color palette" aria-expanded={open} aria-controls="color-palette" onClick={() => setOpen(!open)}>
        <LuPalette aria-hidden="true" />
      </button>
      {open && <div id="color-palette" className="theme-panel">
        <div className="theme-panel-heading"><span>Color palette</span><span className="theme-current">{theme.name}</span></div>
        <div className="theme-swatches" role="radiogroup" aria-label="Color theme">
          {themes.map(palette => <label key={palette.id} className="theme-option">
            <input type="radio" name="color-theme" value={palette.id} checked={theme.id === palette.id} onChange={() => setTheme(palette.id)} aria-label={palette.name} />
            <span className="theme-swatch" style={{ backgroundColor: palette.colors["--accent"] }}>{theme.id === palette.id && <FiCheck aria-hidden="true" />}</span>
            <span>{palette.name}</span>
          </label>)}
        </div>
      </div>}
    </div>
  );
}
