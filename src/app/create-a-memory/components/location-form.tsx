import { Button, Form, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { MemoryService } from "@/services/memory-service";

export type LocationFormProps = {
  onSubmit(): Promise<void>;
  id: string;
};

export function LocationForm(props: LocationFormProps) {
  const { setLocation, location } = useMemory();

  const onSubmit = async () => {
    const memoryService = new MemoryService();
    await memoryService.update({ address: location, id: props.id });
    await props.onSubmit();
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading }) => (
        <div className="flex gap-8 flex-col">
          <Typography type="title-section">Onde será?</Typography>
          <TextArea
            autoFocus
            value={location}
            placeholder="Digite o endereço"
            onChange={(evt) => setLocation(evt.target.value)}
          />
          <div className="flex gap-4">
            <Button type="submit" isLoading={isLoading} title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
