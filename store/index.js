import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import testData from '../test-data'
import rootReducer from '../reducers'

const LOGGER_ENABLED = true;

const middlewares = [
    thunk,
];

LOGGER_ENABLED && middlewares.push(logger);


const store = createStore(rootReducer, testData, applyMiddleware(...middlewares));

export default store