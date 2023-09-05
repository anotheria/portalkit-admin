import { Injectable } from "@angular/core";
import { AccountApi } from "./account.api";
import { map, Observable } from "rxjs";
import {ConfigService, PaginatedContent} from "@portalkit-admin/core";
import { AccountSerializer } from "./account.serializer";
import {
  Account,
  AccountDataSpace,
  AccountDTO,
  AccountFilter,
  AccountStatus,
  AccountType, DataSpaceAttribute,
  ValueName
} from "./account.types";

@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(private readonly accountApi: AccountApi, private readonly accountSerializer: AccountSerializer,
              private readonly configService: ConfigService) {}

  loadAccounts(filter: AccountFilter): Observable<PaginatedContent<Account>> {
    return this.accountApi.loadAccounts(this.accountSerializer.serializeFilter(filter)).pipe(
      map((paginatedContent) => {
        return {
          ...paginatedContent,
          content: this.accountSerializer.deserializeAccounts(
            paginatedContent.content as Array<AccountDTO>,
          ),
          registrationRange: filter.registrationRange,
          includedStatuses: filter.includedStatuses,
          excludedStatuses: filter.excludedStatuses,
          pageNumber: paginatedContent.pageNumber + 1,
        }
      }),
    );
  }

  loadAccount(id: string): Observable<Account> {
    return this.accountApi
      .loadAccount(id)
      .pipe(map((dto) => this.accountSerializer.deserializeAccount(dto)));
  }

  updateAccount(account: Partial<Account>): Observable<Account> {
    return this.accountApi
        .updateAccount(this.accountSerializer.serializeAccountUpdateRequest(account))
        .pipe(map((dto) => this.accountSerializer.deserializeAccount(dto)));
  }

  loadAccountStatuses(): Observable<Array<AccountStatus>> {
    return this.accountApi.loadAccountStatuses();
  }

  loadAccountTypes(): Observable<Array<AccountType>> {
    return this.accountApi.loadAccountTypes();
  }
  loadDataSpaceConfig(): Observable<Array<ValueName>> {
    return this.accountApi.loadDataSpaceConfig();
  }

  signInAs(accountId: string): void {
    this.accountApi.signInAs(accountId).subscribe((token) =>
      window.open(this.configService.appConfig.loginByTokenUrl + token, '_blank')
    );
  }

  updatePassword(accountId: string, password: string): Observable<boolean> {
    return this.accountApi.updatePassword(accountId, password);
  }

  loadAccountDataSpaces(id: string): Observable<Array<AccountDataSpace>> {
    return this.accountApi
      .loadAccountDataSpaces(id)
      .pipe(map((dtos) => this.accountSerializer.deserializeAccountDataSpaces(dtos)));
  }

  updateDataSpaceAttribute(ds: AccountDataSpace, attr: DataSpaceAttribute): Observable<boolean> {
    return this.accountApi.updateDataSpaceAttribute(ds, attr);
  }

  removeDataSpaceAttribute(ds: AccountDataSpace, attr: DataSpaceAttribute): Observable<boolean> {
    return this.accountApi.removeDataSpaceAttribute(ds, attr);
  }

  deleteDataSpace(ds: AccountDataSpace): Observable<boolean> {
    return this.accountApi.deleteDataSpace(ds);
  }
}
