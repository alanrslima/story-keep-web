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
  status: string;
  statusBadge?: string;
  photosCount: number;
  videosCount: number;
  formatedDate?: string;
  coverImage?: { url: string };
};

export type MemoryServiceDetailInput = {
  memoryId: string;
};

export type MemoryServiceGetSourceInput = { mediaRegistryId: string };

export type MemoryServiceGetSourceOutput = { url: string; expiresAt: string };
