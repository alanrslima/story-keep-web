"use client";

import { StepLayout } from "../components/step-layout";
import { DateForm } from "../components/date-form";

export default function CreateAMemoryDate() {
  return (
    <StepLayout previousPercentage={20} percentage={40} previousPath="name">
      <DateForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
