// @flow
import type { Action } from '../../../core/redux/models';

const SET_GREETER = "SET_GREETER";
const UPDATE_GREETING = "GREETER_UPDATE_GREETING";

const initialState = {
    greeter: undefined,
    greeting: ''
};

export type GreeterStore = {
    greeter: any,
    greeting: string
};

export function greeter(state: GreeterStore = initialState, action: Action) {
    switch (action.type) {
        case SET_GREETER:
            return {...state, greeter: action.payload.greeter};
        case UPDATE_GREETING:
            return {...state, greeting: action.payload.greeting};
        default:
            return state
    }
}

export function updateGreeting(greeting: string) {
    return { type: UPDATE_GREETING, payload: { greeting } };
}

export function setGreeterContract(greeter: any) {
    return { type: SET_GREETER, payload: { greeter } };
}
