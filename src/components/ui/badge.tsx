import classNames from "classnames";
import { Typography } from "./typography";

export type BadgeTypeProps = "neutral" | "positive" | "negative" | "warning";

export type BadgeProps = {
  text: string;
  type?: BadgeTypeProps;
};

export function Badge({ text, type = "neutral" }: BadgeProps) {
  return (
    <div
      className={classNames("uppercase flex rounded-lg px-2 py-1", {
        "bg-background-screen": type === "neutral",
      })}
    >
      <Typography type="caption">{text}</Typography>
    </div>
  );
}
