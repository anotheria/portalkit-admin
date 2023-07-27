import {Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../../app-config/app.config";
import {map, Observable} from "rxjs";
import {ApiResponseDTO} from "../../common.types";
import {LoginDataDTO} from "./login.types";
import {BaseApi} from "../../base-api";

@Injectable({
  providedIn: 'root',
})
export class LoginApi extends BaseApi {

  private readonly basePath: string;

  constructor(private readonly httpClient: HttpClient,
              private readonly configService: ConfigService,
              private readonly injector: Injector) {
    super(injector);
    this.basePath = configService.appConfig.apiEndpointUrl;
  }

  doLogin(login: string, password: string): Observable<LoginDataDTO> {
    return this.httpClient.post<ApiResponseDTO>(`${this.basePath}/admin-api/auth/login`, { login, password })
      .pipe(
        map((response) => {
          if (response.success) {
            return response.results as LoginDataDTO;
          } else {
            super.handleErrorResponse(response);
            return {} as LoginDataDTO;
          }
        }),
      );
  }

  getLoginData(): Observable<LoginDataDTO> {
    return this.httpClient.get<ApiResponseDTO>( `${this.basePath}/admin-api/auth/me`)
      .pipe(
        map((response) => {
          if (response.success) {
            return response.results as LoginDataDTO;
          } else {
            super.handleErrorResponse(response);
            return {} as LoginDataDTO;
          }
        }),
      );
  }

}
