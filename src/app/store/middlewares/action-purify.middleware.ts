import { Middleware } from 'redux';

import { AppAction, AppState } from '../models';

export const actionToPlainObject: Middleware<AppState, AppAction> = () => next => (
    action: AppAction,
) => {
    return next(Object.assign({}, action));
};
