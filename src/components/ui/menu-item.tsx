import Link from "next/link";
import { Typography } from "./typography";
import { Url } from "url";
import classNames from "classnames";

export type MenuItemProps = {
  selected?: boolean;
  href: Partial<Url>;
  text: string;
};

export function MenuItem(props: MenuItemProps) {
  return (
    <Link
      className={classNames("border-b-4", {
        "border-b-interactive-primary": props.selected,
        "border-b-transparent": !props.selected,
      })}
      href={props.href}
    >
      <Typography type={props.selected ? "body-default-bold" : "body-default"}>
        {props.text}
      </Typography>
    </Link>
  );
}
