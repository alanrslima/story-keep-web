export type MemoriesList = MemoriesListItem[];

export type MemoriesListItem = {
  id: string;
  name: string;
  formattedDate: string;
  date: string;
  photosCount: number;
  videosCount: number;
};

export type MemoryDetail = MemoriesListItem & {
  media: {
    id: string;
    name: string;
    mimetype: string;
  }[];
  mediaUrl: string;
  about: string;
  createdAt: string;
};
