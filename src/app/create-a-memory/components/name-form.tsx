import { Button, Form, TextArea, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { MemoryService } from "@/services/memory-service";

export type NameFormProps = {
  id: string;
  onSubmit(): Promise<void>;
};

export function NameForm(props: NameFormProps) {
  const { setName, name } = useMemory();

  const onSubmit = async () => {
    const memoryService = new MemoryService();
    await memoryService.update({ name, id: props.id });
    await props.onSubmit();
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading }) => (
        <div className="flex gap-8 flex-col">
          <Typography type="title-section">Nome do evento</Typography>
          <TextArea
            autoFocus
            required
            placeholder="Ex: Festa de aniversário"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <div className="flex gap-4">
            <Button type="submit" isLoading={isLoading} title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
