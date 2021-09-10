import { combineReducers } from "redux";
import { reposReducer } from "../pages/home/reducer";

export const rootReducer = combineReducers({ repos: reposReducer });
