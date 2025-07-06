import { Button, Calendar, Form, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { MemoryService } from "@/services/memory-service";

export type DateFormProps = {
  onSubmit(): Promise<void>;
  id: string;
};

export function DateForm(props: DateFormProps) {
  const { setStartDate, startDate } = useMemory();

  const onSubmit = async () => {
    const memoryService = new MemoryService();
    await memoryService.update({ startDate, id: props.id });
    return await props.onSubmit();
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading }) => {
        return (
          <div className="flex gap-8 flex-col">
            <Typography type="title-section">Que dia será?</Typography>
            <Calendar value={startDate} onChange={setStartDate} />
            <div className="flex gap-4">
              <Button isLoading={isLoading} title="Continuar" type="submit" />
            </div>
          </div>
        );
      }}
    </Form>
  );
}
