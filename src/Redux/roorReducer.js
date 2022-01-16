import { combineReducers } from "redux";
import reducer from "./users/userReducer";


const rootReducer = combineReducers({
    user :  reducer
})

export default rootReducer