import { Action } from '@store/models';

export enum HomeActionTypes {
    ADD_SPEED = '[HOME] Add+1',
    SUBTRACT_SPEED = '[HOME] Subtract-1',
    NEW_VALUE_SPEED = '[HOME] New speed value',
    RESET_SPEED = '[HOME] Reset speed',
    ADD_AXIS1 = '[HOME] AXIS1+1',
    SUBTRACT_AXIS1 = '[HOME] AXIS1-1',
    NEW_VALUE_AXIS1 = '[HOME] New axis1 value',
    RESET_AXIS1 = '[HOME] Reset AXIS1',
    ADD_AXIS2 = '[HOME] AXIS2+1',
    SUBTRACT_AXIS2 = '[HOME] AXIS2-1',
    NEW_VALUE_AXIS2 = '[HOME] New axis2 value',
    RESET_AXIS2 = '[HOME] Reset AXIS2',
    ADD_AXIS3 = '[HOME] AXIS3+1',
    SUBTRACT_AXIS3 = '[HOME] AXIS3-1',
    NEW_VALUE_AXIS3 = '[HOME] New axis3 value',
    RESET_AXIS3 = '[HOME] Reset AXIS3',
    ADD_AXIS4 = '[HOME] AXIS4+1',
    SUBTRACT_AXIS4 = '[HOME] AXIS4-1',
    NEW_VALUE_AXIS4 = '[HOME] New axis4 value',
    RESET_AXIS4 = '[HOME] Reset AXIS4',
    ADD_AXIS5 = '[HOME] AXIS5+1',
    SUBTRACT_AXIS5 = '[HOME] AXIS5-1',
    NEW_VALUE_AXIS5 = '[HOME] New axis5 value',
    RESET_AXIS5 = '[HOME] Reset AXIS5',
}

export class AddSpeed implements Action<string> {
    readonly type = HomeActionTypes.ADD_SPEED;
}

export class SubtractSpeed implements Action<string> {
    readonly type = HomeActionTypes.SUBTRACT_SPEED;
}

export class NewValueSpeed implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_SPEED;
    constructor(public payload: number) {}
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

export class NewValueAxis1 implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_AXIS1;
    constructor(public payload: number) {}
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

export class NewValueAxis2 implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_AXIS2;
    constructor(public payload: number) {}
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

export class NewValueAxis3 implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_AXIS3;
    constructor(public payload: number) {}
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

export class NewValueAxis4 implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_AXIS4;
    constructor(public payload: number) {}
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

export class NewValueAxis5 implements Action<number> {
    readonly type = HomeActionTypes.NEW_VALUE_AXIS5;
    constructor(public payload: number) {}
}


export class ResetAxis5 implements Action<string> {
    readonly type = HomeActionTypes.RESET_AXIS5;
}

export type HomeAction =
    | AddSpeed
    | SubtractSpeed
    | NewValueSpeed
    | ResetSpeed
    | AddAxis1
    | SubtractAxis1
    | NewValueAxis1
    | ResetAxis1
    | AddAxis2
    | SubtractAxis2
    | NewValueAxis2
    | ResetAxis2
    | AddAxis3
    | SubtractAxis3
    | NewValueAxis3
    | ResetAxis3
    | AddAxis4
    | SubtractAxis4
    | NewValueAxis4
    | ResetAxis4
    | AddAxis5
    | SubtractAxis5
    | NewValueAxis5
    | ResetAxis5;
