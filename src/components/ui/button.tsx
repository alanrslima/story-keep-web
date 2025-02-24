import classNames from "classnames";
import { Icon, IconNames } from "./icon";
import { Typography } from "./typography";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "minimal"
  | "outline";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  leadingIcon?: IconNames;
  trailingIcon?: IconNames;
  variant?: ButtonVariants;
};

export function Button({
  title,
  leadingIcon,
  trailingIcon,
  variant = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={classNames(
        "py-2 px-6 self-start items-center flex gap-2 rounded-full",
        {
          "bg-primary-light text-content-primary": variant === "primary",
          "bg-secondary text-primary-light": variant === "secondary",
          "bg-[rgba(0,0,0,0.4)] text-white": variant === "tertiary",
          "bg-transparent px-[0px] text-content-primary": variant === "minimal",
        }
      )}
    >
      {leadingIcon && <Icon size={18} name={leadingIcon} />}
      <Typography type="button-small">{title}</Typography>
      {trailingIcon && <Icon name={trailingIcon} />}
    </button>
  );
}
