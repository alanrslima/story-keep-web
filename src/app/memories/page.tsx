import { Footer } from "@/components/footer";
import { MenuBar } from "@/components/menu-bar";
import { Button, ItemTile, Typography } from "@/components/ui";
import Link from "next/link";

export default function Memories() {
  const memories = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col">
      <MenuBar />
      <div className="w-full px-6 max-w-[1240px] mx-auto pb-20">
        <div className="flex items-center py-6 gap-2 justify-between">
          <div className="flex flex-1">
            <Typography type="title-body">Seus baús de memórias</Typography>
          </div>
          <div className="flex gap-2">
            <Link href={{ pathname: "/create-a-memory/name" }}>
              <Button title="Criar baú" leadingIcon="Plus" />
            </Link>
          </div>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row gap-4">
          {memories.map((memory) => (
            <Link key={memory} href={{ pathname: "/memory" }}>
              <ItemTile />
            </Link>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
