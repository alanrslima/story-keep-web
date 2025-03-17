import axios, { AxiosInstance } from "axios";

export class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: "http://localhost:3000" });
  }

  async get(url: string): Promise<void> {
    await this.axiosInstance.get(url);
  }

  async post<T>(url: string, body?: unknown): Promise<T> {
    const { data } = await this.axiosInstance.post(url, body);
    return data;
  }
}
