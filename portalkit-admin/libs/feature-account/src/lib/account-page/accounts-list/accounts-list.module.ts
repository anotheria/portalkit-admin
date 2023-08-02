import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountsListComponent } from "./accounts-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzButtonModule} from "ng-zorro-antd/button";
import {RouterLink} from "@angular/router";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzSelectModule} from "ng-zorro-antd/select";

@NgModule({
  declarations: [AccountsListComponent],
  imports: [CommonModule, NzTableModule, NzDividerModule, NzFormModule, NzInputModule, NzIconModule, ReactiveFormsModule, NzToolTipModule, NzButtonModule, RouterLink, NzDatePickerModule, NzSelectModule],
  exports: [
    AccountsListComponent
  ]
})
export class AccountsListModule {}
