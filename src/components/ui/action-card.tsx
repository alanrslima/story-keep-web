import Link from "next/link";
import { Button } from "./button";
import { Icon } from "./icon";
import { Typography } from "./typography";
import { Url } from "url";
import { ReactNode } from "react";

export type ActionCardProps = {
  href: Partial<Url>;
  title: string;
  description: string;
  children?: ReactNode;
};

export function ActionCard(props: ActionCardProps) {
  return (
    <div className=" gap-4 flex flex-col rounded-md border-border-neutral border-[1px] overflow-hidden p-5 w-full">
      <div className="h-14 w-14 items-center justify-center flex rounded-full bg-background-neutral">
        <Icon name="QrCode" />
      </div>
      <div className="flex flex-col gap-1">
        <Typography type="body-default-bold">{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </div>
      {props.children}
      <Link href={props.href}>
        <Button title="Abrir QRCode" full />
      </Link>
    </div>
  );
}
