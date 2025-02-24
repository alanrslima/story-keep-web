import { Button, TextArea, Typography } from "@/components/ui";
import Link from "next/link";
import { FormEvent } from "react";
import { useMemory } from "../hooks/use-memory";

export type DateFormProps = {
  onSubmit(): Promise<void>;
};

export function DateForm(props: DateFormProps) {
  const { setDate, date } = useMemory();

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <Typography type="title-section">Que dia será?</Typography>
      <TextArea
        value={date}
        rows={5}
        placeholder="dd/mm/yyyy"
        onChange={(evt) => setDate(evt.target.value)}
      />
      <div className="flex gap-4">
        <Link href="location">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
