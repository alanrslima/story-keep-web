import { MemoryServiceListOutput } from "@/services/contracts/memory-service-contracts";
import { MemoryService } from "@/services/memory-service";
import { useEffect, useState } from "react";

export function useMemories() {
  const [memories, setMemories] = useState<MemoryServiceListOutput[]>([]);

  const listAll = async () => {
    const memoryService = new MemoryService();
    memoryService.list().then(setMemories).catch(console.error);
  };

  useEffect(() => {
    listAll();
  }, []);

  return { memories };
}
