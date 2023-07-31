import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import { PaginatedContent } from "@portalkit-admin/core";
import { Account, AccountFilter } from "../account-page-data/account.types";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: "pk-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.scss"],
})
export class AccountsListComponent implements OnChanges, OnInit {
  @Input() accountList!: PaginatedContent<Account>;
  @Output() queryChange = new EventEmitter<AccountFilter>();

  loading = true;
  pageSize!: number;
  pageIndex!: number;
  total!: number;

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    const searchTerm = this.validateForm.get('searchTerm')?.value || '';
    this.queryChange.emit({ pageNumber: 1, itemsOnPage: this.pageSize, searchTerm });
  }

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      searchTerm: [null],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["accountList"] && this.accountList.pageNumber) {
      this.pageSize = this.accountList.itemsOnPage;
      this.pageIndex = this.accountList.pageNumber;
      this.total = this.accountList.totalItems;
      this.loading = false;
    }
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    if(this.loading) return;
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.queryChange.emit({ pageNumber: pageIndex, itemsOnPage: pageSize, searchTerm: "" });
    this.loading = true;
  }

}
