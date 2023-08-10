import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { filter, Observable, take, tap } from "rxjs";

import { AccountDataSpace } from "./account.types";
import { accountsFeature, AccountsState } from "./store/account.reducer";
import { AccountActions } from "./store/account.actions";

@Injectable({
  providedIn: "root",
})
export class AccountDataSpacesResolver implements Resolve<Array<AccountDataSpace> | null> {
  constructor(private readonly store: Store<{ [accountsFeature]: AccountsState }>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Array<AccountDataSpace> | null> {
    return this.getFromStoreOrAPI(route.params["id"]);
  }

  getFromStoreOrAPI(id: string): Observable<Array<AccountDataSpace> | null> {
    return this.store
      .select((state) => state[accountsFeature].dataSpace.data)
      .pipe(
        tap((dataSpace) => {
          if (!dataSpace || dataSpace[0].key.accountId !== id) {
            if (id) {
              this.store.dispatch(AccountActions.loadDataSpaces({ id }));
            } else {
              this.store.dispatch(AccountActions.loadDataSpacesSuccess({ data: dataSpace as Array<AccountDataSpace> }));
            }
          }
        }),
        filter((dataSpace) => !!dataSpace && dataSpace[0].key.accountId === id),
        take(1),
      );
  }
}
