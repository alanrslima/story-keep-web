import { Typography } from "./typography";

export type AlertProps = {
  title: string;
  description: string;
};

export function Alert(props: AlertProps) {
  return (
    <div className="bg-red-100 border-red-300 border-[1px] p-4 rounded-md">
      <Typography type="body-default-bold" as="h5">
        {props.title}
      </Typography>
      <Typography as="span">{props.description}</Typography>
    </div>
  );
}
