import classNames from "classnames";
import { Icon, IconNames } from "./icon";

export type IconButtonProps = {
  size?: "sm" | "base" | "lg";
  iconName: IconNames;
};

export function IconButton({ iconName, size = "base" }: IconButtonProps) {
  return (
    <button
      className={classNames("rounded-full", {
        "w-6 h-6": size === "sm",
        "w-10 h-10": size === "base",
        "w-14 text- h-14": size === "lg",
      })}
    >
      <Icon name={iconName} />
    </button>
  );
}
