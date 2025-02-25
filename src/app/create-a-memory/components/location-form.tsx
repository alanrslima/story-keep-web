import { Button, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import Link from "next/link";
import { FormEvent } from "react";

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
        <Link href="plans">
          <Button title="Continuar" />
        </Link>
      </div>
    </form>
  );
}
