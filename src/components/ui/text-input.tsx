import { Typography } from "./typography";

export type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  name: string;
};

export function TextInput(props: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <Typography as="label" htmlFor={props.name}>
          {props.label}
        </Typography>
      )}
      <input
        {...props}
        id={props.name}
        name={props.name}
        className="bg-transparent min-h-[44px] px-4 py-3 rounded-md text-sm font-poppins outline-black font-semibold border-[1px] border-border-neutral text-content-primary"
      />
    </div>
  );
}
