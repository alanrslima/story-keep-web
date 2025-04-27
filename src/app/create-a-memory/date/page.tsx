"use client";

import { StepLayout } from "../components/step-layout";
import { DateForm } from "../components/date-form";
import { useRouter } from "next/navigation";

export default function CreateAMemoryDate() {
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push("time");
  };

  return (
    <StepLayout previousPercentage={20} percentage={40} previousPath="name">
      <DateForm onSubmit={onSubmit} />
    </StepLayout>
  );
}
