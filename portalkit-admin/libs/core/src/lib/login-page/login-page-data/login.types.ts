export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginData {
  authToken: string | null;
  login: string | null
}
export interface LoginDataDTO {
  authToken: string;
  login: string
}
