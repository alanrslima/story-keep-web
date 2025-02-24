"use client";

import { MemoryProvider } from "./contexts/memory-context";

export default function CreateAMemoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MemoryProvider>{children}</MemoryProvider>;
}
