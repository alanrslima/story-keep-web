import { Button, TextArea, Typography } from "@/components/ui";
import Link from "next/link";
import { FormEvent } from "react";
import { useMemory } from "../hooks/use-memory";

export type NameFormProps = {
  onSubmit(): Promise<void>;
};

export function NameForm(props: NameFormProps) {
  const { setName, name } = useMemory();

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <Typography type="title-section">Nome do evento</Typography>
      <TextArea value={name} onChange={(evt) => setName(evt.target.value)} />
      <div className="flex gap-4">
        <Link href="date">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
