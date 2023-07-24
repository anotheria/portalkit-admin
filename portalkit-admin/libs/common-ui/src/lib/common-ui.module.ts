import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageModule} from "./login-page/login-page.module";

@NgModule({
  imports: [CommonModule,  LoginPageModule],
})
export class CommonUiModule {}
