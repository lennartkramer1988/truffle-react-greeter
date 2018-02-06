// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const enhancer = compose(
  applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));