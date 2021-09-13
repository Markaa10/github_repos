import {
  GET_USER_ORGS_FAILURE,
  GET_USER_ORGS_LOADING,
  GET_USER_ORGS_SUCCESS,
  GET_USER_REPOS_FAILURE,
  GET_USER_REPOS_LOADING,
  GET_USER_REPOS_SUCCESS,
} from "./action";

const initialState = { loading: false, data: null, error: null };

export const reposReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_REPOS_LOADING:
      return { ...state, loading: true, error: null };

    case GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case GET_USER_REPOS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export const orgsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_ORGS_LOADING:
      return { ...state, loading: true, error: null };

    case GET_USER_ORGS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case GET_USER_ORGS_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
