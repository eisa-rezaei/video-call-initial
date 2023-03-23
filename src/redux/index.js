import { combineReducers } from "redux";
import { reducer as usersReducer } from "./users/reducer";
import { reducer as msgReducer } from "./massages/reducer";

const reducers = combineReducers({
  users: usersReducer,
  massages: msgReducer,
});

export default reducers;
