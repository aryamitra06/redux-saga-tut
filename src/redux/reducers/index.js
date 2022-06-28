import { combineReducers } from "redux";
import users from "./users";
import post from "./post";
const rootReducer = combineReducers({ users, post });

export default rootReducer;