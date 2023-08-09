import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {
  BaseApi,
  ConfigService,
  PaginatedContent,
  ApiPaginatedResponseDTO,
  initialPaginatedContent,
  ApiResponseDTO,
} from "@portalkit-admin/core";
import {
  AccountDataSpace, AccountDataSpaceDTO,
  AccountDTO,
  AccountFilterDTO,
  AccountStatus,
  AccountType, AccountUpdate,
} from "./account.types";

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

  loadAccounts(filter: AccountFilterDTO): Observable<PaginatedContent<AccountDTO>> {
    return this.httpClient
      .post<ApiPaginatedResponseDTO<AccountDTO>>(`${this.basePath}/admin-api/account/list`, { ...filter })
      .pipe(
        map((response) => {
          if (response.success) {
            return response.results.data;
          } else {
            super.handleErrorResponse(response);
            return initialPaginatedContent;
          }
        }),
        catchError(super.handleHttpError),
      );
  }

  loadAccount(id: string): Observable<AccountDTO> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/account/${id}`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.data;
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );
  }

  loadAccountStatuses(): Observable<Array<AccountStatus>> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/account/statuses`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.success;
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );
  }

  loadAccountTypes(): Observable<Array<AccountType>> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/account/types`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.success;
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );
  }

  updateAccount(account: AccountUpdate): Observable<AccountDTO> {
    return this.httpClient.post<ApiResponseDTO>(`${this.basePath}/admin-api/account`, account).pipe(
      map((response) => {
        if (response.success) {
          return response.results.success;
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );
  }

    signInAs(accountId: string): Observable<string> {
        return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/account/sign-as/${accountId}`, { observe: "body" }).pipe(
            map((response) => {
                if (response.success) {
                    return response.results.token;
                } else {
                    super.handleErrorResponse(response);
                }
            }),
        );
    }

    updatePassword(accountId: string, password: string): Observable<boolean> {
        return this.httpClient.post<ApiResponseDTO>(`${this.basePath}/admin-api/account/password`, {accountId, password}).pipe(
            map((response) => {
                if (response.success) {
                    return true;
                } else {
                  super.handleErrorResponse(response)
                  return false;
                }
            }),
        );
    }

  loadAccountDataSpace(accountId: string): Observable<AccountDataSpaceDTO> {
    const mock: AccountDataSpaceDTO = {
      key: {
        accountId: accountId,
        dataspaceId: 0
      },
      attributes: {
        Attr01: {
          name: 'Attr01 param01',
          valueAsString: '100',
          type: 'LONG'
        },
        Attr02: {
          name: 'Attr02 param02',
          valueAsString: '200',
          type: 'LONG'
        }
      }
    }

    return of(mock);
    /*
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/dataspace/${accountId}`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.data;
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );*/
  }

}
