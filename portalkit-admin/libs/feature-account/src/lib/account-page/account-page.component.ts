import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PaginatedContent} from "@portalkit-admin/core";
import {Account, AccountFilter} from "./account-page-data/account.types";
import {Store} from "@ngrx/store";
import {accountsFeature, AccountsState} from "./account-page-data/store/account.reducer";
import {selectAccountList} from "./account-page-data/store/account.selector";
import {AccountActions} from "./account-page-data/store/account.actions";

@Component({
  selector: 'pk-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  accountList$: Observable<PaginatedContent<Account>>;

  constructor(private readonly store: Store<{ [accountsFeature]: AccountsState }>,) {
    this.accountList$ = this.store.select(selectAccountList)
  }

  ngOnInit() {
    this.fetchAccounts({searchTerm:'', itemsOnPage: 20, pageNumber: 1})
  }

  onQueryChange(filter: AccountFilter) {
    this.fetchAccounts(filter);
  }

  fetchAccounts(filter: AccountFilter) {
    this.store.dispatch(AccountActions.loadAccounts({filter}));
  }

}
