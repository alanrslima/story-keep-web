import { Color } from "@/types/color";
import classNames from "classnames";
import { icons } from "lucide-react";

export type IconNames = keyof typeof icons;

export type IconColors =
  | Color
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

  return <LucideIcon size={size} className={classNames(`text-${color}`)} />;
}
