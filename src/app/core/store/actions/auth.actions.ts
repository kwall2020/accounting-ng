import { createAction, props } from '@ngrx/store';

export const init = createAction(
  '[auth] INIT',
  props<{ userName: string; accessToken: string; refreshToken: string }>()
);

export const requestToken = createAction(
  '[auth] REQUEST_TOKEN',
  props<{ userName: string; password: string }>()
);

export const receiveToken = createAction(
  '[auth] RECEIVE_TOKEN',
  props<{ userName: string; accessToken: string; refreshToken: string }>()
);

export const refreshToken = createAction('[auth] REFRESH_TOKEN');

export const resetPassword = createAction(
  '[auth] RESET_PASSWORD',
  props<{ userName: string; confirmationCode: string; newPassword: string }>()
);
