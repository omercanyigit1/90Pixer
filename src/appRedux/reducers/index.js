import {combineReducers} from "redux";
import listReducer from "./list/list";

export default combineReducers({
    list: listReducer
});
