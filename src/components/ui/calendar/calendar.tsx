import ReactCalendar from "react-calendar";
import "./calendar.css";
import { Icon } from "../icon";
// import { LooseValue } from "react-calendar/dist/esm/shared/types.js";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export type CalendarProps = {
  value?: Value;
  onChange?(value: Value, event: React.MouseEvent<HTMLButtonElement>): void;
};

export function Calendar(props: CalendarProps) {
  return (
    <ReactCalendar
      nextLabel={<Icon name="ChevronRight" size={20} />}
      next2Label={null}
      prev2Label={null}
      prevLabel={<Icon name="ChevronLeft" size={20} />}
      value={props.value}
      onChange={props.onChange}
      view={"month"}
      minDate={new Date()}
    />
  );
}
