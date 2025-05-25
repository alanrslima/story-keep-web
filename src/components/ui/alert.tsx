import classNames from "classnames";
import { Icon, IconNames } from "./icon";
import { Typography } from "./typography";

export type AlertTypeProps = "neutral" | "positive" | "negative" | "warning";

export type AlertProps = {
  title: string;
  message: string;
  type?: AlertTypeProps;
};

const iconMapper: { [key in AlertTypeProps]: IconNames } = {
  negative: "X",
  neutral: "Info",
  positive: "Check",
  warning: "TriangleAlert",
};

function AlertLeading({ type }: { type: AlertTypeProps }) {
  return (
    <div
      className={classNames(
        "min-h-[36px] max-h-[36px] min-w-[36px] max-w-[36px] rounded-full flex justify-center items-center ",
        {
          "bg-red-500": type === "negative",
          "bg-yellow-500": type === "warning",
          "bg-black": type === "neutral",
          "bg-green-500": type === "positive",
        }
      )}
    >
      <Icon name={iconMapper[type]} size={16} color="white" />
    </div>
  );
}

export function Alert({ message, title, type = "neutral" }: AlertProps) {
  return (
    <div className="bg-background-neutral border-[1px] p-4 rounded-md flex gap-4">
      <AlertLeading type={type} />
      <div>
        {title && (
          <Typography type="body-default-bold" as="h5">
            {title}
          </Typography>
        )}
        <Typography as="span">{message}</Typography>
      </div>
    </div>
  );
}
