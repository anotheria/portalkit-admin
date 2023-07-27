import {createAction, props} from "@ngrx/store";
import {PaginatedContent} from "@portalkit-admin/core";
import {AccountsRequest} from "../account.types";

export const AccountActions = {
  loadAccounts: createAction('[Accounts] Load accounts', props<{request: AccountsRequest}>()),
  loadAccountsSuccess: createAction('[Accounts][Success] Load accounts', props<{ data: PaginatedContent }>()),
  loadAccountsError: createAction('[Accounts][Error] Load accounts', props<{ error: unknown }>()),

}
