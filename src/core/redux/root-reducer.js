// @flow
import { combineReducers } from 'redux';
import { web3 } from '../../core/redux/web3-reducer';
import { greeter } from '../../app/Greeter/redux/greeter-reducer';

import type { Web3Store } from '../../core/redux/web3-reducer';
import type { GreeterStore } from '../../app/Greeter/redux/greeter-reducer';

export type Store = {
  web3: Web3Store,
  greeter: GreeterStore
};

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    web3,
    greeter
});

export default rootReducer;
