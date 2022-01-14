import { Action } from '@store/models';

export enum SettingsActionTypes {
    CHANGE_LANGUAGE = '[SETTINGS] Change app language',
    CHANGE_DISPLAY_MODE = '[SETTINGS] Change app display mode',
    CHANGE_SOUND = '[SETTINGS] Change app sound settings',
}

export class ChangeLanguage implements Action<string> {
    readonly type = SettingsActionTypes.CHANGE_LANGUAGE;
    constructor(public payload: string) {}
}

export class ChangeDisplayMode implements Action<boolean> {
    readonly type = SettingsActionTypes.CHANGE_DISPLAY_MODE;
}

export class ChangeSound implements Action<boolean> {
    readonly type = SettingsActionTypes.CHANGE_SOUND;
}

export type SettingsAction = ChangeLanguage | ChangeDisplayMode | ChangeSound;
