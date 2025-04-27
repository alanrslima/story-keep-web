"use client";

import { StepLayout } from "../components/step-layout";
import { NameForm } from "../components/name-form";
import { useRouter } from "next/navigation";

export default function CreateAMemoryName() {
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push("date");
  };

  return (
    <StepLayout previousPercentage={0} percentage={20} previousPath="/memories">
      <NameForm onSubmit={onSubmit} />
    </StepLayout>
  );
}
