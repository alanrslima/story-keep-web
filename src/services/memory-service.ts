import { DateUtils } from "@/utils/date-utils";
import { Api } from "./api";
import {
  MemoryServiceCreateInput,
  MemoryServiceListOutput,
} from "./contracts/memory-service-contracts";
import { PlanList } from "@/types/plan";

export class MemoryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async create(input: MemoryServiceCreateInput): Promise<void> {
    await this.api.post("/api/memory", input);
  }

  async list(): Promise<MemoryServiceListOutput[]> {
    const { data } = await this.api.get<
      Omit<MemoryServiceListOutput, "formatedDate">[]
    >("/api/memory");
    return data.map((item) => ({
      ...item,
      formatedDate: DateUtils.formatDate(item.date, "PPP"),
    }));
  }

  async listPlans(): Promise<PlanList[]> {
    const { data } = await this.api.get<PlanList[]>("/api/memory/plan");
    return data;
  }
}
