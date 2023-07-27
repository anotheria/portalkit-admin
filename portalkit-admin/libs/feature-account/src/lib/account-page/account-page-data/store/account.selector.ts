import {accountsFeature, AccountsState} from "./account.reducer";
import {Account} from "../account.types";
import {PaginatedContent} from "@portalkit-admin/core";

export function selectAccountList(state: { [accountsFeature]: AccountsState }): PaginatedContent<Account> {
  return state[accountsFeature].list.content;
}

export function selectAccountEntity(state: { [accountsFeature]: AccountsState }): Account | null {
  return state[accountsFeature].entity.entity;
}
