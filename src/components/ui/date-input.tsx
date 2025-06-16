import classNames from "classnames";
import { Calendar } from "./calendar/calendar";
import { Popover } from "./popover";
import { Typography } from "./typography";

export type DateInputProps = {
  label?: string;
  name: string;
  value?: Date;
  onChangeDate(value: Date | undefined): void;
};

export function DateInput(props: DateInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <Typography as="label" htmlFor={props.name}>
          {props.label}
        </Typography>
      )}
      <Popover
        trigger={({ isOpen }) => (
          <div
            className={classNames(
              "min-h-[44px] flex px-4 py-3 rounded-md border-[1px] border-border-neutral",
              {
                "outline outline-2 outline-interactive-primary": isOpen,
              }
            )}
          >
            <Typography type="body-default-bold">
              {props.value?.toLocaleDateString()}
            </Typography>
          </div>
        )}
        content={({ requestClose }) => (
          <div className="bg-background p-4 shadow-2xl rounded-md">
            <Calendar
              onChange={(value) => {
                props.onChangeDate(value as Date);
                requestClose();
              }}
            />
          </div>
        )}
      />
    </div>
  );
}
