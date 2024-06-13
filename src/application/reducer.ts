import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../modules/slice";

const rootReducer = combineReducers({
	auth: authSlice,
});

export default rootReducer;
