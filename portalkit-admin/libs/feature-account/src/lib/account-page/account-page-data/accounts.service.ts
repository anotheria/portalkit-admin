import { Injectable } from "@angular/core";
import { AccountApi } from "./account.api";
import { map, Observable } from "rxjs";
import { PaginatedContent } from "@portalkit-admin/core";
import { AccountSerializer } from "./account.serializer";
import { AccountDTO } from "./account.types";

@Injectable({ providedIn: "root" })
export class LoginService {
  constructor(private readonly accountsApi: AccountApi, private readonly accountSerializer: AccountSerializer) {}

  loadAccounts(): Observable<PaginatedContent> {
    return this.accountsApi.loadAccounts().pipe(
      map((paginatedContent) => {
        paginatedContent.content = this.accountSerializer.deserializeAccounts(
          paginatedContent.content as Array<AccountDTO>,
        );
        return paginatedContent;
      }),
    );
  }
}
