import { axiosInstance } from "@/src/shared/lib/axios";
import type { ApiResponse } from "@/src/shared/lib/axios";

export class BaseService<T> {
  protected basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  async getAll(): Promise<ApiResponse<T[]>> {
    const response = await axiosInstance.get<ApiResponse<T[]>>(this.basePath);
    return response.data;
  }

  async getById(id: string): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get<ApiResponse<T>>(`${this.basePath}/${id}`);
    return response.data;
  }

  async getBySlug(slug: string): Promise<ApiResponse<T>> {
    const response = await axiosInstance.get<ApiResponse<T>>(`${this.basePath}/slug/${slug}`);
    return response.data;
  }
}
