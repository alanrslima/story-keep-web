import { DateUtils } from "@/utils/date-utils";
import { Api } from "./api";
import {
  MemoryServiceCreateOrderIntentInput,
  MemoryServiceDetailInput,
  MemoryServiceEditInput,
  MemoryServiceGetSourceInput,
  MemoryServiceGetSourceOutput,
  MemoryServiceListOutput,
  MemoryServiceSelectPlanInput,
  MemoryServiceUpdateInput,
} from "./contracts/memory-service-contracts";
import { PlanList } from "@/types/plan";
import { MemoryDetail } from "@/types/memory";
import { FormUtils } from "@/utils/form-utils";

export class MemoryService {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  public async init() {
    const { data } = await this.api.post<{ id: string }>("/api/memory/init");
    return data;
  }

  async update(input: MemoryServiceUpdateInput) {
    const formData = FormUtils.objectToFormData(input);
    const { data } = await this.api.patch("/api/memory", formData);
    return data;
  }

  async selectPlan(input: MemoryServiceSelectPlanInput) {
    await this.api.patch("/api/memory/select-plan", input);
  }

  public async list(): Promise<MemoryServiceListOutput[]> {
    const { data } = await this.api.get<
      Omit<MemoryServiceListOutput, "formatedDate">[]
    >("/api/memory");
    return data.map((item) => ({
      ...item,
      statusBadge: this.statusBadgeMapper(item.status),
      formatedDate: DateUtils.formatDate(item.startDate, "PPP"),
    }));
  }

  public async createOrderIntent(input: MemoryServiceCreateOrderIntentInput) {
    const { data } = await this.api.post<{ token: string }>(
      "/api/memory/order/intent",
      input
    );
    return data;
  }

  /**
   * @abstract use update function instead
   **/
  async edit(input: MemoryServiceEditInput): Promise<void> {
    await this.api.patch("/api/memory", input);
  }

  private statusBadgeMapper(status: string) {
    const mapper = {
      awaiting_payment: "Aguardando pagamento",
      payment_failed: "Falha de pagamento",
      canceled: "Cancelado",
    };
    return mapper[status as keyof typeof mapper];
  }

  async detail(input: MemoryServiceDetailInput): Promise<MemoryDetail> {
    const { data } = await this.api.get<MemoryDetail>("/api/memory/detail", {
      params: input,
    });
    return {
      ...data,
      formattedDate:
        data.startDate && DateUtils.formatDate(data.startDate, "PP"),
      startDate: data.startDate ? new Date(data.startDate) : undefined,
    };
  }

  public async getSource(
    input: MemoryServiceGetSourceInput
  ): Promise<MemoryServiceGetSourceOutput> {
    const { data } = await this.api.get<MemoryServiceGetSourceOutput>(
      "/api/memory/media-registry/source",
      { params: input }
    );
    return data;
  }

  public async listPlans(): Promise<PlanList[]> {
    const { data } = await this.api.get<PlanList[]>("/api/memory/plan");
    return data;
  }
}
