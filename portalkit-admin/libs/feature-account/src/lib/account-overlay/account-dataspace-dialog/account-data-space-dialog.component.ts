import { Component, Inject } from "@angular/core";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { UntypedFormBuilder } from "@angular/forms";
import { AccountService } from "../../account-page/account-page-data/account.service";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Account } from "../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-dialog",
  templateUrl: "./account-data-space-dialog.component.html",
  styleUrls: ["./account-data-space-dialog.component.scss"],
})
export class AccountDataSpaceDialogComponent {
  account: Account;

  constructor(
    @Inject(NZ_MODAL_DATA) public modalData: any,
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private accountService: AccountService,
    private notificationService: NzNotificationService,
  ) {
    this.account = this.modalData["account"];
  }

  onCancel(): void {
    this.modal.close();
  }
}
