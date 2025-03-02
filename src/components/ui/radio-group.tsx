"use client";

import { useState } from "react";
import { Typography } from "./typography";
import classNames from "classnames";
import { Icon } from "./icon";

export function RadioGroup() {
  const [selected, setSelected] = useState("option1");

  return (
    <div className="flex gap-2 flex-col">
      <RadioItem
        label="Option 1"
        value="option1"
        name="radio-group"
        selected={selected === "option1"}
        onChange={setSelected}
      />
      <RadioItem
        label="Option 2"
        value="option2"
        name="radio-group"
        selected={selected === "option2"}
        onChange={setSelected}
      />
    </div>
  );
}

export type RadioItemProps = {
  label: string;
  value: string;
  name: string;
  selected: boolean;
  onChange: (value: string) => void;
};

export function RadioItem({ value, name, selected, onChange }: RadioItemProps) {
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
        <Typography type="body-large-bold">Pacote Básico</Typography>
        <Typography type="body-default">Até 600 fotos e 50 vídeos</Typography>
      </div>
      <div className="flex items-end flex-col">
        <Typography type="body-large-bold">R$19,90</Typography>
        <Typography through type="body-default">
          R$19,90
        </Typography>
      </div>
    </label>
  );
}
