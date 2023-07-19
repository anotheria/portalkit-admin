import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {EnabledFeaturesModule} from "../configuration/enabled-features.module";

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule,  BrowserAnimationsModule, HttpClientModule,
      EnabledFeaturesModule,
      MatIconModule, NzBreadCrumbModule, NzLayoutModule, NzMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
