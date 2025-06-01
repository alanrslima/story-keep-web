"use client";

import { MenuBar } from "@/components/menu-bar";
import { Button, Headline, ItemTile } from "@/components/ui";
import { SimpleCard } from "@/components/ui/simple-card";
import Link from "next/link";
import { GalleryResume } from "./components/gallery-resume";
import { withAuth } from "@/components";
import { useMediaRegistry } from "@/hooks/use-media-registry";
import { useMemories } from "@/hooks/use-memories";

function Home() {
  const { data } = useMediaRegistry();
  const { memories } = useMemories();

  return (
    <div>
      <MenuBar />
      <div className="flex flex-col w-full px-6 py-10 max-w-[1240px] mx-auto pb-20 gap-14">
        <div>
          <Headline
            title="Últimos baús de memórias"
            rightComponent={<Button title="Ver todas" variant="minimal" />}
          />
          <div className="grid grid-cols-2 md:grid-cols-4  md:flex-row gap-4">
            {memories.map((memory) => (
              <Link key={memory.id} href={{ pathname: "/memory" }}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SimpleCard />
            <SimpleCard />
            <SimpleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Home);
