"use client";

import { Alert, Button, Card, ProgressBar } from "@/components/ui";
import { useQueryParams } from "@/hooks/use-query-params";
import { MemoryQRCodeDialog } from "./memory-qr-code-dialog";
import { GalleryCover } from "@/components/gallery-cover";
import { ActionCard } from "@/components/ui/action-card";
import { MemoryDetail, MemoryStatus } from "@/types/memory";
import { useRouter } from "next/navigation";
import { GuestsPreview } from "./guests-preview";
import Link from "next/link";
import { useMemo } from "react";

export type MemoryLayoutProps = {
  memory: MemoryDetail;
};

function MemoryAlert(props: { status: MemoryStatus }) {
  if (props.status === "READY") return <></>;

  return (
    <Alert
      type="negative"
      title="Aguardando confirmação de pagamento"
      message="Após o pagamento ser confirmado o seu baú poderá receber memórias compartilhadas."
    />
  );
}

export function MemoryLayout({ memory }: MemoryLayoutProps) {
  const { getQueryParam, removeQueryParam, getQueryParams } = useQueryParams();
  const router = useRouter();

  const screemParams = getQueryParams();
  const showQRCode = !!getQueryParam("qr");
  const memoryId = getQueryParam("id");

  const closeQRCode = () => {
    removeQueryParam("qr");
  };

  const planPercentage = useMemo(() => {
    const total =
      memory.plan?.photosLimit || 0 + (memory.plan?.videosLimit || 0);
    const used = memory.photosCount + memory.videosCount;
    return (used * 100) / total;
  }, [memory]);

  return (
    <main className="flex flex-col gap-4">
      <MemoryAlert status={memory.status} />
      <div className="flex pb-6 justify-between">
        <div>
          <Button
            onClick={router.back}
            variant="minimal"
            leadingIcon="ArrowLeft"
            title="Voltar"
          />
        </div>
        <div className="flex gap-2">
          <Link href={{ pathname: "memory/edit", query: { ...screemParams } }}>
            <Button title="Editar" variant="outline" leadingIcon="Pencil" />
          </Link>
          <Button title="Compartilhar" leadingIcon="Share" />
        </div>
      </div>
      <main className="flex flex-col md:flex-row gap-6 min-h-[400px] ">
        <section className="flex gap-4 flex-col w-full md:max-w-[340px] items-center">
          <Card
            name={memory.name}
            date={memory.formattedDate}
            location={memory.address}
            coverPhoto={memory.coverImage?.url}
          />
          <ActionCard
            iconName="QrCode"
            title="QRCode colaborativo"
            description="Seus convidados podem ler o qrcode para enviar seus registros"
            href={{ query: { ...screemParams, qr: "open" } }}
            actionButton={{ title: "Abrir QRcode" }}
          />
          <ActionCard
            iconName="Package"
            title={memory.plan?.name || ""}
            description="Percentual de memórias recebidas"
            actionButton={{
              title: "Upgrade de pacote",
              leadingIcon: "PartyPopper",
              variant: "secondary",
            }}
          >
            <ProgressBar showPercentage percentage={planPercentage} />
          </ActionCard>
        </section>
        <div className="flex flex-col flex-1 gap-8">
          <GalleryCover media={memory.media} isEmpty={!memory.media.length} />

          <GuestsPreview />
        </div>
      </main>
      <MemoryQRCodeDialog
        url={`https://192.168.160.31:3001/camera?id=${memoryId}`}
        onClose={closeQRCode}
        isOpen={showQRCode}
      />
    </main>
  );
}
