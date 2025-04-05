import { MemoryService } from "@/services/memory-service";
import { PlanList } from "@/types/plan";
import { useEffect, useState } from "react";

export function useMemoriesPlans() {
  const [plans, setPlans] = useState<PlanList[]>([]);

  const list = async () => {
    const memoryService = new MemoryService();
    memoryService.listPlans().then(setPlans).catch(console.error);
  };

  useEffect(() => {
    list();
  }, []);

  return { plans };
}
