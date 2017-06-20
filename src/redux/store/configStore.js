//import { createStore , applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/index';
import { createLogger } from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import language  from '../../languages';

//let store = createStore(reducers);
const logger = createLogger({
        //predicate: (getState, action) => action.type !== 'INC'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
    thunk, 
    apiMiddleware,
    logger
];

let store = createStore(reducers,composeEnhancers(applyMiddleware(...middlewares)));

syncTranslationWithStore(store)
store.dispatch(loadTranslations(language));
store.dispatch(setLocale('th'));

export default store;