import { ReactNode } from "react";
import { Illustration, IllustrationProps } from "./illustration";
import { Typography } from "./typography";

export type EmptyStateProps = {
  title: string;
  message: string;
  footerComponent?: ReactNode;
  illustration?: IllustrationProps;
};

export function EmptyState(props: EmptyStateProps) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col max-w-[420px] items-center gap-1">
        {props.illustration && <Illustration {...props.illustration} />}
        <Typography center type="body-large-bold">
          {props.title}
        </Typography>
        <Typography center>{props.message}</Typography>
        <div className="mt-6">{props.footerComponent}</div>
      </div>
    </div>
  );
}
