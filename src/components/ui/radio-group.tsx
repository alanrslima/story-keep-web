"use client";

import { Typography } from "./typography";
import classNames from "classnames";
import { Icon } from "./icon";

export type RadioGroupOptionsProps = Omit<
  RadioItemProps,
  "onChange" | "selected" | "name"
>;

export type RadioGroupProps = {
  options: RadioGroupOptionsProps[];
  value: string;
  onChange(value: string): void;
};

export function RadioGroup({ options, value, onChange }: RadioGroupProps) {
  return (
    <div className="flex gap-2 flex-col">
      {options.map((option) => (
        <RadioItem
          {...option}
          key={option.value}
          name={option.value}
          selected={option.value === value}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export type RadioItemProps = {
  value: string;
  name: string;
  selected: boolean;
  onChange(value: string): void;
  title: string;
  description?: string;
  strikethroughPrice?: string;
  price?: string;
};

export function RadioItem({
  value,
  name,
  selected,
  onChange,
  title,
  description,
  price,
  strikethroughPrice,
}: RadioItemProps) {
  return (
    <label
      className={`flex items-center gap-3 border-2 rounded-lg p-4 cursor-pointer transition-all relative
      ${
        selected
          ? "border-interactive-primary bg-interactive-secondary"
          : "hover:border-interactive-primary"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="opacity-0 absolute"
      />
      <div>
        <div
          className={classNames(
            "h-7 w-7 flex items-center justify-center rounded-full border-[1px] border-border-neutral",
            { "bg-interactive-primary border-interactive-primary": selected }
          )}
        >
          <Icon name="Check" size={16} color="white" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <Typography type="body-large-bold">{title}</Typography>
        <Typography type="body-default">{description}</Typography>
      </div>
      <div className="flex items-end flex-col">
        <Typography type="body-large-bold">{price}</Typography>
        <Typography through type="body-default">
          {strikethroughPrice}
        </Typography>
      </div>
    </label>
  );
}
