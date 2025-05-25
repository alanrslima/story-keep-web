import { Media } from "./media";

export type MemoriesList = MemoriesListItem[];

export type MemoriesListItem = {
  id: string;
  name: string;
  formattedDate?: string;
  address?: string;
  startDate?: Date;
  photosCount: number;
  videosCount: number;
};

export type MemoryDetail = MemoriesListItem & {
  media: Media[];
  address?: string;
  mediaUrl: string;
  about: string;
  createdAt: string;
  coverImage?: { url: string };
  status: MemoryStatus;
};

export type MemoryStatus =
  | "created"
  | "awaiting_payment"
  | "paid"
  | "failed"
  | "canceled"
  | "ready";
