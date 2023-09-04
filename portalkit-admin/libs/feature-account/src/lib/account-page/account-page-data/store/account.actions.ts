import { createAction, props } from "@ngrx/store";
import { PaginatedContent } from "@portalkit-admin/core";
import {Account, AccountDataSpace, AccountFilter, DataSpaceAttribute} from "../account.types";

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
  loadDataSpacesSuccess: createAction("[Accounts][Success] Load data-spaces", props<{ data: Array<AccountDataSpace>, id: string }>()),
  loadDataSpacesError: createAction("[Accounts][Error] Load data-spaces", props<{ error: unknown }>()),

  updateDataSpaceAttribute: createAction("[Accounts] Update data-space attribute", props<{ds: AccountDataSpace, attr: DataSpaceAttribute}>()),
  updateDataSpaceAttributeSuccess: createAction("[Accounts][Success] Update data-space attribute"),
  updateDataSpaceAttributeError: createAction("[Accounts][Error] Update data-space attribute", props<{ error: unknown }>()),

  deleteDataSpaceAttribute: createAction("[Accounts] Delete data-space attribute", props<{ds: AccountDataSpace, attr: DataSpaceAttribute}>()),
  deleteDataSpaceAttributeSuccess: createAction("[Accounts][Success] Delete data-space attribute"),
  deleteDataSpaceAttributeError: createAction("[Accounts][Error] Delete data-space attribute", props<{ error: unknown }>()),
};
