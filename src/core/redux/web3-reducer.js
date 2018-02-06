// @flow
import type { Action } from './models';

const SET_WEB3 = "SET_WEB3";

const initialState = {
    web3: undefined
};

export type Web3Store = {
    web3: any
};

export function web3(state: Web3Store = initialState, action: Action) {
    switch (action.type) {
        case SET_WEB3:
            return {...state, web3: action.payload.web3};
        default:
            return state
    }
}

export function setWeb3(web3: any) {
    return { type: SET_WEB3, payload: { web3 } };
}
