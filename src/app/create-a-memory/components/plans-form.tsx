import { Button, RadioGroup, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { FormEvent } from "react";

export function PlansForm() {
  const { create } = useMemory();
  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    create();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <Typography type="title-section">Escolha um pacote</Typography>
        <Typography type="body-large">
          Escolha o pacote que mais se adapta a sua necessidade
        </Typography>
      </div>
      <RadioGroup />
      <div className="flex gap-4">
        <Button title="Continuar" />
      </div>
    </form>
  );
}
