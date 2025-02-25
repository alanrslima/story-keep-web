"use client";

import { StepLayout } from "../components/step-layout";
import { PlansForm } from "../components/plans-form";

export default function CreateAMemoryPlans() {
  return (
    <StepLayout previousPercentage={80} percentage={50} previousPath="location">
      <PlansForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
