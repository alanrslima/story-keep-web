export type MediaServiceSendInput = {
  memoryId: string;
  personaId: string;
  file: File;
};

export type MediaServiceListOutput = {
  id: string;
  filename: string;
  mimetype: string;
  size: number;
  status: string;
  createdAt: string;
  expiresAt: string;
  url: string;
};
