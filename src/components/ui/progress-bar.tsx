"use client";

import { useEffect, useState } from "react";
import { Typography } from "./typography";

export type ProgressBarProps = {
  percentage: number;
  defaultValue?: number;
  showPercentage?: boolean;
};

export function ProgressBar({
  percentage,
  defaultValue,
  showPercentage,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(defaultValue || 0);

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="flex flex-col gap-2">
      {showPercentage && (
        <div className="flex justify-end">
          <Typography type="body-default-bold">30%</Typography>
        </div>
      )}
      <div className="w-full h-2 bg-background-neutral">
        <div
          className={`bg-interactive-primary transition-all duration-1000 h-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
