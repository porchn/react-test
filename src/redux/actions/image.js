import { CALL_API } from 'redux-api-middleware';
import {IMAGE_FAILURE,IMAGE_SUCCESS,IMAGE_REQUEST} from '../../constants/actionTypes';

export const Loadimage= ()=>({
    [CALL_API]: {
        endpoint: 'https://api.imgur.com/3/gallery/random/random/1',
        method: 'GET',
        types: [IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE]
    }
})