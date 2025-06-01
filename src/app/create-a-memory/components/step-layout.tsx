"use client";

import { Button, ProgressBar } from "@/components/ui";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { MemoryCard } from "./memory-card";
import { useMemory } from "@/hooks/use-memory";
import { useRouter } from "next/navigation";

export type StepLayoutProps = PropsWithChildren & {
  percentage: number;
  previousPercentage?: number;
  previousPath: string;
};

export function StepLayout(props: StepLayoutProps) {
  const { name, startDate, location, setCoverPhoto, coverPhoto } = useMemory();
  const navigate = useRouter();

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <header className="h-16 w-full items-center justify-end flex px-6">
        <Button
          onClick={() => navigate.replace("/")}
          title="Cancelar"
          variant="outline"
          size="sm"
          leadingIcon="X"
        />
      </header>
      <ProgressBar
        defaultValue={props.previousPercentage}
        percentage={props.percentage}
      />
      <main className="flex flex-1">
        <div className="animate-fade-in-up max-w-[1120px] w-full mx-auto flex flex-col md:flex-row">
          <section className="box-border px-8 gap-8 flex flex-col justify-center flex-1 md:flex-[0.5]">
            <Link href={props.previousPath}>
              <Button
                leadingIcon="ArrowLeft"
                variant="minimal"
                title="Voltar"
              />
            </Link>
            {props.children}
          </section>
          <section className="items-center hidden md:flex flex-[0.5] max-w-[350px] justify-center">
            <MemoryCard
              name={name}
              onChangePhoto={setCoverPhoto}
              coverPhoto={coverPhoto}
              date={startDate}
              location={location}
            />
          </section>
        </div>
      </main>
      <footer className="w-full h-20"></footer>
    </div>
  );
}
