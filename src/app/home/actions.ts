import { Action } from '@store/models';

export enum HomeActionTypes {
    ADD_SPEED = '[HOME] Add+1',
    SUBTRACT_SPEED = '[HOME] Subtract-1',
    RESET_SPEED = '[HOME] Reset speed',
}

export class AddSpeed implements Action<string> {
    readonly type = HomeActionTypes.ADD_SPEED;
}

export class SubtractSpeed implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_SPEED;
}

export class ResetSpeed implements Action<string> {
    readonly type = HomeActionTypes.RESET_SPEED;
}

export type HomeAction = AddSpeed | SubtractSpeed | ResetSpeed;
