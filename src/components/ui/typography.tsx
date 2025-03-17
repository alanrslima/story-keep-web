import { ElementType, PropsWithChildren } from "react";
import cn from "classnames";

type TypographyBaseProps = PropsWithChildren & {
  as?: ElementType;
  textColor?:
    | "text-white"
    | "text-black"
    | "text-content-primary"
    | "text-content-secondary"
    | "text-content-tertiary";
  through?: boolean;
  shadow?: boolean;
  center?: boolean;
  type?:
    | "caption"
    | "button-small"
    | "button-default"
    | "button-large"
    | "body-large"
    | "body-large-bold"
    | "body-default"
    | "body-default-bold"
    | "title-group"
    | "title-body"
    | "title-subsection"
    | "title-section"
    | "title-screen"
    | "display-small"
    | "display-medium"
    | "display-large";
};

// Conditional props for 'label'
type LabelProps = {
  as: "label";
  htmlFor: string;
} & TypographyBaseProps;

type DefaultProps = {
  as?: Exclude<ElementType, "label">;
  htmlFor?: never;
} & TypographyBaseProps;

export type TypographyProps = LabelProps | DefaultProps;

export function Typography({
  type = "body-default",
  through,
  children,
  center,
  textColor,
  as: Tag = "span",
  shadow,
  ...props
}: TypographyProps) {
  return (
    <Tag
      role=""
      aria-level={1}
      className={cn("text-content_primary font-poppins", textColor, {
        "drop-shadow-md": shadow,
        "line-through": through,
        "text-center": center,
        "text-xs": type === "caption",
        "text-sm font-semibold":
          type === "button-small" || type === "body-default-bold",
        "text-base font-semibold":
          type === "button-default" || type === "body-large-bold",
        "text-sm": type === "body-default",
        "text-base": type === "body-large",
        "text-lg font-semibold":
          type === "title-group" || type === "button-large",
        "text-xl font-semibold": type === "title-body",
        "text-lg md:text-2xl font-semibold": type === "title-subsection",
        "text-xl md:text-3xl font-semibold": type === "title-section",
        "text-2xl md:text-4xl font-semibold": type === "title-screen",
        "text-3xl md:text-5xl font-semibold": type === "display-small",
        "text-4xl md:text-6xl font-semibold": type === "display-medium",
        "text-5xl md:text-7xl font-semibold": type === "display-large",
      })}
      {...props}
    >
      {children}
    </Tag>
  );
}
