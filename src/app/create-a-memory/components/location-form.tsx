import { Button, TextArea, Typography } from "@/components/ui";
import Link from "next/link";
import { FormEvent } from "react";
import { useMemory } from "../hooks/use-memory";

export type LocationFormProps = {
  onSubmit(): Promise<void>;
};

export function LocationForm(props: LocationFormProps) {
  const { setLocation, location } = useMemory();

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await props.onSubmit();
  };

  return (
    <form className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <Typography type="title-section">Onde será?</Typography>
      <TextArea
        value={location}
        placeholder="Digite o endereço"
        onChange={(evt) => setLocation(evt.target.value)}
      />
      <div className="flex gap-4">
        <Link href="date">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
