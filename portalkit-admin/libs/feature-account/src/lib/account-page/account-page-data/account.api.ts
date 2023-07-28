import { Injectable, Injector } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {
  BaseApi,
  ConfigService,
  PaginatedContent,
  ApiPaginatedResponseDTO, initialPaginatedContent, ApiResponseDTO
} from "@portalkit-admin/core";
import { AccountDTO, AccountFilter} from "./account.types";

@Injectable({ providedIn: "root" })
export class AccountApi extends BaseApi {
  private basePath: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
    private readonly injector: Injector,
  ) {
    super(injector);
    this.basePath = this.configService.appConfig.apiEndpointUrl;
  }

  loadAccounts(filter: AccountFilter): Observable<PaginatedContent<AccountDTO>> {
    const params = new HttpParams({
      fromObject: {...filter},
    });
    return this.httpClient.get<ApiPaginatedResponseDTO<AccountDTO>>(`${this.basePath}/admin-api/account`, {params}).pipe(
      map((response) => {
        if (response.success) {
          return response.results.data;
        } else {
          super.handleErrorResponse(response);
          return initialPaginatedContent;
        }
      }),
      catchError(super.handleHttpError)
    );
  }

  loadAccount(id: string): Observable<AccountDTO> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/mission/${id}`, { observe: 'body'}).pipe(
      map((response) => {
        if(response.success) {
          return response.results.account;
        } else {
          super.handleErrorResponse(response);
        }
      })
    );
  }
}
