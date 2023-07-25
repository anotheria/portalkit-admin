import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {EnabledFeaturesModule} from "../configuration/enabled-features.module";
import {CommonUiModule} from "@portalkit-admin/common-ui";
import {CoreModule} from "@portalkit-admin/core";
import * as config from "../assets/config.json";
import { default as enTranslations } from '../i18n/translate.en';
import {RouterModule} from "@angular/router";

const CoreModuleWithProviders = CoreModule.configure(
  {...config, translations: {'en': enTranslations}
  });

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, RouterModule,
      CoreModule,
      EnabledFeaturesModule,
      CommonUiModule],
  providers: [...CoreModuleWithProviders.providers as Array<Provider>],
  bootstrap: [AppComponent],
})
export class AppModule {}
