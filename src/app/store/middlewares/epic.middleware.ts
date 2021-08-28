import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';

import { AppAction, AppState } from '../models';
import { EpicDependencies } from '../models/epic-dependencies';

export const epicMiddleware: EpicMiddleware<
    AppAction,
    AppAction,
    AppState,
    EpicDependencies
> = createEpicMiddleware({
    dependencies: {},
});
