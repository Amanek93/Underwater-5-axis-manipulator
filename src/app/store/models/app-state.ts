import { HomeState } from '@home';
import { SettingsState } from '@settings';

export interface AppState {
    home: HomeState;
    settings: SettingsState;
}
