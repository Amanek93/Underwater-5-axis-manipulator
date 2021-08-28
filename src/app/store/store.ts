import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';

import { AppStore } from './models';
import { actionToPlainObject } from './middlewares/action-purify.middleware';
import { epicMiddleware } from './middlewares/epic.middleware';
import { rootEpic } from './root-epic';
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();

const enhancer = __DEV__
    ? compose(applyMiddleware(actionToPlainObject, epicMiddleware, loggerMiddleware))
    : compose(applyMiddleware(actionToPlainObject, epicMiddleware));

export const store: AppStore = createStore(persistedReducer, {}, enhancer);

epicMiddleware.run(rootEpic);
