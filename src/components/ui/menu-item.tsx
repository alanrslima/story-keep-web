import Link from "next/link";
import { Typography } from "./typography";
import { Url } from "url";

export type MenuItemProps = {
  selected?: boolean;
  href: Partial<Url>;
  text: string;
};

export function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.href}>
      <Typography type={props.selected ? "body-default-bold" : "body-default"}>
        {props.text}
      </Typography>
    </Link>
  );
}
