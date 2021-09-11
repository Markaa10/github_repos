import { ofType } from "redux-observable";
import { flatMap, map } from "rxjs";
import { Api } from "../../constants/api";
import {
  GET_USER_REPOS_FAILURE,
  GET_USER_REPOS_LOADING,
  GET_USER_REPOS_SUCCESS,
  GET_USER_ORGS_LOADING,
  GET_USER_ORGS_SUCCESS,
  GET_USER_ORGS_FAILURE,
} from "./action";

const api = new Api();

export const getUserReposEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_USER_REPOS_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.getUserRepos(action.payload);
        return { payload: response };
      } catch (e: any) {
        return { payload: false, error: e.response };
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: GET_USER_REPOS_SUCCESS, payload: action.payload };
      } else {
        return { type: GET_USER_REPOS_FAILURE };
      }
    })
  );

export const getUserOrgsEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_USER_ORGS_LOADING),
    flatMap(async (action: any) => {
      try {
        const response = await api.getUserOrgs(action.payload);
        return { payload: response };
      } catch (e: any) {
        return { payload: false, error: e.response };
      }
    }),
    map((action: any) => {
      if (action.payload) {
        return { type: GET_USER_ORGS_SUCCESS, payload: action.payload };
      } else {
        return { type: GET_USER_ORGS_FAILURE };
      }
    })
  );
