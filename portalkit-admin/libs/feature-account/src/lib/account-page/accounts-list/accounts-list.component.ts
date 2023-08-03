import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import { PaginatedContent } from "@portalkit-admin/core";
import {Account, AccountFilter, AccountStatus} from "../account-page-data/account.types";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import {UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import {CachedAccountTypesService} from "../account-page-data/cached-account-types.service";
import {Observable} from "rxjs";

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

  constructor(private fb: UntypedFormBuilder,
              private cachedAccountService: CachedAccountTypesService) {
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
    if (changes["accountList"]) {
      this.pageSize = this.accountList.itemsOnPage;
      this.pageIndex = this.accountList.pageNumber;
      this.total = this.accountList.totalItems;
      this.searchForm.get('registrationRange')?.patchValue(this.accountList.registrationRange);
      this.searchForm.get('includedStatuses')?.patchValue(this.accountList.includedStatuses);
      this.searchForm.get('excludedStatuses')?.patchValue(this.accountList.excludedStatuses);
      this.loading = false;
    }
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    if(this.loading) return;
    const { pageSize, pageIndex, sort, filter } = params;

    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;

    this.queryChange.emit({
      pageIndex: pageIndex,
      itemsOnPage: pageSize,
      searchTerm: this.getCurrentSearchTerm(),
      registrationRange: this.getCurrentRange(),
      includedStatuses: this.getIncludedStatuses(),
      excludedStatuses: this.getExcludedStatuses()
    });
    this.loading = true;
  }

  submitFilterForm(): void {
    this.queryChange.emit({
      pageIndex: 1,
      itemsOnPage: this.pageSize,
      searchTerm: this.getCurrentSearchTerm(),
      registrationRange: this.getCurrentRange(),
      includedStatuses: this.getIncludedStatuses(),
      excludedStatuses: this.getExcludedStatuses()
    });
  }

  getCurrentSearchTerm(): string {
    return this.searchForm.get('searchTerm')?.value || '';
  }
  getCurrentRange(): [] {
    return this.searchForm.get('registrationRange')?.value || [];
  }
  getIncludedStatuses(): Array<string> {
    return this.searchForm.get('includedStatuses')?.value || [];
  }
  getExcludedStatuses(): Array<string> {
    return this.searchForm.get('excludedStatuses')?.value || [];
  }

}
