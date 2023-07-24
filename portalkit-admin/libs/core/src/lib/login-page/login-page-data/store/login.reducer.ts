import { createReducer, on } from "@ngrx/store";
import { LoginData } from "../login.types";
import * as LoginActions from "./login.action";

export const loginFeatureName = "login";

export type StateStatus = {
  loading: boolean;
  loaded: boolean;
  error: unknown;
};

export interface LoginState {
  status: StateStatus;
  data: LoginData;
}

const initialState: LoginState = {
  status: { loaded: false, loading: false, error: null },
  data: {
    token: null,
    login: null,
  },
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => {
    return {
      ...state,
      status: { loading: true, loaded: false, error: null },
    };
  }),
  on(LoginActions.loginSuccess, (state, action) => {
    return {
      ...state,
      status: { loading: false, loaded: true, error: null },
      data: action.data,
    };
  }),
  on(LoginActions.loginError, (state, action) => {
    return {
      ...state,
      status: { loading: false, loaded: false, error: action.error },
    };
  }),
  on(LoginActions.getUserByToken, (state, action) => {
    return {
      ...state,
      status: { loading: true, loaded: false, error: null },
    };
  }),
  on(LoginActions.getUserByTokenSuccess, (state, action) => {
    return {
      ...state,
      status: { loading: false, loaded: true, error: null },
      data: action.loginData,
    };
  }),
  on(LoginActions.logout, (state, action) => {
    return {
      status: { loading: false, loaded: false, error: null },
      data: {} as LoginData,
    };
  }),
);
