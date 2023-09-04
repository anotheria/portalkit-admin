import {Component, Inject} from "@angular/core";
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {UntypedFormBuilder} from "@angular/forms";
import {AccountService} from "../../account-page/account-page-data/account.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Account, AccountDataSpace, ValueName} from "../../account-page/account-page-data/account.types";
import {map, Observable, tap} from "rxjs";
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
  canAddDataSpace = false;

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
    this.initDSTypeSelectOptions();
  }

  onCancel(): void {
    this.modal.close();
  }

  onDeleteDataSpace(dataSpaceType: number) {
    this.dataSpaces = this.dataSpaces.filter((ds) => ds.type != dataSpaceType);
    this.initDSTypeSelectOptions();
  }

  onAddDataSpace(dataSpace: ValueName) {
    this.dataSpaces = [
      ...this.dataSpaces,
      {
        accountId: this.account.accountId.internalId,
        name: dataSpace.name,
        type: dataSpace.value,
        attributes: [{id:0, name: '', value: '', valueAsString: '', type: null}]
      }
    ];
    this.initDSTypeSelectOptions();
  }

  private initDSTypeSelectOptions() {
    this.dataSpaceOptions$ = this.cachedAccountService.getDataSpaceConfig().pipe(
      map((dataSpaceOptions) => dataSpaceOptions.filter((dsOption) => !this.dataSpaces.find((ds) => ds.type == dsOption.value))),
      tap((dataSpaceOptions) => this.canAddDataSpace = dataSpaceOptions.length > 0 )
    );
  }
}
