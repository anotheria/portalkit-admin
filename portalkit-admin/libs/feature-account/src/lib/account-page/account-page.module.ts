import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPageComponent} from "./account-page.component";
import {HomePageModule} from "@portalkit-admin/core";



@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    HomePageModule
  ],
  exports:[AccountPageComponent]
})
export class AccountPageModule { }
