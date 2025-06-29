"use client";

import { StepLayout } from "../components/step-layout";
import { DateForm } from "../components/date-form";
import { useRouter } from "next/navigation";
import { withAuth } from "@/components";

function CreateAMemoryDate() {
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push("location");
  };

  return (
    <StepLayout previousPercentage={20} percentage={40} previousPath="name">
      <DateForm onSubmit={onSubmit} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryDate);
