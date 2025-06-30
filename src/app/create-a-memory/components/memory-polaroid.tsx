"use client";

import { Polaroid } from "@/components/ui/polaroid";
import { DateUtils } from "@/utils/date-utils";

export type MemoryPolaroidProps = {
  name?: string;
  location?: string;
  date?: Date;
  coverPhoto?: string;
  onChangePhoto?(photo: string | ArrayBuffer): void;
};

export function MemoryPolaroid({
  name,
  date,
  location,
  onChangePhoto,
  coverPhoto,
}: MemoryPolaroidProps) {
  return (
    <Polaroid
      coverPhoto={coverPhoto}
      date={date && DateUtils.formatDate(date, "PP")}
      location={location}
      onChangePhoto={onChangePhoto}
      name={name}
    />
  );
}
