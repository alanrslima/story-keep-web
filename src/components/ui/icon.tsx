import classNames from "classnames";
import { icons } from "lucide-react";

export type IconNames = keyof typeof icons;

export type IconColors =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "content-primary"
  | "content-secondary"
  | "content-tertiary";

export type IconProps = {
  name: IconNames;
  color?: IconColors;
  size?: number;
};

export function Icon({ name, size, color }: IconProps) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      size={size}
      className={classNames({
        "text-content-primary": color === "content-primary",
        "text-content-secondary": color === "content-secondary",
        "text-content-tertiary": color === "content-tertiary",
        "text-primary": color === "primary",
        "text-secondary": color === "secondary",
        "text-black": color === "black",
        "text-white": color === "white",
      })}
    />
  );
}
