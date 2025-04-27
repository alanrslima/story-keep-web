"use client";

import { StepLayout } from "../components/step-layout";
import { PlansForm } from "../components/plans-form";
import { useMemoriesPlans } from "@/hooks/use-memories-plans";
import { withAuth } from "@/components";

function CreateAMemoryPlans() {
  const { plans } = useMemoriesPlans();

  return (
    <StepLayout previousPercentage={60} percentage={80} previousPath="location">
      <PlansForm plans={plans} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryPlans);
