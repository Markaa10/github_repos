import { combineEpics } from "redux-observable";
import { getUserReposEpic } from "../pages/home/epic";

export const rootEpic = combineEpics(getUserReposEpic);
