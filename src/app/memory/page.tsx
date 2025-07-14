"use client";

import { MemoryLayout } from "./components/memory-layout";
import { DefaultScreen, withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";
import { useMemoryDetail } from "@/hooks/use-memory-detail";

function MemoryPage() {
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  const { memory, isLoading } = useMemoryDetail({ id: screenParams.id });
  return (
    <DefaultScreen isLoading={isLoading}>
      {memory && <MemoryLayout memory={memory} />}
    </DefaultScreen>
  );
}

export default withAuth(MemoryPage);
