import { PropsWithChildren } from "react";
import cn from "classnames";

export type TypographyProps = PropsWithChildren & {
  textColor?: string;
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
  children,
  textColor,
}: TypographyProps) {
  return (
    <span
      className={cn("text-content_primary font-poppins", textColor, {
        "text-sm font-semibold": type === "button-small",
        "text-base font-semibold": type === "button-default",
        "text-sm": type === "body-default",
        "text-sm font-bold": type === "body-default-bold",
        "text-base": type === "body-large",
        "text-base font-bold": type === "body-large-bold",
        "text-lg font-semibold":
          type === "title-group" || type === "button-large",
        "text-xl font-semibold": type === "title-body",
        "text-xl md:text-2xl font-semibold": type === "title-subsection",
        "text-2xl md:text-3xl font-semibold": type === "title-section",
        "text-3xl md:text-4xl font-semibold": type === "title-screen",
        "text-5xl font-semibold": type === "display-small",
        "text-6xl font-semibold": type === "display-medium",
        "text-7xl font-semibold": type === "display-large",
      })}
    >
      {children}
    </span>
  );
}
