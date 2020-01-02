import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';

export interface State {
  userName: string;
  accessToken: string;
  refreshToken: string;
}

export const INITIAL_STATE: State = {
  userName: null,
  accessToken: null,
  refreshToken: null
};

export function reducer(_state: State | undefined, _action: Action) {
  return createReducer(
    INITIAL_STATE,

    on(AuthActions.init, AuthActions.receiveToken, (state, action) => ({
      ...state,
      accessToken: action.accessToken,
      refreshToken: action.refreshToken
    }))
  )(_state, _action);
}
