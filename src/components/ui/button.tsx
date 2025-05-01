import classNames from "classnames";
import { Icon, IconNames } from "./icon";
import { Typography } from "./typography";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "minimal"
  | "outline";

export type ButtonSize = "xs" | "sm" | "base" | "lg" | "xl";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  variant?: ButtonVariants;
  full?: boolean;
  size?: ButtonSize;
  isLoading?: boolean;
};

export function Button({
  title,
  leadingIcon,
  trailingIcon,
  full,
  isLoading,
  variant = "primary",
  size = "base",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={isLoading}
      className={classNames(
        "py-2 px-6 justify-center items-center flex gap-2 rounded-full disabled:cursor-not-allowed",
        {
          "w-full": full,
          "bg-primary-light text-content-primary": variant === "primary",
          "bg-secondary text-primary-light": variant === "secondary",
          "bg-[rgba(0,0,0,0.4)] text-white": variant === "tertiary",
          "bg-transparent px-[0px] text-content-primary": variant === "minimal",
          "bg-transparent border-[1px] border-border-neutral text-content-primary":
            variant === "outline",
          "h-[32px]": size === "xs",
          "h-[36px]": size === "sm",
          "h-[40px]": size === "base",
          "h-[44px]": size === "lg",
          "h-[48px]": size === "xl",
        }
      )}
    >
      {isLoading && (
        <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
      )}
      {leadingIcon && <Icon size={18} name={leadingIcon} />}
      <Typography type="button-small">{title}</Typography>
      {trailingIcon && <Icon name={trailingIcon} />}
    </button>
  );
}
