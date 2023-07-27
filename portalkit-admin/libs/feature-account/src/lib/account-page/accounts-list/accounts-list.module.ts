import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./libs/feature-account/src/lib/account-page/accounts-list/accounts-list.component";

@NgModule({
  declarations: [AccountsListComponent],
  imports: [CommonModule],
})
export class AccountsListModule {}
