import { combineReducers } from "redux";
import authReducer from "./authReducer";

// Import and rename named import
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    auth: authReducer,
    form: formReducer,
});
