import { isDevMode, ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppConfig } from "./core.types";
import { APP_CONFIGURATION } from "./core.di";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./authorization/token-interceptor";
import {CoreRoutingModule} from "./core-routing.module";
import {HomePageModule} from "./home-page/home-page.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HomePageModule,
    TranslateModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class CoreModule {
  static configure(appConfiguration: AppConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: APP_CONFIGURATION, useValue: appConfiguration },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    };
  }
}
