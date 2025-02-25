"use client";

import { useEffect, useState } from "react";

export type ProgressBarProps = {
  percentage: number;
  defaultValue?: number;
};

export function ProgressBar({ percentage, defaultValue }: ProgressBarProps) {
  const [progress, setProgress] = useState(defaultValue || 0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="w-full h-2 bg-background-neutral">
      <div
        className={`bg-interactive-primary transition-all duration-1000 h-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
