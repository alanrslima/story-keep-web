import { ReactNode } from "react";
import { Illustration } from "./illustration";
import { Typography } from "./typography";

export type EmptyStateProps = {
  title: string;
  message: string;
  footerComponent?: ReactNode;
};

export function EmptyState(props: EmptyStateProps) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col max-w-[420px] items-center gap-1">
        <Illustration name="moment-to-remeber" />
        <Typography center type="body-large-bold">
          {props.title}
        </Typography>
        <Typography center>{props.message}</Typography>
        <div className="mt-6">{props.footerComponent}</div>
      </div>
    </div>
  );
}
