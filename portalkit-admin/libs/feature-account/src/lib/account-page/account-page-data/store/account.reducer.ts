import {Account, AccountDataSpace} from "../account.types";
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

export type AccountsDataSpaceState  = {
  status: StatusState,
  data: Array<AccountDataSpace> | null
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

export const AccountsDataSpaceReducer = createReducer<AccountsDataSpaceState>(
  { status: initialStatusState, data: null },
  on(AccountActions.loadDataSpaces, (state) => {
    return {
      ...state,
      status: {loading: true, loaded: false, error: null}
    }
  }),
  on(AccountActions.loadDataSpacesSuccess, (state, {data}) => {
    return {
      ...state,
      status: {loading: false, loaded: true, error: null },
      data
    };
  }),
  on(AccountActions.loadDataSpacesError, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: false, error: action.error},
    }
  }),
);

export interface AccountsState {
  list: AccountsListState,
  entity: AccountsEntityState,
  dataSpace: AccountsDataSpaceState,
}

export const AccountsReducer = combineReducers<AccountsState>({
  list: AccountsListReducer,
  entity: AccountsEntityReducer,
  dataSpace: AccountsDataSpaceReducer,
});
