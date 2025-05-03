"use client";
import { DefaultScreen, withAuth } from "@/components";
import { Button, EmptyState, Headline, ItemTile } from "@/components/ui";
import { useMemories } from "@/hooks/use-memories";
import Link from "next/link";

function Memories() {
  const { memories, isLoading } = useMemories();

  const isEmpty = !isLoading && !memories.length;

  return (
    <DefaultScreen isLoading={isLoading}>
      {!isEmpty && (
        <Headline
          title="Seus álbuns de memórias"
          rightComponent={
            <Link href={{ pathname: "/create-a-memory/name" }}>
              <Button title="Criar álbum" leadingIcon="Plus" />
            </Link>
          }
        />
      )}
      {isEmpty && (
        <EmptyState
          title="Crie um álbum de memórias"
          message="E começe a receber memórias compartilhadas de quem você mais ama"
          footerComponent={
            <Link href={{ pathname: "/create-a-memory/name" }}>
              <Button title="Criar álbum" leadingIcon="Plus" />
            </Link>
          }
        />
      )}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:flex-row gap-4">
        {memories.map((memory) => (
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
            />
          </Link>
        ))}
      </main>
    </DefaultScreen>
  );
}

export default withAuth(Memories);
