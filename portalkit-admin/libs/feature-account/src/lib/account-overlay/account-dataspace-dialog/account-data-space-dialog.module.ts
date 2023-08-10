import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountDataSpaceDialogComponent } from "./account-data-space-dialog.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";
import { AccountDataSpaceAttributeListModule } from "./account-data-space-attribute-list/account-data-space-attribute-list.module";

@NgModule({
  declarations: [AccountDataSpaceDialogComponent],
  imports: [CommonModule, AccountDataSpaceAttributeListModule, NzModalModule, NzButtonModule, NzButtonModule],
  exports: [AccountDataSpaceDialogComponent],
})
export class AccountDataSpaceDialogModule {}
