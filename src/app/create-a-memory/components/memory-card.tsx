"use client";

import { Button, Typography, Icon } from "@/components/ui";
import { useMemory } from "@/hooks/use-memory";
import { ChangeEvent, useRef } from "react";

export type MemoryCardProps = {
  name?: string;
  location?: string;
  date?: string;
  time?: string;
};

export function MemoryCard({ name, date, location, time }: MemoryCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { coverFoto, setCoverPhoto } = useMemory();

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const onChangeImage = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverPhoto(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        backgroundImage: coverFoto
          ? `url(${coverFoto})`
          : "url('/noisy-gradient-1.png')",
      }}
      className="bg-cover w-full min-w-[300px] max-w-[350px] overflow-hidden rounded-md h-[530px] shadow-2xl shadow-neutral-500 flex flex-col"
    >
      <div className="p-6 justify-end flex">
        <Button
          onClick={handleClick}
          variant="tertiary"
          leadingIcon="ImageUp"
          title="Incluir imagem"
        />
        <input
          accept="image/*"
          type="file"
          onChange={onChangeImage}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>
      <div className="flex flex-1 flex-col bg-gradient-to-t from-neutral-900 to-transparent p-6 justify-end gap-4">
        {name && (
          <Typography type="title-screen" textColor="text-white">
            {name}
          </Typography>
        )}
        {(date || location) && (
          <div className="flex flex-col gap-2">
            {date && (
              <Typography type="body-default-bold" textColor="text-white">
                {date}
                {time ? ` • ${time}` : ""}
              </Typography>
            )}
            {location && (
              <div className="flex gap-2">
                <Icon name="MapPin" size={20} color="white" />
                <Typography type="body-default" textColor="text-white">
                  {location}
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
