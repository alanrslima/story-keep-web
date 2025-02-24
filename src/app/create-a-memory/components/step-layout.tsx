"use client";

import { Button, MemoryCard, ProgressBar } from "@/components/ui";

import { PropsWithChildren } from "react";
import { useMemory } from "../hooks/use-memory";
import Link from "next/link";

export type StepLayoutProps = PropsWithChildren & {
  percentage: number;
  previousPath: string;
};

export function StepLayout(props: StepLayoutProps) {
  const { name, date, location } = useMemory();

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <header className="h-16 w-full"></header>
      <ProgressBar percentage={props.percentage} />
      <main className="flex flex-1">
        <div className="animate-fade-in-up max-w-[1120px] w-full mx-auto flex flex-col gap-6 lg:flex-row">
          <section className="px-8 gap-8 flex flex-col justify-center flex-1 lg:flex-[0.6]">
            <Link href={props.previousPath}>
              <Button
                leadingIcon="ArrowLeft"
                variant="minimal"
                title="Voltar"
              />
            </Link>
            {props.children}
          </section>
          <section className="items-center hidden lg:flex flex-[0.4] justify-center">
            <MemoryCard title={name} date={date} location={location} />
          </section>
        </div>
      </main>
      <footer className="w-full h-20"></footer>
    </div>
  );
}
