import {Injectable, Injector} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {
  ApiPaginatedResponseDTO,
  ApiResponseDTO,
  BaseApi,
  ConfigService,
  initialPaginatedContent,
  PaginatedContent,
} from "@portalkit-admin/core";
import {
  AccountDataSpace,
  AccountDataSpaceDTO,
  AccountDTO,
  AccountFilterDTO,
  AccountStatus,
  AccountType,
  AccountUpdate,
  AttributeType, DataSpaceAttribute,
  ValueName,
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

  loadDataSpaceConfig(): Observable<Array<ValueName>> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/dataspace/config`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.data;
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
    return this.httpClient
      .get<ApiResponseDTO>(`${this.basePath}/admin-api/account/sign-as/${accountId}`, { observe: "body" })
      .pipe(
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
    return this.httpClient
      .post<ApiResponseDTO>(`${this.basePath}/admin-api/account/password`, { accountId, password })
      .pipe(
        map((response) => {
          if (response.success) {
            return true;
          } else {
            super.handleErrorResponse(response);
            return false;
          }
        }),
      );
  }

  loadAccountDataSpaces(accountId: string): Observable<Array<AccountDataSpaceDTO>> {
    const mockArray:Array<AccountDataSpaceDTO> = [
      {
        type: 2,
        name: "LOCALIZATION",
        accountId: {
          internalId: accountId,
        },
        attributes: [
          {
            name: "profile_title",
            value: "HUJ",
            valueAsString: "HUJ",
            type: AttributeType.BOOLEAN,
          },
        ],
      },
      {
        type: 6,
        name: "PUSH_NOTIFICATION_SETTINGS",
        accountId: {
          internalId: accountId,
        },
        attributes: [
          {
            name: "PUSH_NOTIFICATION_NEW_MESSAGE_SETTING",
            value: true,
            valueAsString: "true",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "PUSH_NOTIFICATION_CONNECTION_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "PUSH_NOTIFICATION_CASE_SHARED_SETTING",
            value: true,
            valueAsString: "true",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "PUSH_NOTIFICATION_FILE_FOLDER_SHARED_SETTING",
            value: true,
            valueAsString: "true",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "PUSH_NOTIFICATION_PHOTO_SHARED_SETTING",
            value: true,
            valueAsString: "true",
            type: AttributeType.BOOLEAN,
          },
        ],
      },
      {
        type: 7,
        name: "MAIL_NOTIFICATION_SETTINGS",
        accountId: {
          internalId: accountId,
        },
        attributes: [
          {
            name: "MAIL_NOTIFICATION_FILE_FOLDER_SHARED_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "MAIL_NOTIFICATION_NEW_MESSAGE_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "MAIL_NOTIFICATION_CASE_SHARED_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "MAIL_NOTIFICATION_CONNECTION_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
          {
            name: "MAIL_NOTIFICATION_PHOTO_SHARED_SETTING",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
        ],
      },
      {
        type: 8,
        name: "RESHARING_SETTINGS",
        accountId: {
          internalId: accountId,
        },
        attributes: [
          {
            name: "TEST_AAAA",
            value: "value",
            valueAsString: "value",
            type: AttributeType.STRING,
          },
        ],
      },
      {
        type: 10,
        name: "USER_GENERIC_SETTINGS",
        accountId: {
          internalId: accountId,
        },
        attributes: [
          {
            name: "TEST_ATTRIBUTE",
            value: 10,
            valueAsString: "10",
            type: AttributeType.INT,
          },
          {
            name: "showTutorial",
            value: false,
            valueAsString: "false",
            type: AttributeType.BOOLEAN,
          },
        ],
      },
    ];
    //return of(mockArray);

    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/dataspace/${accountId}`, { observe: "body" }).pipe(
      map((response) => {
        if (response.success) {
          return response.results.data || mockArray; //TODO: remove mock then BE will return data
        } else {
          super.handleErrorResponse(response);
        }
      }),
    );
  }

  updateDataSpaceAttribute(ds: AccountDataSpace, attr: DataSpaceAttribute): Observable<boolean> {
    const request = {
      accountId: ds.accountId,
      dataspaceId: ds.type,
      attributeName: attr.name,
      attributeValue: attr.valueAsString,
      type: attr.type
    };
    return this.httpClient.post<ApiResponseDTO>(`${this.basePath}/admin-api/dataspace/add-attribute`, request).pipe(
      map((response) => {
        if (response.success) {
          return true;
        } else {
          super.handleErrorResponse(response);
          return false;
        }
      }),
    );
  }

  removeDataSpaceAttribute(ds: AccountDataSpace, attr: DataSpaceAttribute): Observable<boolean> {
    const request = {
      accountId: ds.accountId,
      dataspaceId: ds.type,
      attributeName: attr.name,
    };
    return this.httpClient.post<ApiResponseDTO>(`${this.basePath}/admin-api/dataspace/remove-attribute`, request).pipe(
      map((response) => {
        if (response.success) {
          return true;
        } else {
          super.handleErrorResponse(response);
          return false;
        }
      }),
    );
  }
}
