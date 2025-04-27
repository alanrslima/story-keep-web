"use client";

import { Button, Typography } from "@/components/ui";
import { MemoryCard } from "../components/memory-card";
import Link from "next/link";
import { useQueryParams } from "@/hooks/use-query-params";
import { useMemoryDetail } from "@/hooks/use-memory-detail";

export default function CreateAMemorySuccess() {
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();
  const { memory } = useMemoryDetail({ id: screenParams.id });

  return (
    <div className="p-12 h-dvh relative w-dvw overflow-hidden bg-primary-light flex flex-col justify-center items-center">
      <div className="w-[820px] h-[540px] bg-[#BED5D2] rounded-full blur-[120px] -bottom-40 -right-40 rotate-45 absolute" />
      <div className="w-[960px] h-[910px] bg-[#E6DACC] rounded-full blur-[120px] -top-40 -left-40 rotate-45 absolute" />
      <div className="animate-fade-in-up z-50 max-w-[820px] justify-center flex flex-col gap-14">
        <div className="hidden md:flex justify-center flex-1">
          {memory && (
            <MemoryCard
              date={memory.date}
              location="Localização"
              name={memory.name}
            />
          )}
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography center type="display-medium">
            Seu baú de memórias foi criado com sucesso!
          </Typography>
          <div className="max-w-[700px] flex">
            <Typography center type="title-body">
              ”Fotos são fragmentos do tempo onde as memórias se encontram para
              nunca mais partir.”
            </Typography>
          </div>

          <div className="min-w-[300px]">
            <Link href={{ pathname: "/memory", query: screenParams }}>
              <Button title="Continuar" full variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
