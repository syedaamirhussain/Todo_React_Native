import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import todoReducer from "./toDoReducer";
import authReducer from './authReducer'


export default combineReducers({
    user:userReducer,
    todos:todoReducer,
    auth:authReducer
})