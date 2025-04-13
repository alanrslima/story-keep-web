"use client";

import { MenuBar } from "@/components/menu-bar";
import { Headline, ItemTile } from "@/components/ui";
import { SimpleCard } from "@/components/ui/simple-card";
import Link from "next/link";
import { GalleryResume } from "./components/gallery-resume";
import { withAuth } from "@/components";

function Home() {
  const memories = [1, 2, 3];

  return (
    <div>
      <MenuBar />
      <div className="flex flex-col w-full px-6 py-10 max-w-[1240px] mx-auto pb-20 gap-14">
        <div>
          <Headline title="Últimos baús de memórias" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:flex-row gap-4">
            {memories.map((memory) => (
              <Link key={memory} href={{ pathname: "/memory" }}>
                <ItemTile />
              </Link>
            ))}
          </div>
        </div>
        <GalleryResume />
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
