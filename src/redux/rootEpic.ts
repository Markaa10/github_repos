import { combineEpics } from "redux-observable";
import { getUserOrgsEpic, getUserReposEpic } from "../pages/home/epic";

export const rootEpic = combineEpics(getUserReposEpic, getUserOrgsEpic);
