"use client";
import { useEffect } from "react";

export default function GestureBlocker({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <>{children}</>;
}
