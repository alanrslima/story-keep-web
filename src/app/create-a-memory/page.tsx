import { Button, Polaroid, Typography } from "@/components/ui";
import Link from "next/link";

export default function CreateAMemoryPage() {
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
          <section className="box-border px-8 gap-8 flex flex-col justify-center flex-1 md:flex-[0.5]">
            <Typography type="display-small">
              ✨ Dê vida às suas memórias, juntos.
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography>
                Cada momento especial merece ser lembrado — e melhor ainda,
                compartilhado. Crie um álbum único para eternizar aniversários,
                casamentos, encontros ou qualquer ocasião marcante.
              </Typography>
              <Typography>
                Adicione um nome, uma data, um endereço e escolha um plano que
                combine com sua história.
              </Typography>
              <Typography>
                <Typography type="body-default-bold">
                  Convide, compartilhe, reviva.
                </Typography>
                Comece agora a guardar momentos que vão emocionar por muitos
                anos.
              </Typography>
              <div className="mt-4">
                <Link href={"/create-a-memory/name"}>
                  <Button title="Começar" />
                </Link>
              </div>
            </div>
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
