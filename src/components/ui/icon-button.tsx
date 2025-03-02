import classNames from "classnames";
import { Icon, IconNames } from "./icon";

export type IconButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: "sm" | "base" | "lg";
  iconName: IconNames;
};

export function IconButton({
  iconName,
  size = "base",
  ...props
}: IconButtonProps) {
  const iconSize = {
    sm: 14,
    base: 18,
    lg: 22,
  };

  return (
    <button
      {...props}
      className={classNames(
        "rounded-full bg-background-neutral flex justify-center items-center",
        {
          "w-6 h-6": size === "sm",
          "w-10 h-10": size === "base",
          "w-14 text- h-14": size === "lg",
        }
      )}
    >
      <Icon name={iconName} size={iconSize[size]} />
    </button>
  );
}
