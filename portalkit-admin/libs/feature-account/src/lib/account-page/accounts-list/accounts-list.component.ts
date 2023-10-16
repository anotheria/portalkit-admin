import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { PaginatedContent } from "@portalkit-admin/core";
import { Account, AccountFilter, AccountStatus } from "../account-page-data/account.types";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { CachedAccountTypesService } from "../account-page-data/cached-account-types.service";
import { Observable } from "rxjs";
import {AccountService} from "../account-page-data/account.service";

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

  searchForm!: UntypedFormGroup;
  statusesList$!: Observable<Array<AccountStatus>>;

  constructor(private fb: UntypedFormBuilder, private cachedAccountService: CachedAccountTypesService,
              private accountService: AccountService) {
    this.statusesList$ = this.cachedAccountService.getAccountStatuses();
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchTerm: [null],
      registrationRange: [[]],
      includedStatuses: [[]],
      excludedStatuses: [[]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["accountList"] && this.searchForm) {
      this.pageSize = this.accountList.itemsOnPage;
      this.pageIndex = this.accountList.pageNumber;
      this.total = this.accountList.totalItems;
      this.getRange()?.patchValue(this.accountList.registrationRange);
      this.getIncludedStatuses()?.patchValue(this.accountList.includedStatuses);
      this.getExcludedStatuses()?.patchValue(this.accountList.excludedStatuses);
      this.loading = false;
    }
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    if (this.loading) return;
    const { pageSize, pageIndex, sort, filter } = params;

    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;

    let change: AccountFilter = {
      pageIndex: pageIndex,
      itemsOnPage: pageSize,
      ...this.getFilterFormValues(),
    }

    if(sortField && sortOrder) {
      change = {
        ...change,
        sort: {
          direction: sortOrder == 'ascend' ? 'ASC':'DESC',
          field: sortField
        }
      }
    }

    this.queryChange.emit(change);
    this.loading = true;
  }

  submitFilterForm(): void {
    this.queryChange.emit({
      pageIndex: 1,
      itemsOnPage: this.pageSize,
      ...this.getFilterFormValues(),
    });
  }

  getFilterFormValues() {
    return {
      searchTerm: this.getSearchTerm()?.value || "",
      registrationRange: this.getRange()?.value || [],
      includedStatuses: this.getIncludedStatuses()?.value || [],
      excludedStatuses: this.getExcludedStatuses()?.value || [],
    };
  }

  getSearchTerm() {
    return this.searchForm.get("searchTerm");
  }
  getRange() {
    return this.searchForm.get("registrationRange");
  }
  getIncludedStatuses() {
    return this.searchForm.get("includedStatuses");
  }
  getExcludedStatuses() {
    return this.searchForm.get("excludedStatuses");
  }

  onSignInAs(accountId: string) {
    this.accountService.signInAs(accountId);
  }


  getStatusShortName(status: string): string {
    switch (status) {
      case "VERIFIED":
        return "Ve";
      case "VACATIONING":
        return "Va";
      case "REVIEWED":
        return "Rev";
      case "MARKED_FOR_DELETION":
        return "D";
      case "REGISTERED":
      case "CONFIRMED":
      default:
        return status[0];
    }
  }
}
