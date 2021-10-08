import { Store } from 'redux';

import { AppAction } from './app-action';
import { AppState } from './app-state';

export type AppStore = Store<AppState, AppAction>;
