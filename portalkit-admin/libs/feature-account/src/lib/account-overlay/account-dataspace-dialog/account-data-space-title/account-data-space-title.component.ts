import {Component, Input} from "@angular/core";
import {AccountDataSpace} from "../../../account-page/account-page-data/account.types";

@Component({
  selector: "pk-account-data-space-title",
  templateUrl: "./account-data-space-title.component.html",
  styleUrls: ["./account-data-space-title.component.scss"],
})
export class AccountDataSpaceTitleComponent {
  @Input() dataSpace!: AccountDataSpace;
  editTitle = false;

  onDeleteDataSpace(dataSpaceId: number) {
    console.log('onDeleteDataSpace, id=' + dataSpaceId);
  }
}
