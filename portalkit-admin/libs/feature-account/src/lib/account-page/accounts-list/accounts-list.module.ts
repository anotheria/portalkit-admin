import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./accounts-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";

@NgModule({
  declarations: [AccountsListComponent],
  imports: [CommonModule, NzTableModule, NzDividerModule],
  exports: [
    AccountsListComponent
  ]
})
export class AccountsListModule {}
