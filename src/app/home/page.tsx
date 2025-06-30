"use client";

import { Button, Headline, ItemTile } from "@/components/ui";
import { SimpleCard } from "@/components/ui/simple-card";
import Link from "next/link";
import { GalleryResume } from "./components/gallery-resume";
import { DefaultScreen, withAuth } from "@/components";
import { useMediaRegistry } from "@/hooks/use-media-registry";
import { useMemories } from "@/hooks/use-memories";
import { useMemo } from "react";

function Home() {
  const { data } = useMediaRegistry();
  const { memories, isLoading } = useMemories();

  const lastMemories = useMemo(() => memories.slice(0, 4), [memories]);

  return (
    <DefaultScreen isLoading={isLoading}>
      <div className="flex flex-col gap-7">
        <div>
          <Headline
            title="Últimos baús de memórias"
            rightComponent={
              <Link href="memories">
                <Button title="Ver todas" variant="minimal" />
              </Link>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex-row gap-4">
            {lastMemories.map((memory) => (
              <Link
                key={memory.id}
                href={{
                  pathname: "/memory",
                  query: { id: memory.id },
                }}
              >
                <ItemTile
                  title={memory.name}
                  description={memory.address}
                  subDescription={memory.formatedDate}
                  label={`${memory.photosCount} memórias`}
                  imageUrl={memory.coverImage?.url}
                  badgeText={memory.statusBadge}
                />
              </Link>
            ))}
          </div>
        </div>
        <GalleryResume media={data || []} />
        <div>
          <Headline title="Dicas rápidas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SimpleCard title="Como Criar Álbuns Compartilhados para Eventos Inesquecíveis" />
            <SimpleCard title="Transforme Seu Evento com QR Codes: Compartilhe Fotos com Facilidade" />
            <SimpleCard title="Convide, Compartilhe e Reviva: A Nova Era dos Álbuns Colaborativos" />
            <SimpleCard title="Do Casamento ao Aniversário: Como Álbuns Compartilhados Podem Revolucionar Seus Eventos" />
          </div>
        </div>
      </div>
    </DefaultScreen>
  );
}

export default withAuth(Home);
