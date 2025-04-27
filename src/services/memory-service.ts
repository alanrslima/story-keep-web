import { DateUtils } from "@/utils/date-utils";
import { Api } from "./api";
import {
  MemoryServiceCreateInput,
  MemoryServiceDetailInput,
  MemoryServiceListOutput,
} from "./contracts/memory-service-contracts";
import { PlanList } from "@/types/plan";
import { MemoryDetail } from "@/types/memory";

export class MemoryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async create(input: MemoryServiceCreateInput): Promise<{ id: string }> {
    const formData = new FormData();
    if (input.file) {
      formData.append("file", input.file);
    }
    formData.append("date", input.date.toISOString());
    formData.append("name", input.name);
    formData.append("address", input.address);
    formData.append("packageId", input.packageId);
    const { data } = await this.api.post<{ id: string }>(
      "/api/memory",
      formData
    );
    return data;
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

  async detail(input: MemoryServiceDetailInput): Promise<MemoryDetail> {
    const { data } = await this.api.get<MemoryDetail>("/api/memory/detail", {
      params: input,
    });
    return data;
  }

  async listPlans(): Promise<PlanList[]> {
    const { data } = await this.api.get<PlanList[]>("/api/memory/plan");
    return data;
  }
}
