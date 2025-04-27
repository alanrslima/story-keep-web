"use client";

import { StepLayout } from "../components/step-layout";
import { LocationForm } from "../components/location-form";
import { useRouter } from "next/navigation";

export default function CreateAMemoryLocation() {
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push("plans");
  };

  return (
    <StepLayout percentage={80} previousPath="time">
      <LocationForm onSubmit={onSubmit} />
    </StepLayout>
  );
}
