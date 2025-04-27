"use client";

import { useRouter } from "next/navigation";
import { StepLayout } from "../components/step-layout";
import { TimeForm } from "../components/time-form";

export default function CreateAMemoryTime() {
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push("location");
  };
  return (
    <StepLayout percentage={50} previousPath="date">
      <TimeForm onSubmit={onSubmit} />
    </StepLayout>
  );
}
