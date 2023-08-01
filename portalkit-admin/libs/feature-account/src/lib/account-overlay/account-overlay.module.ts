import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountFormComponent } from "./account-form/account-form.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import {AccountOverlayRoutingModule} from "./account-overlay-routing.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {OpenDialogModule} from "@portalkit-admin/core";

@NgModule({
  declarations: [AccountFormComponent, AccountEditComponent],
  imports: [CommonModule, AccountOverlayRoutingModule, NzModalModule, OpenDialogModule],
})
export class AccountOverlayModule {}
