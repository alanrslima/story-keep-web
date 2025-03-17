"use client";

import { MenuBar } from "@/components/menu-bar";
import { Button, Headline, Typography } from "@/components/ui";
import { useQueryParams } from "@/hooks/use-query-params";
import Link from "next/link";
import { MemoryQRCodeDialog } from "./memory-qr-code-dialog";
import { Footer } from "@/components/footer";
import { WeatherWidget } from "@/components/weather-widget";
import { LocationWidget } from "@/components/location-widget";
import { GalleryCover } from "@/components/gallery-cover";
import { SimpleCard } from "@/components/ui/simple-card";
import { ActionCard } from "@/components/ui/action-card";
import { MemoryCard } from "@/app/create-a-memory/components/memory-card";

export function MemoryLayout() {
  const { getQueryParam, removeQueryParam, getQueryParams } = useQueryParams();

  const screemParams = getQueryParams();

  const showQRCode = !!getQueryParam("qr");

  const closeQRCode = () => {
    removeQueryParam("qr");
  };

  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="w-full px-6 max-w-[1240px] mx-auto pb-20">
        <div className="flex py-6 justify-between">
          <div>
            <Link href={{ pathname: "/memories" }}>
              <Button
                variant="minimal"
                leadingIcon="ArrowLeft"
                title="Voltar"
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <Button title="Editar" variant="outline" />
            <Button title="Enviar convite" />
          </div>
        </div>
        <main className="flex flex-col md:flex-row gap-6 min-h-[400px] ">
          <section className="flex gap-8 flex-col w-full md:max-w-[340px] items-center">
            <MemoryCard name="Casamento de João e Maria" date="30.09.2025" />
            <ActionCard href={{ query: { ...screemParams, qr: "open" } }} />
            <SimpleCard />
          </section>
          <div className="flex flex-col flex-1 gap-8">
            <GalleryCover />
            <div className="flex flex-col" >
              <Headline title="Sobre o evento" />
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                voluptatem eaque non magnam molestias unde minus corrupti ea
                velit delectus consequuntur ab ex assumenda repellat ratione
                odio, accusantium amet. Quibusdam!
              </Typography>
            </div>
            <div>
              <Headline title="Localização & Clima" />
              <LocationWidget />
              <WeatherWidget />
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <MemoryQRCodeDialog onClose={closeQRCode} isOpen={showQRCode} />
    </div>
  );
}
