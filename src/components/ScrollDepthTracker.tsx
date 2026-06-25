"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Fires a GA scroll_depth event once per threshold per page load. Tells us how
// far down the page visitors actually get — the key to seeing where the 95%
// bounce happens (hero? pricing? form?).
const THRESHOLDS = [25, 50, 75, 100];

export default function ScrollDepthTracker() {
  useEffect(() => {
    const fired = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = (scrollTop / docHeight) * 100;

      for (const t of THRESHOLDS) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t);
          track.scrollDepth(t);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
