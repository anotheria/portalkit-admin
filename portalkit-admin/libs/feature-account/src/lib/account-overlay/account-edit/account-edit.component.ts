import {Component, Inject} from "@angular/core";
import {NZ_MODAL_DATA} from "ng-zorro-antd/modal";
import {Account} from "../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-edit",
  templateUrl: "./account-edit.component.html",
  styleUrls: ["./account-edit.component.scss"],
})
export class AccountEditComponent {
  isVisible = true;
  account: Account;

  constructor(@Inject(NZ_MODAL_DATA) public modalData: any) {
    this.account = this.modalData['account'];
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
