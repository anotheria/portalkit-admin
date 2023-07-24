import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageModule} from "../../../core/src/lib/login-page/login-page.module";

@NgModule({
  imports: [CommonModule,  LoginPageModule],
})
export class CommonUiModule {}
