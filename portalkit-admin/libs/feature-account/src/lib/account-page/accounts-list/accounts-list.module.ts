import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./accounts-list.component";

@NgModule({
  declarations: [AccountsListComponent],
  imports: [CommonModule],
  exports: [
    AccountsListComponent
  ]
})
export class AccountsListModule {}
