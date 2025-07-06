export type MemoryServiceUpdateInput = {
  id: string;
  name?: string;
  startDate?: Date;
  address?: string;
  file?: File;
};

export type MemoryServiceSelectPlanInput = {
  memoryId: string;
  planId: string;
};

export type MemoryServiceInput = {
  memoryId: string;
  planId: string;
};

export type MemoryServiceCreateOrderIntentInput = {
  memoryId: string;
};

export type MemoryServiceEditInput = {
  memoryId: string;
  name?: string;
  startDate?: Date;
  address?: string;
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
