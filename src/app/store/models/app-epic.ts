import { Epic } from 'redux-observable';

import { AppAction } from './app-action';
import { AppState } from './app-state';
import { EpicDependencies } from './epic-dependencies';

export type AppEpic = Epic<AppAction, AppAction, AppState, EpicDependencies>;
