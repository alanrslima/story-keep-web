"use client";

import { StepLayout } from "../components/step-layout";
import { DateForm } from "../components/date-form";
import { useRouter } from "next/navigation";
import { withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";

function CreateAMemoryDate() {
  const navigate = useRouter();
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  const onSubmit = async () => {
    navigate.push(`location?id=${screenParams.id}`);
  };

  return (
    <StepLayout
      previousPercentage={20}
      percentage={40}
      previousPath={`name?id=${screenParams.id}`}
    >
      <DateForm onSubmit={onSubmit} id={screenParams.id} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryDate);
