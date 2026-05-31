import type { AxiosError } from "axios";

export interface AppError {
  message: string;
  status: number | null;
  code: string;
}

export function handleAxiosError(error: AxiosError): AppError {
  if (error.response) {
    return {
      message: (error.response.data as { message?: string })?.message || "Request failed",
      status: error.response.status,
      code: error.code || "UNKNOWN_ERROR",
    };
  }

  if (error.request) {
    return {
      message: "No response received from server. Please check your connection.",
      status: null,
      code: "NETWORK_ERROR",
    };
  }

  return {
    message: error.message || "An unexpected error occurred",
    status: null,
    code: "UNKNOWN_ERROR",
  };
}
