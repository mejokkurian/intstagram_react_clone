import { REGISETER_USER_REQUEST,REGISTER_USER_FAILED,REGISTER_USER_SUCESS} from "./userType"
const initialState = {
    loading = false,
    success = '',
    errors = ''
}

const reducer = (state = initialState,action ) =>{
    switch (action.type){
        case REGISETER_USER_REQUEST:
        return {
            ...state,
            loading: true
        }

        case REGISTER_USER_SUCESS:
            return {
                ...state,
                loading : false,
                success : action.payload,
                errors : ''
            }
        
        case REGISTER_USER_FAILED:
            return {
                ...state,
                loading : false,
                errors : action.payload,
                success : ''
                

            }
        
        default:
            return state;
    }
}

export default reducer