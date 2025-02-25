import { Button, RadioGroup, Typography } from "@/components/ui";
import Link from "next/link";
import { FormEvent } from "react";

export type PlansFormProps = {
  onSubmit(): Promise<void>;
};

export function PlansForm(props: PlansFormProps) {
  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
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
        <Link href="success">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
