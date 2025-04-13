"use client";

import { Suspense } from "react";
import { MemoryLayout } from "./components/memory-layout";
import { withAuth } from "@/components";

function MemoryPage() {
  return (
    <Suspense>
      <MemoryLayout />
    </Suspense>
  );
}

export default withAuth(MemoryPage);
