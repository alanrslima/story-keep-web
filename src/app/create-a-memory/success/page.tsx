"use client";

import { Button, Typography } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { MemoryCard } from "../components/memory-card";

export default function CreateAMemorySuccess() {
  const { date, location, name, time } = useMemory();

  return (
    <div className="p-12 h-dvh relative w-dvw overflow-y-hidden bg-primary-light flex flex-col justify-center items-center">
      <div className="w-[820px] h-[540px] bg-[#BED5D2] rounded-full blur-[120px] -bottom-40 -right-40 rotate-45 absolute" />
      <div className="w-[960px] h-[910px] bg-[#E6DACC] rounded-full blur-[120px] -top-40 -left-40 rotate-45 absolute" />
      <div className="animate-fade-in-up z-50 max-w-[820px] justify-center flex flex-col gap-14">
        <div className="hidden md:flex justify-center flex-1">
          <MemoryCard date={date} location={location} name={name} time={time} />
        </div>
        <div className="flex flex-col gap-14 items-center">
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
            <Button title="Continuar" full variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
