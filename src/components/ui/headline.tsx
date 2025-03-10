import { Button, ButtonProps } from "./button";
import { Typography } from "./typography";

export type HeadlineProps = {
  title: string;
  actionButton?: ButtonProps;
};

export function Headline(props: HeadlineProps) {
  return (
    <div className="flex items-center mb-5">
      <Typography type="title-body">{props.title}</Typography>
      {props.actionButton && <Button {...props.actionButton} />}
    </div>
  );
}
