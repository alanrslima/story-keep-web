"use client";

import { DefaultScreen, withAuth } from "@/components";
import { useQueryParams } from "@/hooks/use-query-params";
import { useMemoryDetail } from "@/hooks/use-memory-detail";
import { MemoryEditLayout } from "./components/memory-edit-layout";

function MemoryEditPage() {
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();
  const { memory, isLoading } = useMemoryDetail({ id: screenParams.id });

  return (
    <DefaultScreen isLoading={isLoading}>
      {memory && <MemoryEditLayout memory={memory} />}
    </DefaultScreen>
  );
}

export default withAuth(MemoryEditPage);
