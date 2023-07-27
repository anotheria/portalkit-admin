import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPageComponent} from "./account-page.component";
import {HomePageModule} from "@portalkit-admin/core";
import {AccountsListModule} from "./accounts-list/accounts-list.module";
import {AccountPageDataModule} from "./account-page-data/account-page-data.module";

@NgModule({
  declarations: [AccountPageComponent],
  imports: [
    CommonModule,
    HomePageModule,
    AccountsListModule,
    AccountPageDataModule
  ],
  exports:[AccountPageComponent]
})
export class AccountPageModule { }
