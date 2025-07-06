"use client";

import { StepLayout } from "../components/step-layout";
import { NameForm } from "../components/name-form";
import { useRouter } from "next/navigation";
import { withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";

function CreateAMemoryName() {
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();
  const navigate = useRouter();

  const onSubmit = async () => {
    navigate.push(`date?id=${screenParams.id}`);
  };

  return (
    <StepLayout previousPercentage={0} percentage={20} previousPath="/memories">
      <NameForm onSubmit={onSubmit} id={screenParams.id} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryName);
