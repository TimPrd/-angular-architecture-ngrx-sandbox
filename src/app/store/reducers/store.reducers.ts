import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { userReducers } from './user.reducers';

export const storeReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
};