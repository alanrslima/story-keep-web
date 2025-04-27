import { Button, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { FormEvent } from "react";

export type TimeFormProps = {
  onSubmit(): Promise<void>;
};

export function TimeForm(props: TimeFormProps) {
  const { setTime, time } = useMemory();

  function onChangeText(_: string, maskedValue: string) {
    setTime(maskedValue);
  }

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <Typography type="title-section">Que horas?</Typography>
      <TextArea
        value={time}
        autoFocus
        maskType="time"
        placeholder="20:00"
        onChangeText={onChangeText}
      />
      <div className="flex gap-4">
        <Button type="submit" title="Continuar" />
      </div>
    </form>
  );
}
