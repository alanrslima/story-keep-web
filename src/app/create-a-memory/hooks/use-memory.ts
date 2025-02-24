import { useContext } from "react";
import { MemoryContext } from "../contexts/memory-context";

export function useMemory() {
  return useContext(MemoryContext);
}
