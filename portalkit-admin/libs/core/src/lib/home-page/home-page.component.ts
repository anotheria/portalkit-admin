import { Component, OnDestroy } from "@angular/core";
import { FeatureRegistryService } from "../feature";
import { LoginService } from "../login-page/login-page-data/login.service";
import { Subject, takeUntil, tap } from "rxjs";
import { selectLoginData } from "../login-page/login-page-data/store/login.selectors";
import { loginFeatureName, LoginState } from "../login-page/login-page-data/store/login.reducer";
import { Store } from "@ngrx/store";

@Component({
  selector: "pk-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnDestroy {
  navItems: string | any[];
  loginName!: string;
  destroy$ = new Subject<void>();

  constructor(
    private readonly featureRegistryService: FeatureRegistryService,
    private readonly loginService: LoginService,
    private readonly store: Store<{ [loginFeatureName]: LoginState }>,
  ) {
    this.navItems = this.featureRegistryService.availableFeatures().map((f) => f.links?.domain);
    this.store
      .select(selectLoginData)
      .pipe(
        takeUntil(this.destroy$),
        tap((loginData) => (this.loginName = loginData.login as string)),
      )
      .subscribe();
  }

  onLogout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
