import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, tap, throwError } from 'rxjs';
import * as actions from "./store/login.action";

import {LoginData, LoginDataDTO, LoginRequest} from './login.types';
import { Store } from '@ngrx/store';
import { LoginSerializer } from './login.serializer';
import { LoginApi } from './login.api';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private readonly loginApi: LoginApi,
              private router: Router,
              private store: Store,
              private readonly loginSerializer: LoginSerializer) {
  }

  public login(loginRequest: LoginRequest): Observable<LoginData> {
    return this.loginApi.doLogin(loginRequest.login, loginRequest.password).pipe(
      map((dto: LoginDataDTO) => this.loginSerializer.deserializeLoginData({
        ...dto,
        login: loginRequest.login
      })),
      tap((loginData)  => this.setToken(loginData.token)),
      catchError((error) => throwError(()=>error))
    );
  }

  public getLoginData(): Observable<LoginData> {
    return this.loginApi.getLoginData().pipe(
      map((dto: LoginDataDTO) => this.loginSerializer.deserializeLoginData(dto)),
      catchError((response: HttpErrorResponse) => {
        if(response.status == 401) this.logout();
        return EMPTY;
      })
    );
  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  public logout() {
    this.store.dispatch(actions.logout());
    this.setToken(null);
    this.router.navigate(['/login']);
  }

  public doLogout() {
    return this.loginApi.doLogout();
  }

  public isAuthenticated() {
    return !!this.getToken();
  }

  public loginSuccess(response: LoginData) {
    this.store.dispatch(actions.loginSuccess({ data: response }));
  }

  private setToken(authToken: string | null) {
    if (authToken) {
      localStorage.setItem('token', authToken);
    } else {
      localStorage.removeItem('token');
    }
  }

  private updateToken(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

}
