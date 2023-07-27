import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { BaseApi, ConfigService, ResponseData, ApiResponseDTO, PaginatedContent } from "@portalkit-admin/core";

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

  loadAccounts(): Observable<PaginatedContent> {
    return this.httpClient.get<ApiResponseDTO>(`${this.basePath}/admin-api/account`).pipe(
      map((response) => {
        if (response.success) {
          return (response.results as ResponseData).data;
        } else {
          super.handleErrorResponse(response);
          return { pageNumber: 0, itemsOnPage: 0, totalItems: 0, content: [] } as PaginatedContent;
        }
      }),
    );
  }
}
