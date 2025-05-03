"use client";

import { Card } from "@/components/ui";
import { DateUtils } from "@/utils/date-utils";

export type MemoryCardProps = {
  name?: string;
  location?: string;
  date?: Date;
  coverPhoto?: string;
};

export function MemoryCard({
  name,
  date,
  location,
  coverPhoto,
}: MemoryCardProps) {
  return (
    <Card
      coverPhoto={coverPhoto}
      date={date && DateUtils.formatDate(date, "PP")}
      location={location}
      name={name}
    />
  );
}
