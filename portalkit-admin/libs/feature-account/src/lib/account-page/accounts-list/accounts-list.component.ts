import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {PaginatedContent} from "@portalkit-admin/core";
import {Account} from "../account-page-data/account.types";
import {NzTableQueryParams} from "ng-zorro-antd/table";

@Component({
  selector: "pk-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"],
})
export class AccountsListComponent implements OnChanges {
  @Input() accountList!: PaginatedContent<Account>;

  loading = true;
  pageSize = 10;
  pageIndex = 1;
  total = 1;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['accountList']) {
      this.loading=false;
      this.pageSize = this.accountList.itemsOnPage;
      this.pageIndex = this.accountList.pageNumber;
      this.total = this.accountList.totalItems;
    }
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    //this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }
}
