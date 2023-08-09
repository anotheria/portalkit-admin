import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountDataSpaceDialogComponent } from "./account-data-space-dialog.component";
import { AccountFormModule } from "../account-form/account-form.module";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";

@NgModule({
  declarations: [AccountDataSpaceDialogComponent],
  imports: [CommonModule, AccountFormModule, NzModalModule, NzButtonModule, NzButtonModule],
  exports: [AccountDataSpaceDialogComponent]
})
export class AccountDataSpaceDialogModule {}
