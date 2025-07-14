import Link from "next/link";
import { Button, ButtonProps } from "./button";
import { Icon, IconNames } from "./icon";
import { Typography } from "./typography";
import { Url } from "url";
import { ReactNode } from "react";

export type ActionCardProps = {
  href?: Partial<Url>;
  title: string;
  description: string;
  children?: ReactNode;
  iconName?: IconNames;
  actionButton?: ButtonProps;
};

export function ActionCard(props: ActionCardProps) {
  return (
    <div className=" gap-4 flex flex-col rounded-md border-border-neutral border-[1px] overflow-hidden p-5 w-full">
      {props.iconName && (
        <div className="h-14 w-14 items-center justify-center flex rounded-full bg-background-neutral">
          <Icon name={props.iconName} />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <Typography type="body-default-bold">{props.title}</Typography>
        <Typography>{props.description}</Typography>
      </div>
      {props.children}
      {props.actionButton && (
        <Link href={props.href || {}}>
          <Button {...props.actionButton} full />
        </Link>
      )}
    </div>
  );
}
