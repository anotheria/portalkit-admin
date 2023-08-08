import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountPasswordDialogComponent } from "./account-password-dialog.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";

@NgModule({
  declarations: [AccountPasswordDialogComponent],
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule,
    FormsModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
  ],
  exports: [AccountPasswordDialogComponent],
})
export class AccountPasswordDialogModule {}
