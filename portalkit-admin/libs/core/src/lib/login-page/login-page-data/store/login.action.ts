import { createAction, props } from "@ngrx/store";
import {LoginData, LoginRequest} from '../login.types';

export const login = createAction("[Login] Login", props<{loginRequest: LoginRequest}>());
export const loginSuccess = createAction("[Login][Success] Login", props<{ data: LoginData }>());
export const loginError = createAction("[Login][Error] Login", props<{ error: unknown }>());

export const getUserByToken = createAction("[Login] Get user by token", props<{ token: string }>());
export const getUserByTokenSuccess = createAction("[Login][Success] Get user by token", props<{ loginData: LoginData }>());

export const logout = createAction("[Login] Logout");
export const logoutSuccess = createAction("[Login][Success] Logout");
export const logoutError = createAction("[Login][Error] Logout", props<{ error: any }>());
