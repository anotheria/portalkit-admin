export interface AppConfig {
  apiEndpointUrl: string;
  loginByTokenUrl: string;
  translations: { [key: string]: { [key: string]: string } };
}
