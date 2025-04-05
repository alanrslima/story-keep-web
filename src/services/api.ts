import axios, { AxiosInstance } from "axios";

export class Api {
  private axiosInstance: AxiosInstance;

  private token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDM4MTc3MTQsImV4cCI6MTc0MzkwNDExNCwic3ViIjoie1widXNlcklkXCI6XCI4YzU3NzVhYS03ZmQzLTQ0NmYtOGI3YS02YjAxZmQ5M2U2NWVcIn0ifQ.psv0ygeHUr-q0otaKEMyJzYJTv1VK_iZEuKWaM7aHrA";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async get<T>(url: string): Promise<{ status: number; data: T }> {
    const { status, data } = await this.axiosInstance.get(url);
    return { data, status };
  }

  async post<T>(url: string, body?: unknown): Promise<T> {
    const { data } = await this.axiosInstance.post(url, body);
    return data;
  }
}
