import i18n from '@shared/language/i18n';
import { SettingsAction, SettingsActionTypes } from './actions';

export interface SettingsState {
    language: string;
}

const initialState: SettingsState = {
    language: 'PL',
};

export function reducer(
    state: SettingsState = initialState,
    action: SettingsAction,
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.CHANGE_LANGUAGE:
            i18n.setLocale(action.payload);
            return { ...state, language: action.payload };

        default:
            return state;
    }
}
