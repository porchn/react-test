import {IMAGE_FAILURE,IMAGE_SUCCESS,IMAGE_REQUEST} from '../../constants/actionTypes';

export default (state={status:'Load Images',result:{}},action)=>{
    switch (action.type) {
        case IMAGE_REQUEST:
            return {
                ...state,
                status: 'loading'}
        case IMAGE_SUCCESS:
            return {
                ...state,
                result:action.payload.data,
                status:'loaded'
            }
        case IMAGE_FAILURE:
            return {
                ...state,
                status:'Network request failed'
            }
        default:
            return state
    }
}