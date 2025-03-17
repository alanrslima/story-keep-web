import { Api } from "./api";
import { MemoryServiceCreateInput } from "./contracts/memory-service-contracts";

export class MemoryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async create(input: MemoryServiceCreateInput): Promise<void> {
    await this.api.post("/api/memory", input);
  }
}
