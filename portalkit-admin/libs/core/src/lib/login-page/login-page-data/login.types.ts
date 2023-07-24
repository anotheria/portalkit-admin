export interface LoginRequest {
  login: string;
  password: string;
}
export interface LoginData {
  token: string | null;
  login: string | null
}
export interface LoginDataDTO {
  token: string;
  login: string
}
