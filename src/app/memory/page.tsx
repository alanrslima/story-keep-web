import { Suspense } from "react";
import { MemoryLayout } from "./components/memory-layout";

export default function MemoryPage() {
  return (
    <Suspense>
      <MemoryLayout />
    </Suspense>
  );
}
