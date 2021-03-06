import { AppState } from '@store/models';
import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { HomeState } from './reducer';

export const getHomeState = (state: AppState): HomeState => state.home;

export const getDevice = createSelector(getHomeState, prop('device'));
