import {Account} from "../account.types";
import { combineReducers, createReducer, on } from '@ngrx/store';
import {AccountActions} from "./account.actions";
import {initialPaginatedContent, initialStatusState, PaginatedContent, StatusState} from "@portalkit-admin/core";

export const accountsFeature = "accounts";

export type AccountsListState  = {
  status: StatusState,
  content: PaginatedContent<Account>
}

export type AccountsEntityState  = {
  status: StatusState,
  entity: Account | null
}

export const AccountsListReducer = createReducer<AccountsListState>(
  {status: initialStatusState, content: initialPaginatedContent},
  on(AccountActions.loadAccounts, (state) => {
    return {
      ...state,
      status: {loading: true, loaded: false, error: null}
    }
  }),
  on(AccountActions.loadAccountsSuccess, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: true, error: null },
      content: action.data
    };
  }),
  on(AccountActions.loadAccountsError, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: false, error: action.error},
    }
  }),
);

export const AccountsEntityReducer = createReducer<AccountsEntityState>(
  { status: initialStatusState, entity: null },
  on(AccountActions.loadAccount, (state) => {
    return {
      ...state,
      status: {loading: true, loaded: false, error: null}
    }
  }),
  on(AccountActions.loadAccountSuccess, (state, {entity}) => {
    return {
      ...state,
      status: {loading: false, loaded: true, error: null },
      entity: entity
    };
  }),
  on(AccountActions.loadAccountError, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: false, error: action.error},
    }
  }),
  );

export interface AccountsState {
  list: AccountsListState,
  entity: AccountsEntityState,
}

export const MissionsReducer = combineReducers<AccountsState>({
  list: AccountsListReducer,
  entity: AccountsEntityReducer,
});
