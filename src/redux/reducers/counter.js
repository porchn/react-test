export default (state={num:0},action)=>{
    switch (action.type) {
        case 'INC':
            return{
                num:state.num + action.payload
            }
        case 'DEC':
            return{
                num:state.num - action.payload
            }
        default:
            return state
    }
}