import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {AccountStatus, AccountType} from "./account.types";
import {AccountService} from "./account.service";

@Injectable({ providedIn: 'root' })
export class CachedAccountTypesService {

  cachedAccountStatuses$!: Observable<Array<AccountStatus>> | null;
  cachedAccountTypes$!: Observable<Array<AccountType>> | null;

  constructor(private readonly accountService: AccountService) {
  }

  getAccountStatuses(): Observable<Array<AccountStatus>> {
    if (!this.cachedAccountStatuses$) {
      this.cachedAccountStatuses$ = this.accountService.loadAccountStatuses().pipe(
        shareReplay(1)
      );
    }
    return this.cachedAccountStatuses$;
  }

  getNonTechCompetences(): Observable<Array<AccountType>> {
    if (!this.cachedAccountTypes$) {
      this.cachedAccountTypes$ = this.accountService.loadAccountTypes().pipe(
        shareReplay(1)
      );
    }
    return this.cachedAccountTypes$;
  }
}
