import { Button, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import Link from "next/link";
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
        maskType="time"
        placeholder="20:00"
        onChangeText={onChangeText}
      />
      <div className="flex gap-4">
        <Link href="location">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
