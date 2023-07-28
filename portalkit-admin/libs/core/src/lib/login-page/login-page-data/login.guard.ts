import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { CanActivate, UrlTree } from "@angular/router";
import { filter, map, Observable, take } from "rxjs";
import { LoginService } from "./login.service";
import { Store } from "@ngrx/store";
import * as actions from "./store/login.action";
import { isUserDataLoadedOrLoading, selectLoginData } from "./store/login.selectors";
import { LoginState, loginFeatureName } from "./store/login.reducer";
import { LoginData } from "./login.types";
import { switchMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private store: Store<{ [loginFeatureName]: LoginState }>,
  ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.loginService.isAuthenticated()) {
      this.loadUserDataIfNotLoaded();
      return this.checkIfAllowedToUseSite();
    } else {
      this.loginService.logout();
      return false;
    }
  }
  private loadUserDataIfNotLoaded() {
    this.store
      .select(isUserDataLoadedOrLoading)
      .pipe(take(1))
      .subscribe((loadedOrLoading) => {
        if (!loadedOrLoading) {
          this.store.dispatch(actions.getUserByToken({ token: this.loginService.getToken() }));
        }
      });
  }

  private checkIfAllowedToUseSite(): Observable<boolean> {
    return this.store
      .select((state) => state.login)
      .pipe(
        filter((state) => state.status.loaded),
        take(1),
        switchMap(() => {
          return this.store.select(selectLoginData).pipe(
            map((loginData: LoginData) => {
              if (!(loginData.token || loginData.login)) {
                this.loginService.logout();
                return false;
              }
              return true;
            }),
          );
        }),
      );
  }
}
