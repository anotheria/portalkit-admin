import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountOverlayRoutingModule } from "./account-overlay-routing.module";
import { NzModalModule } from "ng-zorro-antd/modal";
import { OpenDialogModule } from "@portalkit-admin/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { AccountFormModule } from "./account-form/account-form.module";
import { AccountPasswordDialogModule } from "./account-password-dialog/account-password-dialog.module";
import {AccountDataSpaceDialogModule} from "./account-dataspace-dialog/account-data-space-dialog.module";

@NgModule({
  declarations: [AccountEditComponent],
  imports: [
    CommonModule,
    AccountOverlayRoutingModule,
    AccountFormModule,
    AccountPasswordDialogModule,
    AccountDataSpaceDialogModule,
    NzModalModule,
    OpenDialogModule,
    NzButtonModule,
  ],
})
export class AccountOverlayModule {}
