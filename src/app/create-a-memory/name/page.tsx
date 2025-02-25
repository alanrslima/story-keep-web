"use client";

import { StepLayout } from "../components/step-layout";
import { NameForm } from "../components/name-form";

export default function CreateAMemoryName() {
  return (
    <StepLayout previousPercentage={0} percentage={20} previousPath="/">
      <NameForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
