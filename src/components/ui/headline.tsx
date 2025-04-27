import { ReactNode } from "react";
import { Typography } from "./typography";

export type HeadlineProps = {
  title: string;
  rightComponent?: ReactNode;
};

export function Headline(props: HeadlineProps) {
  return (
    <div className="flex items-center mb-5">
      <div className="flex flex-1 gap-6">
        <Typography type="title-body">{props.title}</Typography>
      </div>
      {props.rightComponent}
    </div>
  );
}
