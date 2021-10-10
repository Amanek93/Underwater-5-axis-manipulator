import { HomeAction } from '@home';
import { SettingsAction } from '@settings';

export type AppAction = HomeAction | SettingsAction;
