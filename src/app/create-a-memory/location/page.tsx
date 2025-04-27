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
    <StepLayout previousPercentage={40} percentage={60} previousPath="date">
      <LocationForm onSubmit={onSubmit} />
    </StepLayout>
  );
}
