"use client";

import { StepLayout } from "../components/step-layout";
import { PlansForm } from "../components/plans-form";
import { useMemoriesPlans } from "@/hooks/use-memories-plans";

export default function CreateAMemoryPlans() {
  const { plans } = useMemoriesPlans();

  return (
    <StepLayout previousPercentage={80} percentage={50} previousPath="location">
      <PlansForm plans={plans} />
    </StepLayout>
  );
}
