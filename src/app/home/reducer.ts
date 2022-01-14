import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    device: deviceParameters;
}

interface deviceParameters {
    axialRadius1: number;
    axialRadius2: number;
    axialRadius3: number;
    axialRadius4: number;
    axialRadius5: number;
    speed: number;
    device: DeviceParameters;
}

interface DeviceParameters {
    value1: number;
    value2: number;
}

const initialState: HomeState = {
    device: {
        axialRadius1: 0,
        axialRadius2: 0,
        axialRadius3: 0,
        axialRadius4: 0,
        axialRadius5: 0,
        speed: 0,
        device: {
            value1: 0,
            value2: 0,
        }
    },
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.ADD_SPEED:
            return {
                ...state,
                device: { ...state.device, speed: state.device.speed + 1 },
            };

        case HomeActionTypes.SUBTRACT_SPEED:
            return {
                ...state,
                device: { ...state.device, speed: state.device.speed - 1 },
            };

        case HomeActionTypes.NEW_VALUE_SPEED:
            return {
                ...state,
                device: { ...state.device, speed: action.payload },
            };

        case HomeActionTypes.RESET_SPEED:
            return {
                ...state,
                device: { ...state.device, speed: initialState.device.speed },
            };
        case HomeActionTypes.ADD_AXIS1:
            return {
                ...state,
                device: { ...state.device, axialRadius1: state.device.axialRadius1 + 1 },
            };

        case HomeActionTypes.SUBTRACT_AXIS1:
            return {
                ...state,
                device: { ...state.device, axialRadius1: state.device.axialRadius1 - 1 },
            };

        case HomeActionTypes.NEW_VALUE_AXIS1:
            return {
                ...state,
                device: { ...state.device, axialRadius1:  action.payload },
            };

        case HomeActionTypes.RESET_AXIS1:
            return {
                ...state,
                device: { ...state.device, axialRadius1: initialState.device.axialRadius1 },
            };

        case HomeActionTypes.ADD_AXIS2:
            return {
                ...state,
                device: { ...state.device, axialRadius2: state.device.axialRadius2 + 1 },
            };

        case HomeActionTypes.SUBTRACT_AXIS2:
            return {
                ...state,
                device: { ...state.device, axialRadius2: state.device.axialRadius2 - 1 },
            };

        case HomeActionTypes.NEW_VALUE_AXIS2:
            return {
                ...state,
                device: { ...state.device, axialRadius2: action.payload },
            };

        case HomeActionTypes.RESET_AXIS2:
            return {
                ...state,
                device: { ...state.device, axialRadius2: initialState.device.axialRadius2 },
            };
        case HomeActionTypes.ADD_AXIS3:
            return {
                ...state,
                device: { ...state.device, axialRadius3: state.device.axialRadius3 + 1 },
            };

        case HomeActionTypes.SUBTRACT_AXIS3:
            return {
                ...state,
                device: { ...state.device, axialRadius3: state.device.axialRadius3 - 1 },
            };

        case HomeActionTypes.NEW_VALUE_AXIS3:
            return {
                ...state,
                device: { ...state.device, axialRadius3: action.payload },
            };

        case HomeActionTypes.RESET_AXIS3:
            return {
                ...state,
                device: { ...state.device, axialRadius3: initialState.device.axialRadius3 },
            };
        case HomeActionTypes.ADD_AXIS4:
            return {
                ...state,
                device: { ...state.device, axialRadius4: state.device.axialRadius4 + 1 },
            };

        case HomeActionTypes.SUBTRACT_AXIS4:
            return {
                ...state,
                device: { ...state.device, axialRadius4: state.device.axialRadius4 - 1 },
            };

        case HomeActionTypes.NEW_VALUE_AXIS4:
            return {
                ...state,
                device: { ...state.device, axialRadius4: action.payload },
            };

        case HomeActionTypes.RESET_AXIS4:
            return {
                ...state,
                device: { ...state.device, axialRadius4: initialState.device.axialRadius4 },
            };
        case HomeActionTypes.ADD_AXIS5:
            return {
                ...state,
                device: { ...state.device, axialRadius5: state.device.axialRadius5 + 1 },
            };

        case HomeActionTypes.SUBTRACT_AXIS5:
            return {
                ...state,
                device: { ...state.device, axialRadius5: state.device.axialRadius5 - 1 },
            };

        case HomeActionTypes.NEW_VALUE_AXIS5:
            return {
                ...state,
                device: { ...state.device, axialRadius5: action.payload },
            };

        case HomeActionTypes.RESET_AXIS5:
            return {
                ...state,
                device: { ...state.device, axialRadius5: initialState.device.axialRadius5 },
            };
        default:
            return state;
    }
}
