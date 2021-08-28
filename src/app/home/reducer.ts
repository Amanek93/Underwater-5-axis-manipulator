import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    speed: number;
    device: DeviceParameters;
}

interface DeviceParameters {
    value1: number;
    value2: number;
}

const initialState: HomeState = {
    speed: 0,
    device: {
        value1: 0,
        value2: 2,
    },
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.ADD_SPEED:
            return {
                ...state,
                device: { ...state, value1: state.device.value1 + 1, value2: state.device.value2 },
            };

        case HomeActionTypes.SUBTRACT_SPEED:
            return { ...state, speed: state.speed - 1 };

        case HomeActionTypes.RESET_SPEED:
            return { ...state, speed: initialState.speed };

        default:
            return state;
    }
}
