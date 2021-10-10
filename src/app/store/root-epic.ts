import { combineEpics } from 'redux-observable';
import { homeEpic } from '@home';
import { settingsEpic } from '@settings';

export const rootEpic = combineEpics(homeEpic, settingsEpic);
