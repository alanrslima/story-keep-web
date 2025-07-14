"use client";

import { Button, Icon, Typography } from "@/components/ui";
import { useMemoryDetail } from "@/hooks/use-memory-detail";
import { useQueryParams } from "@/hooks/use-query-params";
import Link from "next/link";

export default function MemoryInvitePage() {
  const { getQueryParams } = useQueryParams();
  const screenParams = getQueryParams();

  const { memory, isLoading } = useMemoryDetail({ id: screenParams.id });
  return (
    <main
      className="h-dvh w-dvw flex bg-cover"
      style={{
        backgroundImage: memory?.coverImage
          ? `url(${memory?.coverImage?.url})`
          : "url('/mesh-purple.webp')",
      }}
    >
      <div className="flex flex-1 flex-col bg-gradient-to-t from-neutral-900 to-transparent p-6 justify-end">
        <div className="flex flex-col max-w-[620px] w-full mx-auto gap-4">
          <Typography type="display-large" textColor="white">
            {memory?.name}
          </Typography>
          <div className="flex gap-2 items-center">
            <Icon name="MapPin" color="white" />
            <Typography type="title-group" textColor="white">
              {memory?.address}
            </Typography>
          </div>
          <div className="flex gap-2 items-center">
            <Icon name="Calendar" color="white" />
            <Typography textColor="white">{memory?.formattedDate}</Typography>
          </div>
          <Link href="/camera" className="flex flex-col">
            <Button title="Enviar memórias" leadingIcon="ArrowRight" />
          </Link>
          {/* <Button
            variant="secondary"
            leadingIcon="Ticket"
            title="Solicitar convite"
          /> */}
          <Button variant="tertiary" leadingIcon="LogIn" title="Fazer login" />
        </div>
      </div>
    </main>
  );
}
