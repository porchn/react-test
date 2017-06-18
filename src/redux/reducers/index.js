import counter from './counter';
import images from './imageload';
import { combineReducers } from 'redux';

export default combineReducers({
    counter,
    images
});