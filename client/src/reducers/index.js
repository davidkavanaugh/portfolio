import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import errorReducer from "./error.reducer";
import contactReducer from "./contact.reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  contact: contactReducer
});