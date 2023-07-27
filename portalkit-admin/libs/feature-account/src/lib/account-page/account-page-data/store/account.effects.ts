import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AccountService} from "../account.service";
import {AccountActions} from "./account.actions";
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class AccountEffects {
  constructor(private actions$: Actions, private accountService: AccountService) {
  }

  loadAccounts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadAccounts),
      switchMap(({filter}) =>
        this.accountService.loadAccounts(filter).pipe(
          map((response) => AccountActions.loadAccountsSuccess({data: response})),
          catchError((error) => of(AccountActions.loadAccountsError({error}))),
        ),
      ),
    );
  });

  loadAccount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountActions.loadAccount),
      switchMap(({id}) =>
        this.accountService.loadAccount(id).pipe(
          map((entity) => AccountActions.loadAccountSuccess({ entity })),
          catchError((error) => of(AccountActions.loadAccountError({ error }))),
        ),
      ),
    );
  });
}
