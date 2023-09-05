import {Component, EventEmitter, Input, Output} from "@angular/core";
import {AccountDataSpace} from "../../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-title",
  templateUrl: "./account-data-space-title.component.html",
  styleUrls: ["./account-data-space-title.component.scss"],
})
export class AccountDataSpaceTitleComponent {
  @Input() dataSpace!: AccountDataSpace;
  @Output() deleteDataSpace = new EventEmitter<AccountDataSpace>();

  onDeleteDataSpace(dataSpaceType: AccountDataSpace) {
    this.deleteDataSpace.emit(dataSpaceType);
  }
}
