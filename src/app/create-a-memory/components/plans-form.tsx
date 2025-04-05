import { Button, Form, RadioGroup, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { PlanList } from "@/types/plan";
import { FormEvent, useMemo } from "react";

export type PlansFormProps = {
  plans: PlanList[];
};

export function PlansForm({ plans }: PlansFormProps) {
  const { create, setPackageId, packageId } = useMemory();
  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    create();
  };

  const options = useMemo(() => {
    return plans?.map((item) => ({
      title: item.name,
      value: item.id,
      description: item.description,
    }));
  }, [plans]);

  return (
    <Form onSubmit={onSubmit}>
      {() => (
        <div className="flex gap-8 flex-col">
          <div className="flex flex-col">
            <Typography type="title-section">Escolha um pacote</Typography>
            <Typography type="body-large">
              Escolha o pacote que mais se adapta a sua necessidade
            </Typography>
          </div>
          <RadioGroup
            onChange={setPackageId}
            options={options}
            value={packageId}
          />
          <div className="flex gap-4">
            <Button title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
