import { createStore, applyMiddleware } from 'redux';

import testData from '../test-data'
import rootReducer from '../reducers'

const middlewares = [];

const store = createStore(rootReducer, testData, applyMiddleware(...middlewares));

export default store