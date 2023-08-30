import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountDataSpaceAttributeListComponent } from "./account-data-space-attribute-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzSelectModule} from "ng-zorro-antd/select";

@NgModule({
  declarations: [AccountDataSpaceAttributeListComponent],
    imports: [CommonModule, FormsModule, NzPopconfirmModule, NzInputModule, NzTableModule, NzButtonModule, NzIconModule, NzToolTipModule, NzSelectModule, ReactiveFormsModule],
  exports: [AccountDataSpaceAttributeListComponent]
})
export class AccountDataSpaceAttributeListModule {}
