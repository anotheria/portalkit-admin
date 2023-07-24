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
    return this.loginApi.doLogin(loginRequest.email, loginRequest.password).pipe(
      map((dto: LoginDataDTO) => this.loginSerializer.deserializeLoginData(dto)),
      tap((loginData)  => this.setToken(loginData.authToken)),
      catchError(this.handleError));
  }

  public getLoginData(): Observable<LoginData> {
    return this.loginApi.getLoginData().pipe(
      map((dto: LoginDataDTO) => this.loginSerializer.deserializeLoginData(dto)),
      catchError((response: HttpErrorResponse) => {
        if(response.status == 403) this.logout();
        return EMPTY;
      })
    );
  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  public logout() {
    this.setToken(null);
    this.store.dispatch(actions.logout());
    this.router.navigate(['/login']);
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

  private handleError(error: any): Observable<any> {
    return throwError(() => {
      return error.status;
    });
  }

}
