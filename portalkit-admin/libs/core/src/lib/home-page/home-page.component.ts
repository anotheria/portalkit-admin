import { Component, OnDestroy } from "@angular/core";
import { FeatureDefinition, FeatureRegistryService } from "../feature";
import { LoginService } from "../login-page/login-page-data/login.service";
import { filter, Subject, takeUntil, tap } from "rxjs";
import { selectLoginData } from "../login-page/login-page-data/store/login.selectors";
import { loginFeatureName, LoginState } from "../login-page/login-page-data/store/login.reducer";
import { Store } from "@ngrx/store";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
  selector: "pk-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnDestroy {
  features: FeatureDefinition[];
  loginName!: string;
  destroy$ = new Subject<void>();
  activeSubMenuRoute: any[] = [];
  activeFeature = '';

  constructor(
    private readonly featureRegistryService: FeatureRegistryService,
    private readonly loginService: LoginService,
    private readonly store: Store<{ [loginFeatureName]: LoginState }>,
    private router: Router,
  ) {
    this.features = this.featureRegistryService.availableFeatures();
    this.store
      .select(selectLoginData)
      .pipe(
        takeUntil(this.destroy$),
        tap((loginData) => (this.loginName = loginData.login as string)),
      )
      .subscribe();
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        tap((event) => this.handleRouteChange((event as NavigationEnd)))
      )
      .subscribe();

  }

  handleRouteChange(event: NavigationEnd) {
    const activeRouteUrl = event.url;
    this.features.forEach((feature) => {
      if(activeRouteUrl.startsWith(feature.sideNavSubMenu[0].routerLink[0])) {
        this.activeFeature = feature.name;
        feature.sideNavSubMenu.forEach((subMenu) => {
          if(activeRouteUrl.includes(subMenu.routerLink.join('/'))){
            this.activeSubMenuRoute = subMenu.routerLink;
          }
        });

      }
    });
  }

  onLogout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
