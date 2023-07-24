import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as loginActions from './login.action';
import { LoginService } from '../login.service';
import { LoginData } from '../login.types';

@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions, private loginService: LoginService) {}

  doLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions.login),
      concatMap((action) => this.loginService.login({email: action.email, password: action.password }).pipe(
        map((loginData: LoginData) =>  loginActions.loginSuccess({data: loginData})),
        catchError((error) => of(loginActions.loginError({error})))
      )
      ))
  });

  loadLoginData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginActions.getUserByToken),
      switchMap(() =>
        this.loginService.getLoginData().pipe(
          map( (response) =>
            loginActions.getUserByTokenSuccess({ loginData: response })),
          catchError((error) => of(loginActions.loginError({ error })))
        )
      ));
  });

}
