import { MenuBar } from "@/components/menu-bar";
import { ItemTile, Typography } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  const memories = [1, 2, 3];

  return (
    <div>
      <MenuBar />
      <div className="flex flex-col w-full px-6 py-10 max-w-[1240px] mx-auto pb-20 gap-14">
        <div>
          <div className="flex flex-1">
            <Typography type="title-body">Últimas baús de memórias</Typography>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:flex-row gap-4">
            {memories.map((memory) => (
              <Link key={memory} href={{ pathname: "/memory" }}>
                <ItemTile description="" label="" title="" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-1">
            <Typography type="title-body">
              Últimos registros coletivos
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
