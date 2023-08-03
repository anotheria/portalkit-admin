import { Injectable } from "@angular/core";
import { AccountApi } from "./account.api";
import { map, Observable } from "rxjs";
import { PaginatedContent } from "@portalkit-admin/core";
import { AccountSerializer } from "./account.serializer";
import {Account, AccountDTO, AccountFilter, AccountStatus, AccountType} from "./account.types";

@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(private readonly accountApi: AccountApi, private readonly accountSerializer: AccountSerializer) {}

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

  loadAccountStatuses(): Observable<Array<AccountStatus>> {
    return this.accountApi.loadAccountStatuses();
  }
  loadAccountTypes(): Observable<Array<AccountType>> {
    return this.accountApi.loadAccountTypes();
  }
}
