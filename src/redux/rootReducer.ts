import { combineReducers } from "redux";
import { orgsReducer, reposReducer } from "../pages/home/reducer";

export const rootReducer = combineReducers({
  repos: reposReducer,
  orgs: orgsReducer,
});
