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
  media: {
    id: string;
    name: string;
    mimetype: string;
  }[];
  address?: string;
  mediaUrl: string;
  about: string;
  createdAt: string;
  coverImage?: { url: string };
};
