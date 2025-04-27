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
          title="Seus baús de memórias"
          rightComponent={
            <Link href={{ pathname: "/create-a-memory/name" }}>
              <Button title="Criar baú" leadingIcon="Plus" />
            </Link>
          }
        />
      )}
      {isEmpty && (
        <EmptyState
          message="Começe a receber memórias compartilhadas de quem você mais ama"
          title="Crie um baú de memórias"
          footerComponent={
            <Link href={{ pathname: "/create-a-memory/name" }}>
              <Button title="Crie um baú" leadingIcon="Plus" />
            </Link>
          }
        />
      )}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row gap-4">
        {memories.map((memory) => (
          <Link key={memory.id} href={{ pathname: "/memory" }}>
            <ItemTile
              title={memory.name}
              description={memory.formatedDate}
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
