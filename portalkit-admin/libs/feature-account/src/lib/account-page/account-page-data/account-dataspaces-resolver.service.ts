import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import {filter, map, Observable, take, tap} from "rxjs";

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
      .select((state) => state[accountsFeature].dataSpace)
      .pipe(
        tap((dsState) => {
          if (!dsState.status.loading && dsState.status?.id?.toString() != id) {
            this.store.dispatch(AccountActions.loadDataSpaces({id}));
          }
        }),
        filter((dsState) => !dsState.status.loading && dsState.status?.id?.toString() == id),
        map((dsState) => dsState.data),
        take(1),
      )
  }
}
