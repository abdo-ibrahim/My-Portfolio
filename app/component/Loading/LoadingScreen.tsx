"use client";
import { useState, useEffect } from "react";
import "./LoadingScreen.css";
export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // تحميل لمدة 2 ثانية
  }, []);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-foreground text-white text-xl">
      <h2 className="section-title font-[300] text-center text-[22px] bg-transparent gap-0 text-white select-none pointer-events-none tracking-[0.22em] " id="loading-screen">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>...</span>

      </h2>
    </div>
  ) : (
    children
  );
}
