"use client";

import { StepLayout } from "../components/step-layout";
import { LocationForm } from "../components/location-form";

export default function CreateAMemoryLocation() {
  return (
    <StepLayout percentage={80} previousPath="date">
      <LocationForm onSubmit={async () => {}} />
    </StepLayout>
  );
}
