import { Component, Inject, ViewChild } from "@angular/core";
import { NZ_MODAL_DATA, NzModalRef } from "ng-zorro-antd/modal";
import { Account } from "../../account-page/account-page-data/account.types";
import { AccountFormComponent } from "../account-form/account-form.component";
import { Store } from "@ngrx/store";
import { accountsFeature, AccountsState } from "../../account-page/account-page-data/store/account.reducer";
import {AccountActions} from "../../account-page/account-page-data/store/account.actions";
import {AccountService} from "../../account-page/account-page-data/account.service";
import {filter, map, take} from "rxjs";

@Component({
  selector: "pk-account-edit",
  templateUrl: "./account-edit.component.html",
  styleUrls: ["./account-edit.component.scss"],
})
export class AccountEditComponent {
  account: Account;

  @ViewChild(AccountFormComponent) form!: AccountFormComponent;

  constructor(
    @Inject(NZ_MODAL_DATA) public modalData: any,
    private modal: NzModalRef,
    private readonly store: Store<{ [accountsFeature]: AccountsState }>,
    private readonly accountService: AccountService
  ) {
    this.account = this.modalData["account"];
  }

  onSave(): void {
    if (this.form.validate()) {
      const account = {
        ...this.form.getValue(),
        accountId: {internalId: this.form.getValue().accountId || ''}
      } as Account;
      this.store.dispatch(AccountActions.updateAccount({account}));

      this.store
        .select((state) => state[accountsFeature].entity)
        .pipe(
          filter((entity) => entity.status.loaded),
          map((entity) => entity.entity),
          take(1),
        )
        .subscribe((candidate) => this.modal.close());
    }
  }

  onSignInAs(): void {
    this.accountService.signInAs(this.account.accountId.internalId);
  }

  onCancel(): void {
    this.modal.close();
  }
}
