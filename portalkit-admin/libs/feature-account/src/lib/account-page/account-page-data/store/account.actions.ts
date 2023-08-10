import { createAction, props } from "@ngrx/store";
import { PaginatedContent } from "@portalkit-admin/core";
import {Account, AccountDataSpace, AccountFilter} from "../account.types";

export const AccountActions = {
  loadAccounts: createAction("[Accounts] Load accounts", props<{ filter: AccountFilter }>()),
  loadAccountsSuccess: createAction("[Accounts][Success] Load accounts", props<{ data: PaginatedContent<Account> }>()),
  loadAccountsError: createAction("[Accounts][Error] Load accounts", props<{ error: unknown }>()),

  loadAccount: createAction("[Accounts] Load account", props<{ id: string }>()),
  loadAccountSuccess: createAction("[Accounts][Success] Load account", props<{ entity: Account }>()),
  loadAccountError: createAction("[Accounts][Error] Load account", props<{ error: unknown }>()),

  updateAccount: createAction("[Accounts] Update account", props<{ account: Partial<Account> }>()),
  updateAccountSuccess: createAction("[Accounts][Success] Update account", props<{ entity: Account }>()),
  updateAccountError: createAction("[Accounts][Error] Update account", props<{ error: unknown }>()),

  loadDataSpaces: createAction("[Accounts] Load data-spaces", props<{ id: string }>()),
  loadDataSpacesSuccess: createAction("[Accounts][Success] Load data-spaces", props<{ data: Array<AccountDataSpace> }>()),
  loadDataSpacesError: createAction("[Accounts][Error] Load data-spaces", props<{ error: unknown }>()),
};
