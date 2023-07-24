import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {EnabledFeaturesModule} from "../configuration/enabled-features.module";
import {CommonUiModule} from "@portalkit-admin/common-ui";
import {CoreModule} from "@portalkit-admin/core";
import * as config from "../assets/config.json";

const CoreModuleWithProviders = CoreModule.configure(config);

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule,
      EnabledFeaturesModule,
      CommonUiModule,
      MatIconModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule],
  providers: [...CoreModuleWithProviders.providers as Array<Provider>],
  bootstrap: [AppComponent],
})
export class AppModule {}
