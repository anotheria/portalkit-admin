import { Component, Inject, OnInit } from "@angular/core";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { Account } from "../../account-page/account-page-data/account.types";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import {AccountService} from "../../account-page/account-page-data/account.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: "pk-account-password-dialog",
  templateUrl: "./account-password-dialog.component.html",
  styleUrls: ["./account-password-dialog.component.scss"],
})
export class AccountPasswordDialogComponent implements OnInit {
  account: Account;
  validateForm!: UntypedFormGroup;

  constructor(@Inject(NZ_MODAL_DATA) public modalData: any, private modal: NzModalRef, private fb: UntypedFormBuilder,
              private accountService: AccountService,
              private notificationService: NzNotificationService) {
    this.account = this.modalData["account"];
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      accountId: [this.account.accountId.internalId],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onCancel(): void {
    this.modal.close();
  }
  onSave(): void {
    if (this.validateForm.valid) {
      const formValue = this.validateForm.value;
      this.accountService.updatePassword(formValue.accountId, formValue.password)
        .subscribe((success) => {
          if (success) {
            this.notificationService.success('','Password updated');
            this.modal.close();
          }
        });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
