export interface PaginationResponse<T> {
  data: T[];
  pageSize: number;
  pageNumber: number;
  lastPage: boolean;
  totalPages: number;
  totalItems: number;
}
