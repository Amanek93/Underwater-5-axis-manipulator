import { Action } from '@store/models';

export enum SettingsActionTypes {
    CHANGE_LANGUAGE = '[SETTINGS] Change app language',
}

export class ChangeLanguage implements Action<string> {
    readonly type = SettingsActionTypes.CHANGE_LANGUAGE;
    constructor(public payload: string) {}
}

export type SettingsAction = ChangeLanguage;
