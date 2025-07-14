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
  plan?: {
    currencyCode: string;
    description: string;
    id: string;
    name: string;
    price: number;
    photosLimit: number;
    videosLimit: number;
  };
};

export type MemoryStatus = "PENDING" | "CANCELED" | "READY";
