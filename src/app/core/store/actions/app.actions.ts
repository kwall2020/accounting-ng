import { createAction, props } from '@ngrx/store';

export const login = createAction('[app] LOGIN');

export const resetPassword = createAction(
  '[app] RESET_PASSWORD',
  props<{ userName: string }>()
);

export const requestTransactions = createAction('[app] REQUEST_TRANSACTIONS');

export const receiveTransactions = createAction(
  '[app] RECEIVE_TRANSACTIONS',
  props<{ transactions: any[] }>()
);
