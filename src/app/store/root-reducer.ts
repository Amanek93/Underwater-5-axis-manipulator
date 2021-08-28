import { Reducer, combineReducers } from 'redux';

import { reducer as homeReducer } from '@home';

import { AppAction, AppState } from './models';

export const rootReducer: Reducer<AppState, AppAction> = combineReducers({
    home: homeReducer,
});
