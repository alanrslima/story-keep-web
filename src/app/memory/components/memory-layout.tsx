"use client";

import { Alert, Button, Card } from "@/components/ui";
import { useQueryParams } from "@/hooks/use-query-params";
import Link from "next/link";
import { MemoryQRCodeDialog } from "./memory-qr-code-dialog";
import { GalleryCover } from "@/components/gallery-cover";
import { ActionCard } from "@/components/ui/action-card";
import { MemoryDetail, MemoryStatus } from "@/types/memory";

export type MemoryLayoutProps = {
  memory: MemoryDetail;
};

function MemoryAlert(props: { status: MemoryStatus }) {
  if (props.status === "ready") return <></>;

  return (
    <Alert
      type="negative"
      title="Pagamento não efetuado"
      message="Após o pagamento ser confirmado o seu baú poderá receber memórias compartilhadas."
    />
  );
}

export function MemoryLayout({ memory }: MemoryLayoutProps) {
  const { getQueryParam, removeQueryParam, getQueryParams } = useQueryParams();

  const screemParams = getQueryParams();
  const showQRCode = !!getQueryParam("qr");

  const closeQRCode = () => {
    removeQueryParam("qr");
  };

  return (
    <main className="flex flex-col gap-4">
      <MemoryAlert status={memory.status} />
      <div className="flex pb-6 justify-between">
        <div>
          <Link href={{ pathname: "/memories" }}>
            <Button variant="minimal" leadingIcon="ArrowLeft" title="Voltar" />
          </Link>
        </div>
        <div className="flex gap-2"></div>
      </div>
      <main className="flex flex-col md:flex-row gap-6 min-h-[400px] ">
        <section className="flex gap-8 flex-col w-full md:max-w-[340px] items-center">
          <Card
            name={memory.name}
            date={memory.formattedDate}
            location={memory.address}
            coverPhoto={memory.coverImage?.url}
          />
          <ActionCard href={{ query: { ...screemParams, qr: "open" } }} />
        </section>
        <div className="flex flex-col flex-1 gap-8">
          <GalleryCover media={memory.media} isEmpty={!memory.media.length} />
        </div>
      </main>

      <MemoryQRCodeDialog onClose={closeQRCode} isOpen={showQRCode} />
    </main>
  );
}
