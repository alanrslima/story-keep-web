"use client";

import { StepLayout } from "../components/step-layout";
import { LocationForm } from "../components/location-form";
import { useRouter } from "next/navigation";
import { withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";

function CreateAMemoryLocation() {
  const navigate = useRouter();
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  const onSubmit = async () => {
    navigate.push(`plans?id=${screenParams.id}`);
  };

  return (
    <StepLayout
      previousPercentage={40}
      percentage={60}
      previousPath={`date?id=${screenParams.id}`}
    >
      <LocationForm onSubmit={onSubmit} id={screenParams.id} />
    </StepLayout>
  );
}

export default withAuth(CreateAMemoryLocation);
