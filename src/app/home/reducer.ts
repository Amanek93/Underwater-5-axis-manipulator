import { HomeAction, HomeActionTypes } from './actions';

export interface HomeState {
    speed: number;
}

const initialState: HomeState = {
    speed: 0,
};

export function reducer(state: HomeState = initialState, action: HomeAction): HomeState {
    switch (action.type) {
        case HomeActionTypes.ADD_SPEED:
            return { ...state, speed: state.speed + 1 };

        case HomeActionTypes.SUBTRACT_SPEED:
            return { ...state, speed: state.speed - 1 };

        case HomeActionTypes.RESET_SPEED:
            return { ...state, speed: initialState.speed };

        default:
            return state;
    }
}
