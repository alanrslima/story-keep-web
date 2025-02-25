"use client";

import { StepLayout } from "../components/step-layout";
import { TimeForm } from "../components/time-form";

export default function CreateAMemoryTime() {
  return (
    <StepLayout percentage={50} previousPath="date">
      <TimeForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
