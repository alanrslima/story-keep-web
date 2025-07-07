"use client";
import { Button, Form, Polaroid, Typography } from "@/components/ui";
import { MemoryService } from "@/services/memory-service";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateAMemoryPage() {
  const navigate = useRouter();

  async function onSubmit() {
    const memoryService = new MemoryService();
    const { id } = await memoryService.init();
    navigate.push(`/create-a-memory/name?id=${id}`);
  }

  return (
    <div className="h-dvh w-dvw flex flex-col">
      <header className="h-16 w-full items-center border-b-2 justify-end flex px-6">
        <Link href={"/"}>
          <Button
            title="Cancelar"
            variant="outline"
            size="sm"
            leadingIcon="X"
          />
        </Link>
      </header>
      <main className="flex flex-1">
        <div className="animate-fade-in-left gap-16 max-w-[1120px] w-full mx-auto flex flex-col md:flex-row">
          <section className="box-border px-8 flex flex-col justify-center flex-1 md:flex-[0.5]">
            <Form onSubmit={onSubmit}>
              {({ isLoading }) => (
                <div className="flex gap-8 flex-col">
                  <Typography type="display-small">
                    ✨ Dê vida às suas memórias, juntos.
                  </Typography>
                  <div className="flex flex-col gap-2">
                    <Typography>
                      Cada momento especial merece ser lembrado — e melhor
                      ainda, compartilhado. Crie um álbum único para eternizar
                      aniversários, casamentos, encontros ou qualquer ocasião
                      marcante.
                    </Typography>
                    <Typography>
                      Adicione um nome, uma data, um endereço e escolha um plano
                      que combine com sua história.
                    </Typography>
                    <Typography>
                      <Typography type="body-default-bold">
                        Convide, compartilhe, reviva.{" "}
                      </Typography>
                      Comece agora a guardar momentos que vão emocionar por
                      muitos anos.
                    </Typography>
                    <div className="mt-4">
                      <Button
                        type="submit"
                        isLoading={isLoading}
                        title="Começar"
                      />
                    </div>
                  </div>
                </div>
              )}
            </Form>
          </section>

          <section className="items-center hidden md:flex flex-[0.5] max-w-[350px] justify-center">
            <Polaroid
              location="Sítio Encanto da Serra – Estrada da Harmonia, 345 – Petrópolis, RJ"
              name="Camila & Rafael – Um Dia pra Sempre 💍"
              date=" 22 de novembro de 2025"
              coverPhoto="/wedding.webp"
            />
          </section>
        </div>
      </main>
      <footer className="w-full h-20"></footer>
    </div>
  );
}
