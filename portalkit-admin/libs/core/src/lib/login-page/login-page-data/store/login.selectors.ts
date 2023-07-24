import { LoginState, loginFeatureName } from './login.reducer';
import { LoginData } from '../login.types';

export function isUserDataLoadedOrLoading(state: { [loginFeatureName]: LoginState }): boolean {
  const status = state[loginFeatureName].status;
  return status.loaded || status.loading;
}
export function selectUserData(state: { [loginFeatureName]: LoginState }): LoginData {
  return state[loginFeatureName].data;
}
