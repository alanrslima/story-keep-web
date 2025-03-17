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
};

export function Button({
  title,
  leadingIcon,
  trailingIcon,
  full,
  variant = "primary",
  size = "base",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={classNames(
        "py-2 px-6 justify-center items-center flex gap-2 rounded-full",
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
      {leadingIcon && <Icon size={18} name={leadingIcon} />}
      {/* <svg
        className="w-5 h-5 mr-2 animate-spin text-black "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
        ></path>
      </svg> */}
      <Typography type="button-small">{title}</Typography>
      {trailingIcon && <Icon name={trailingIcon} />}
    </button>
  );
}
