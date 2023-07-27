import {Component, Input} from "@angular/core";
import {PaginatedContent} from "@portalkit-admin/core";
import {Account} from "../account-page-data/account.types";

@Component({
  selector: "pk-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"],
})
export class AccountsListComponent {
  @Input() accountList!: PaginatedContent<Account>;
}
