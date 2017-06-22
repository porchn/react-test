import {IMAGE_FAILURE,IMAGE_SUCCESS,IMAGE_REQUEST,SHOW_IMAGE} from '../../constants/actionTypes';

export default (state={status:'Load Images',result:[],image:[]},action)=>{
//export default (state={status:'Load Images',result:{}},action)=>{
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
        case SHOW_IMAGE:
            return{
                ...state,
                image:action.payload,
                status:'show image'
            }
        default:
            return state
    }
}