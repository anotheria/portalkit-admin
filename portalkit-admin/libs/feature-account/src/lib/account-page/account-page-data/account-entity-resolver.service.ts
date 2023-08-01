import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, take, tap } from 'rxjs';

import {Account} from "./account.types";
import {accountsFeature, AccountsState} from "./store/account.reducer";
import {AccountActions} from "./store/account.actions";
import {AccountEntityFactory} from "./account-entity.factory";

@Injectable({
  providedIn: 'root',
})
export class AccountEntityResolver implements Resolve<Partial<Account> | null> {

  constructor(private readonly accountEntityFactory: AccountEntityFactory,
              private readonly store: Store<{ [accountsFeature]: AccountsState}>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Partial<Account> | null> {
    return this.getFromStoreOrAPI(route.params['id']);
  }

  getFromStoreOrAPI(id: string): Observable<Partial<Account> | null> {
    return this.store
      .select((state) => state[accountsFeature].entity.entity)
      .pipe(
        tap((account) => {
          if (!account || (account.accountId.internalId !== id)) {
            if(id) {
              this.store.dispatch(AccountActions.loadAccount({id}));
            } else {
              this.store.dispatch(AccountActions.loadAccountSuccess({ entity: this.accountEntityFactory.getNewInstance()}));
            }
          }
        }),
        filter((account) => !!account && (account.accountId.internalId===id || id===undefined)),
        take(1),
      )
  }
}
