import { MemoryContext } from "@/contexts/memory-context";
import { useContext } from "react";

export function useMemory() {
  return useContext(MemoryContext);
}
