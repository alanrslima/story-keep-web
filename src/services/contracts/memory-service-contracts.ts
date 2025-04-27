export type MemoryServiceCreateInput = {
  name: string;
  date: Date;
  address: string;
  packageId: string;
  file?: File;
};

export type MemoryServiceListOutput = {
  id: string;
  name: string;
  date: string;
  photosCount: number;
  videosCount: number;
  formatedDate: string;
  coverImage?: { url: string };
};

export type MemoryServiceDetailInput = {
  memoryId: string;
};
