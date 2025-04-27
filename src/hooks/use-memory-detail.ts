import { MemoryService } from "@/services/memory-service";
import { MemoryDetail } from "@/types/memory";
import { useEffect, useState } from "react";

export function useMemoryDetail(props: { id: string }) {
  const [memory, setMemory] = useState<MemoryDetail>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const detail = async (id: string) => {
    const memoryService = new MemoryService();
    memoryService
      .detail({ memoryId: id })
      .then(setMemory)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    detail(props.id);
  }, [props.id]);

  return { memory, isLoading };
}
