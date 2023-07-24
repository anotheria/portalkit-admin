import { createReducer, on } from '@ngrx/store';
import { UserState, UserType } from '../login.types';
import * as LoginActions from '../store/login.action';

export const loginFeatureName = "login";

export type StateStatus = {
  loaded: boolean;
  loading: boolean;
}

export interface LoginState {
  status: StateStatus,
  user: UserState;
  error: any;
}

const initialState: LoginState = {
  status: {loaded: false, loading: false},
  user: {
    type: null,
    name: '',
    email: "",
    authToken: "",
    agencyId: "",
    accountStatuses:[],
    internalId:"",
    randomUID: null,
    registrationTimestamp: null,
    registrationTimestampAsString: '',

  },
  error: null
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => {
    return {
      ...state,
      status: {loading: true, loaded: false}
    }
  }),
  on(LoginActions.loginSuccess, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: true },
      user: action.data.userState
    };
  }),
  on(LoginActions.loginError, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: false},
      error: action.error
    }
  }),
  on(LoginActions.getUserByToken, (state, action) => {
    return {
      ...state,
      status: {loading: true, loaded: false}
    }
  }),
  on(LoginActions.getUserByTokenSuccess, (state, action) => {
    return {
      ...state,
      status: {loading: false, loaded: true},
      user: action.userData
    }
  }),
  on(LoginActions.logout, (state, action) => {
    return {
      status: {loading: false, loaded: false},
      user: {} as UserState,
      error: null
    }
  }),
);
