"use client";

import { ChangeEvent, useRef } from "react";
import { Button } from "./button";
import imageCompression from "browser-image-compression";
import { Typography } from "./typography";
import { Icon } from "./icon";

export type PolaroidProps = {
  coverPhoto?: string;
  onChangePhoto?(photo: string | ArrayBuffer): void;
  name?: string;
  date?: string;
  location?: string;
};

export function Polaroid({
  coverPhoto,
  onChangePhoto,
  date,
  name,
  location,
}: PolaroidProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const onChangeImage = async (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.8,
      };
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (onChangePhoto) {
          onChangePhoto(e.target?.result as string);
        }
      };
      reader.readAsDataURL(compressedFile);
    }
  };

  return (
    <div className="bg-white pt-4 px-4 pr-4 shadow-2xl shadow-background-black ">
      <div
        style={{
          backgroundImage: coverPhoto
            ? `url(${coverPhoto})`
            : "url('/noisy-gradient-1.png')",
        }}
        className="bg-cover w-full min-w-[300px]  overflow-hidden rounded-md h-[420px] flex flex-col"
      >
        {onChangePhoto && (
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
        )}

        <div className="flex flex-1 flex-col bg-gradient-to-t from-neutral-900 to-transparent p-6 justify-end gap-4">
          {(date || location) && (
            <div className="flex flex-col gap-2">
              {date && (
                <Typography type="body-default-bold" textColor="white">
                  {date}
                </Typography>
              )}
              {location && (
                <div className="flex flex-1 gap-2">
                  <Icon name="MapPin" size={20} color="white" />
                  <Typography type="body-default" textColor="white">
                    {location}
                  </Typography>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 justify-center py-6">
        <Typography center type="script-large">
          {name}
        </Typography>
      </div>
    </div>
  );
}
