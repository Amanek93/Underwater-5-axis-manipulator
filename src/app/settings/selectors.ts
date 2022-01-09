import { AppState } from '@store/models';
import { createSelector } from 'reselect';
import { prop } from 'ramda';

import { SettingsState } from './reducer';

export const getSettingsState = (state: AppState): SettingsState => state.settings;

export const getLanguage = createSelector(getSettingsState, prop('language'));

export const getDisplayMode = createSelector(getSettingsState, prop('darkMode'));
