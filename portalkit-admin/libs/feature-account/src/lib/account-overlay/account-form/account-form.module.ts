import { NgModule } from "@angular/core";
import { AccountFormComponent } from "./account-form.component";
import { CommonModule } from "@angular/common";
import { NzFormModule } from "ng-zorro-antd/form";
import { ReactiveFormsModule } from "@angular/forms";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";

@NgModule({
  declarations: [AccountFormComponent],
  imports: [CommonModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzSelectModule],
  exports: [AccountFormComponent]
})
export class AccountFormModule {}
