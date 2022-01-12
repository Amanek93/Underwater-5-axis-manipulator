import i18n from '@shared/language/i18n';
import { SettingsAction, SettingsActionTypes } from './actions';

export interface SettingsState {
    language: string;
    darkMode: boolean;
    sound: boolean;
}

const initialState: SettingsState = {
    language: 'PL',
    darkMode: true,
    sound: true,
};

export function reducer(
    state: SettingsState = initialState,
    action: SettingsAction,
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.CHANGE_LANGUAGE:
            i18n.setLocale(action.payload);
            return { ...state, language: action.payload };

        case SettingsActionTypes.CHANGE_DISPLAY_MODE:
            return { ...state, darkMode: !state.darkMode };

        case SettingsActionTypes.CHANGE_SOUND:
            return { ...state, sound: !state.sound };

        default:
            return state;
    }
}
