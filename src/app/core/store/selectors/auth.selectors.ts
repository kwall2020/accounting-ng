import { createSelector } from '@ngrx/store';

import { authFeatureSelector } from '../reducers';

const _userName = createSelector(
  authFeatureSelector,
  state => state && state.userName
);

const _accessToken = createSelector(
  authFeatureSelector,
  state => state && state.accessToken
);

const _refreshToken = createSelector(
  authFeatureSelector,
  state => state && state.refreshToken
);

export const userName = createSelector(_userName, __userName => __userName);
export const accessToken = createSelector(
  _accessToken,
  __accessToken => __accessToken
);
export const refreshToken = createSelector(
  _refreshToken,
  __refreshToken => __refreshToken
);
