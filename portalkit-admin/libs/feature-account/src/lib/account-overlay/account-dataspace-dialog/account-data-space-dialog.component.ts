import { Component, Inject } from "@angular/core";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { UntypedFormBuilder } from "@angular/forms";
import { AccountService } from "../../account-page/account-page-data/account.service";
import { NzNotificationService } from "ng-zorro-antd/notification";
import {Account, AccountDataSpace, ValueName} from "../../account-page/account-page-data/account.types";
import {Observable} from "rxjs";
import {CachedAccountTypesService} from "../../account-page/account-page-data/cached-account-types.service";

@Component({
  selector: "pk-account-data-space-dialog",
  templateUrl: "./account-data-space-dialog.component.html",
  styleUrls: ["./account-data-space-dialog.component.scss"],
})
export class AccountDataSpaceDialogComponent {
  account: Account;
  dataSpaces: Array<AccountDataSpace>;
  dataSpaceOptions$!: Observable<Array<ValueName>>;

  constructor(
    @Inject(NZ_MODAL_DATA) public modalData: any,
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private accountService: AccountService,
    private notificationService: NzNotificationService,
    private cachedAccountService: CachedAccountTypesService
  ) {
    this.account = this.modalData["account"];
    this.dataSpaces = this.modalData["dataSpaces"];
    this.dataSpaces = JSON.parse(JSON.stringify(this.dataSpaces)); //deep clone, override immutable obj
    this.dataSpaceOptions$ = this.cachedAccountService.getDataSpaceConfig();
  }

  onCancel(): void {
    this.modal.close();
  }

  onAddDataSpace(dataSpace: ValueName) {
    this.dataSpaces = [
      ...this.dataSpaces,
      {
        accountId: this.account.accountId.internalId,
        name: dataSpace.name,
        type: dataSpace.value,
        attributes: [{id:0, name: '', value: '', valueAsString: '', type: ''}]
      }
    ];
  }
}
