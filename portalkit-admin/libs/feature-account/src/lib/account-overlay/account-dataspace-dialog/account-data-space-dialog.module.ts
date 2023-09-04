import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountDataSpaceDialogComponent } from "./account-data-space-dialog.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";
import { AccountDataSpaceAttributeListModule } from "./account-data-space-attribute-list/account-data-space-attribute-list.module";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountDataSpaceTitleComponent } from "./account-data-space-title/account-data-space-title.component";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzEmptyModule} from "ng-zorro-antd/empty";

@NgModule({
  declarations: [AccountDataSpaceDialogComponent, AccountDataSpaceTitleComponent],
    imports: [
        CommonModule,
        AccountDataSpaceAttributeListModule,
        NzModalModule,
        NzButtonModule,
        NzButtonModule,
        NzSpaceModule,
        NzPageHeaderModule,
        NzIconModule,
        NzToolTipModule,
        NzPopconfirmModule,
        NzInputModule,
        ReactiveFormsModule,
        FormsModule,
        NzDropDownModule,
        NzEmptyModule,
    ],
  exports: [AccountDataSpaceDialogComponent],
})
export class AccountDataSpaceDialogModule {}
