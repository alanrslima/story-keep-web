export type ProgressBarProps = {
  percentage: number;
};

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-background-neutral">
      <div
        className={`bg-primary transition-all duration-500 h-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
