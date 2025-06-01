import { Api } from "./api";
import {
  MediaServiceListOutput,
  MediaServiceSendInput,
} from "./contracts/media-service-contracts";
import axios from "axios";

export class MediaRegistryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async send(input: MediaServiceSendInput) {
    const { data } = await this.api.post<{
      mediaRegistryId: string;
      filename: string;
      url: string;
    }>("/api/memory/media-registry/init", {
      memoryId: input.memoryId,
      personaId: input.personaId,
      mimetype: input.file.type,
      size: input.file.size,
    });
    await axios.put(data.url, input.file);
    await this.api.post("/api/memory/media-registry/confirm", {
      mediaRegistryId: data.mediaRegistryId,
      personaId: input.personaId,
      filename: data.filename,
    });
  }

  async list(): Promise<MediaServiceListOutput[]> {
    const { data } = await this.api.get<MediaServiceListOutput[]>(
      "/api/memory/media-registry"
    );
    return data;
  }
}
