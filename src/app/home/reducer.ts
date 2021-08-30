import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    device: deviceParameters;
};

interface deviceParameters {
    axialRadius1: number;
    axialRadius2: number;
    axialRadius3: number;
    axialRadius4: number;
    axialRadius5: number;
    speed: number;
}

const initialState: HomeState = {
    device:{
        axialRadius1: 0,
        axialRadius2: 0,
        axialRadius3: 0,
        axialRadius4: 0,
        axialRadius5: 0,
        speed:0,
    }
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.ADD_SPEED:
            return { ...state, device: { ...state, speed: state.device.speed + 1 } };

        case HomeActionTypes.SUBTRACT_SPEED:
            return { ...state, device: { ...state, speed: state.device.speed - 1 } };

        case HomeActionTypes.RESET_SPEED:
            return { ...state, device: { ...state, speed: initialState.device.speed } };
        default:
            return state;
    }
}
