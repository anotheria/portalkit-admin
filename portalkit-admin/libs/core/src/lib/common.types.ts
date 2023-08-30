import {Data} from "@angular/router";

export interface ApiResponseDTO {
  success: boolean;
  message: string;
  errorKey: string;
  results: any;
}

export interface ApiPaginatedResponseDTO<T> {
  success: boolean;
  message: string;
  errorKey: string;
  results: ResponseData<T>;
}

export interface ResponseData<T> {
  data: PaginatedContent<T>;
}

export interface PaginatedContent<T> {
  pageNumber: number;
  itemsOnPage: number;
  totalItems: number;
  searchTerm?: string;
  registrationRange?: Array<Data>;
  includedStatuses?: string[];
  excludedStatuses?: string[];
  sort?: {
    direction: "DESC" | "ASC",
    "field": string
  };
  content: Array<T>;
}

export const initialPaginatedContent = {
  pageNumber: 0,
  itemsOnPage: 0,
  totalItems: 0,
  content: []
}

export type StatusState = {
  loaded: boolean;
  loading: boolean;
  error: unknown;
  id?: string;
}

export const initialStatusState: StatusState = {
  loading: false,
  loaded: false,
  error: null
}

