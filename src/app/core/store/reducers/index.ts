import * as fromRouterStore from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../environments/environment';

import * as fromApp from './app.reducer';
import * as fromAuth from './auth.reducer';
import * as fromRouter from './router.reducer';

export interface CoreState {
  router: fromRouterStore.RouterReducerState<fromRouter.RouterState>;
  app: fromApp.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<CoreState> = {
  router: fromRouterStore.routerReducer,
  app: fromApp.reducer,
  auth: fromAuth.reducer
};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production
  ? []
  : [];

export const appFeatureSelector = createFeatureSelector<fromApp.State>('app');
export const authFeatureSelector = createFeatureSelector<fromAuth.State>(
  'auth'
);
