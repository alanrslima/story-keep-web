"use client";

import { StepLayout } from "../components/step-layout";
import { DateForm } from "../components/date-form";

export default function CreateAMemoryDate() {
  return (
    <StepLayout percentage={50} previousPath="name">
      <DateForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
