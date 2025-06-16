"use client";

import {
  Button,
  DateInput,
  Form,
  Headline,
  Polaroid,
  TextInput,
} from "@/components/ui";
import { useQueryParams } from "@/hooks/use-query-params";
import { useRouter } from "next/navigation";
import { MemoryDetail } from "@/types/memory";
import { useState } from "react";
import { MemoryService } from "@/services/memory-service";

type MemoryEditLayoutProps = {
  memory: MemoryDetail;
};

export function MemoryEditLayout({ memory }: MemoryEditLayoutProps) {
  const { getQueryParam } = useQueryParams();
  const router = useRouter();
  const [name, setName] = useState(memory.name);
  const [startDate, setStartDate] = useState(memory.startDate);
  const [address, setAddress] = useState(memory.address);

  const memoryId = getQueryParam("id") || "";

  async function onSubmit() {
    const memoryService = new MemoryService();
    await memoryService.edit({ memoryId, address, name, startDate });
    router.back();
  }

  return (
    <main className="flex flex-col gap-4">
      <div className="flex pb-6 justify-between">
        <div>
          <Button
            onClick={router.back}
            variant="minimal"
            leadingIcon="ArrowLeft"
            title="Voltar"
          />
        </div>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-4 ">
        <section className="flex col-span-2 gap-4 flex-col ">
          <Headline title="Edição " />
          <Form onSubmit={onSubmit}>
            {({ isLoading }) => (
              <div className="flex flex-col gap-4">
                <TextInput
                  onChange={(evt) => setName(evt.target.value)}
                  name="name"
                  value={name}
                  label="Nome do evento"
                />
                <DateInput
                  label="Data"
                  onChangeDate={setStartDate}
                  name="date"
                  value={startDate}
                />
                <TextInput
                  name="address"
                  onChange={(evt) => setAddress(evt.target.value)}
                  value={address}
                  label="Endereço"
                />
                <div className="flex mt-5 justify-end gap-2">
                  <Button type="submit" isLoading={isLoading} title="Salvar" />
                </div>
              </div>
            )}
          </Form>
        </section>
        <section className="hidden col-span-2 md:flex justify-center items-center">
          <div className="max-w-[340px]">
            <Polaroid
              name={name}
              date={startDate?.toLocaleDateString()}
              location={address}
              coverPhoto={memory.coverImage?.url}
            />
          </div>
        </section>
      </main>
    </main>
  );
}
