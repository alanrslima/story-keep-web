import { Button, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { FormEvent } from "react";

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
      <TextArea
        autoFocus
        required
        placeholder="Ex: Festa de aniversário"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
      <div className="flex gap-4">
        <Button type="submit" title="Continuar" />
      </div>
    </form>
  );
}
