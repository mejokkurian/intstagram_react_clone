import axios from '../../axios.js'
import {REGISETER_USER_REQUEST,REGISTER_USER_FAILED,REGISTER_USER_SUCESS} from './userType'

export const registerUser = ()=>{
    return {
        type:REGISETER_USER_REQUEST
    }
}

export const registerUserSuccess = ()=>{
    return{
        type:REGISTER_USER_FAILED,
        payload : success
    }
}

export const registerUserFailed = (error)=>{
    return {
        type:REGISTER_USER_SUCESS,
        payload : error
    }
}


export const UserRegistration = (obj)=>{
    return async(dispatch)=>{
        try{
            dispatch(registerUser())
            let {data}=await axios.post("/");

            if(data.errors){
                dispatch(registerUserFailed(data.error))
            }else{
                dispatch(registerUserSuccess());
            }

        }catch(e){
            dispatch(registerUserFailed(e))
        }
    }
}