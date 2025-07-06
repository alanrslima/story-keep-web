import {
  Button,
  Form,
  RadioGroup,
  RadioGroupOptionsProps,
  Typography,
} from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { MemoryService } from "@/services/memory-service";
import { PlanList } from "@/types/plan";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export type PlansFormProps = {
  plans: PlanList[];
  id: string;
};

export function PlansForm(props: PlansFormProps) {
  const navigate = useRouter();

  const { setPlanId, planId, setClientSecret } = useMemory();

  const onSubmit = async () => {
    const memoryService = new MemoryService();
    await memoryService.selectPlan({ memoryId: props.id, planId });
    const { token } = await memoryService.createOrderIntent({
      memoryId: props.id,
    });
    setClientSecret(token);
    navigate.replace(`payment?id=${props.id}`);
  };

  const options = useMemo(() => {
    return props.plans?.map(
      (item) =>
        ({
          title: item.name,
          value: item.id,
          description: item.description,
          price: item.priceLabel,
        } as RadioGroupOptionsProps)
    );
  }, [props.plans]);

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading }) => (
        <div className="flex gap-8 flex-col">
          <div className="flex flex-col">
            <Typography type="title-section">Escolha um pacote</Typography>
            <Typography type="body-large">
              Escolha o pacote que mais se adapta a sua necessidade
            </Typography>
          </div>
          <RadioGroup onChange={setPlanId} options={options} value={planId} />
          <div className="flex gap-4">
            <Button type="submit" isLoading={isLoading} title="Continuar" />
          </div>
        </div>
      )}
    </Form>
  );
}
