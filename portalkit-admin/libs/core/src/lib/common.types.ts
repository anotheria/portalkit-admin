export interface ApiResponseDTO {
  success: boolean;
  message: string;
  errorKey: string;
  results: unknown | ResponseData;
}

export interface ResponseData {
  data: PaginatedContent;
}

export interface PaginatedContent {
  pageNumber: number;
  itemsOnPage: number;
  totalItems: number;
  content: unknown;
}
