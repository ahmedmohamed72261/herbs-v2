export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export function createSuccessResponse<T>(data: T, message = "Success"): ApiResponse<T> {
  return {
    data,
    status: 200,
    message,
    success: true,
  };
}

export function createErrorResponse(message = "An error occurred"): ApiResponse<null> {
  return {
    data: null,
    status: 500,
    message,
    success: false,
  };
}
