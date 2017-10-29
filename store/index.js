import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import testData from '../test-data'
import rootReducer from '../reducers'

const middlewares = [
    thunk,
];

const store = createStore(rootReducer, testData, applyMiddleware(...middlewares));

export default store