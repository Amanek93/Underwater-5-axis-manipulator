import { Action } from '@store/models';

export enum HomeActionTypes {
    ADD_SPEED = '[HOME] Add+1',
    SUBTRACT_SPEED = '[HOME] Subtract-1',
    RESET_SPEED = '[HOME] Reset speed',
    ADD_AXIS1 = '[HOME] AXIS1+1',
    SUBTRACT_AXIS1 = '[HOME] AXIS1-1',
    RESET_AXIS1 = '[HOME] Reset AXIS1',
    ADD_AXIS2 = '[HOME] AXIS2+1',
    SUBTRACT_AXIS2 = '[HOME] AXIS2-1',
    RESET_AXIS2 = '[HOME] Reset AXIS2',
    ADD_AXIS3 = '[HOME] AXIS3+1',
    SUBTRACT_AXIS3 = '[HOME] AXIS3-1',
    RESET_AXIS3 = '[HOME] Reset AXIS3',
    ADD_AXIS4 = '[HOME] AXIS4+1',
    SUBTRACT_AXIS4 = '[HOME] AXIS4-1',
    RESET_AXIS4 = '[HOME] Reset AXIS4',
    ADD_AXIS5 = '[HOME] AXIS5+1',
    SUBTRACT_AXIS5 = '[HOME] AXIS5-1',
    RESET_AXIS5 = '[HOME] Reset AXIS5',
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

export class AddAxis1 implements Action<string> {
    readonly type = HomeActionTypes.ADD_AXIS1;
}

export class SubtractAxis1 implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_AXIS1;
}

export class ResetAxis1 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS1;
}

export class AddAxis2 implements Action<string> {
    readonly type = HomeActionTypes.ADD_AXIS2;
}

export class SubtractAxis2 implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_AXIS2;
}

export class ResetAxis2 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS2;
}

export class AddAxis3 implements Action<string> {
    readonly type = HomeActionTypes.ADD_AXIS3;
}

export class SubtractAxis3 implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_AXIS3;
}

export class ResetAxis3 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS3;
}

export class AddAxis4 implements Action<string> {
    readonly type = HomeActionTypes.ADD_AXIS4;
}

export class SubtractAxis4 implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_AXIS4;
}

export class ResetAxis4 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS4;
}

export class AddAxis5 implements Action<string> {
    readonly type = HomeActionTypes.ADD_AXIS5;
}

export class SubtractAxis5 implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_AXIS5;
}

export class ResetAxis5 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS5;
}

export type HomeAction =
    | AddSpeed
    | SubtractSpeed
    | ResetSpeed
    | AddAxis1
    | SubtractAxis1
    | ResetAxis1
    | AddAxis2
    | SubtractAxis2
    | ResetAxis2
    | AddAxis3
    | SubtractAxis3
    | ResetAxis3
    | AddAxis4
    | SubtractAxis4
    | ResetAxis4
    | AddAxis5
    | SubtractAxis5
    | ResetAxis5;
