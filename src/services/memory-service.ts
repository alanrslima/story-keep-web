import { DateUtils } from "@/utils/date-utils";
import { Api } from "./api";
import {
  MemoryServiceCreateInput,
  MemoryServiceCreateOutput,
  MemoryServiceDetailInput,
  MemoryServiceListOutput,
} from "./contracts/memory-service-contracts";
import { PlanList } from "@/types/plan";
import { MemoryDetail } from "@/types/memory";
import { FormUtils } from "@/utils/form-utils";

export class MemoryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  async create(
    input: MemoryServiceCreateInput
  ): Promise<MemoryServiceCreateOutput> {
    const formData = FormUtils.objectToFormData(input);
    const { data } = await this.api.post<{ id: string; token?: string }>(
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
      formatedDate: DateUtils.formatDate(item.startDate, "PPP"),
    }));
  }

  async detail(input: MemoryServiceDetailInput): Promise<MemoryDetail> {
    const { data } = await this.api.get<MemoryDetail>("/api/memory/detail", {
      params: input,
    });
    return {
      ...data,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
    };
  }

  async listPlans(): Promise<PlanList[]> {
    const { data } = await this.api.get<PlanList[]>("/api/memory/plan");
    return data;
  }
}
