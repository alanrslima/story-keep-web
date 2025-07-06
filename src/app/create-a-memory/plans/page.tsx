"use client";

import { StepLayout } from "../components/step-layout";
import { PlansForm } from "../components/plans-form";
import { useMemoriesPlans } from "@/hooks/use-memories-plans";
import { withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";

function CreateAMemoryPlans() {
  const { plans } = useMemoriesPlans();
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  return (
    <StepLayout
      previousPercentage={60}
      percentage={80}
      previousPath={`location?id=${screenParams.id}`}
    >
      <PlansForm id={screenParams.id} plans={plans} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryPlans);
