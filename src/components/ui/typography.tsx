import { PropsWithChildren } from "react";
import cn from "classnames";

export type TypographyProps = PropsWithChildren & {
  textColor?: string;
  through?: boolean;
  center?: boolean;
  type?:
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

export function Typography({
  type = "body-default",
  through,
  children,
  center,
  textColor,
}: TypographyProps) {
  return (
    <span
      className={cn("text-content_primary font-poppins", textColor, {
        "line-through": through,
        "text-center": center,
        "text-sm font-semibold": type === "button-small",
        "text-base font-semibold": type === "button-default",
        "text-sm": type === "body-default",
        "text-sm font-bold": type === "body-default-bold",
        "text-base": type === "body-large",
        "text-base font-bold": type === "body-large-bold",
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
    >
      {children}
    </span>
  );
}
