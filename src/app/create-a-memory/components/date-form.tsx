import { Button, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { FormEvent } from "react";

export type DateFormProps = {
  onSubmit(): Promise<void>;
};

export function DateForm(props: DateFormProps) {
  const { setDate, date } = useMemory();

  function onChangeText(_: string, maskedValue: string) {
    setDate(maskedValue);
  }

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <Typography type="title-section">Que dia será?</Typography>
      <TextArea
        value={date}
        autoFocus
        placeholder="dd/mm/yyyy"
        maskType="date"
        onChangeText={onChangeText}
      />
      <div className="flex gap-4">
        <Button title="Continuar" type="submit" />
      </div>
    </form>
  );
}
