import { isDevMode, ModuleWithProviders, NgModule } from "@angular/core";
import {CommonModule, registerLocaleData} from "@angular/common";
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
import {MissingTranslationHandler, TranslateModule} from "@ngx-translate/core";
import {LoginEffects} from "./login-page/login-page-data/store/login.effects";
import {loginFeatureName, loginReducer} from "./login-page/login-page-data/store/login.reducer";
import {LoginPageModule} from "./login-page/login-page.module";
import {CustomMissingTranslationHandler} from "./translations/custom-missing-translation-handler";
import {NotTranslatedService} from "./translations/not-translated.service";
import en from '@angular/common/locales/en';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {NZ_ICONS} from "ng-zorro-antd/icon";

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HomePageModule,
    LoginPageModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler,
        deps: [NotTranslatedService]
      }
    }),
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

    StoreModule.forFeature(loginFeatureName, loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  exports: [TranslateModule]
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
        { provide: NZ_ICONS, useValue: icons }
      ],
    };
  }
}
