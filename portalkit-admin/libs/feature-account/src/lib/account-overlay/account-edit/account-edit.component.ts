import {Component, Inject} from "@angular/core";
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {Account} from "../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-edit",
  templateUrl: "./account-edit.component.html",
  styleUrls: ["./account-edit.component.scss"],
})
export class AccountEditComponent {
  account: Account;

  constructor(@Inject(NZ_MODAL_DATA) public modalData: any, private modal: NzModalRef) {
    this.account = this.modalData['account'];
  }

  onSave(): void {
    console.log('Save clicked!');
  }

  onLoginAsUser(): void {
    console.log('Login as user clicked!');
  }

  onCancel(): void {
    this.modal.close();
  }
}
