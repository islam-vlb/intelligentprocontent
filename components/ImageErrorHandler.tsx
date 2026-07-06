"use client";

import { useEffect } from "react";

export default function ImageErrorHandler() {
  useEffect(() => {
    function onError(e: Event) {
      const target = e.target as HTMLImageElement | null;
      if (!target || target.tagName !== "IMG") return;
      const src = target.getAttribute("src") || "";
      if (src.includes("/images/products/placeholder.svg")) return;
      const placeholder = "/images/products/placeholder.svg";
      target.src = placeholder;
      target.onerror = () => {
        target.onerror = null;
        target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%23737477">Image not available</text></svg>';
      };
    }

    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);

  return null;
}
