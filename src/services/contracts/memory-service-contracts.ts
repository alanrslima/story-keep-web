export type MemoryServiceCreateInput = {
  name: string;
  packageId: string;
  startDate?: Date;
  address?: string;
  file?: File;
};

export type MemoryServiceCreateOutput = {
  id: string;
  token?: string;
};

export type MemoryServiceListOutput = {
  id: string;
  name: string;
  startDate: string;
  address?: string;
  photosCount: number;
  videosCount: number;
  formatedDate?: string;
  coverImage?: { url: string };
};

export type MemoryServiceDetailInput = {
  memoryId: string;
};
