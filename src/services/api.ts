import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class Api {
  private axiosInstance: AxiosInstance;

  private token: string | null;

  constructor() {
    this.token = localStorage.getItem("token");
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<{ status: number; data: T }> {
    const { status, data } = await this.axiosInstance.get(url, config);
    return { data, status };
  }

  async post<T>(
    url: string,
    body?: unknown
  ): Promise<{ status: number; data: T }> {
    const { data, status } = await this.axiosInstance.post(url, body);
    return { data, status };
  }

  async patch<T>(
    url: string,
    body?: unknown
  ): Promise<{ status: number; data: T }> {
    const { data, status } = await this.axiosInstance.patch(url, body);
    return { data, status };
  }
}
