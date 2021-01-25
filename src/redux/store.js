import { createStore, applyMiddleware } from 'redux';
// middleware is a function that catches all the actions being fired and does something with it before sending it out to root-reducer, in this case we are using redux logger.

import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares)) 


export default store