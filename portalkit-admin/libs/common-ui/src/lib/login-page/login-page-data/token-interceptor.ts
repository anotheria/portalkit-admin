import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return next.handle(request);
  }
}
