import { Injectable } from "@angular/core";
import { AccountApi } from "./account.api";
import { map, Observable } from "rxjs";
import { PaginatedContent } from "@portalkit-admin/core";
import { AccountSerializer } from "./account.serializer";
import {Account, AccountDTO, AccountFilter} from "./account.types";

@Injectable({ providedIn: "root" })
export class AccountService {
  constructor(private readonly accountApi: AccountApi, private readonly accountSerializer: AccountSerializer) {}

  loadAccounts(filter: AccountFilter): Observable<PaginatedContent<Account>> {
    return this.accountApi.loadAccounts(filter).pipe(
      map((paginatedContent) => {
        paginatedContent.content = this.accountSerializer.deserializeAccounts(
          paginatedContent.content as Array<AccountDTO>,
        );
        return paginatedContent;
      }),
    );
  }

  loadAccount(id: string): Observable<Account> {
    return this.accountApi
      .loadAccount(id)
      .pipe(map((dto) => this.accountSerializer.deserializeAccount(dto)));
  }
}