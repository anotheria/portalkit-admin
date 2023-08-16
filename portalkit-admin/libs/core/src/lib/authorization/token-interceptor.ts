import { LoginService } from '../login-page/login-page-data/login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.loginService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          "authToken": this.loginService.getToken(),
        }
      });
    }
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.loginService.logout();
      }
      const error = err.error.message ?? err.error.errorKey;
      return throwError(error);
    }));
  }
}
