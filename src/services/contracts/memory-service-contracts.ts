export type MemoryServiceCreateInput = {
  name: string;
  date: Date;
  address: string;
  packageId: string;
};

export type MemoryServiceListOutput = {
  id: string;
  name: string;
  date: string;
  photosCount: number;
  videosCount: number;
  formatedDate: string;
};
