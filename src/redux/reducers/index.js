import counter from './counter';
import images from './imageload';
import { combineReducers } from 'redux';

import { i18nReducer } from 'react-redux-i18n';

export default combineReducers({
    counter,
    images,
    i18n: i18nReducer
});