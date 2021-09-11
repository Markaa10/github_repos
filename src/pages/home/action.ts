export const GET_USER_REPOS_LOADING = "GET_USER_REPOS_LOADING";
export const GET_USER_REPOS_SUCCESS = "GET_USER_REPOS_SUCCESS";
export const GET_USER_REPOS_FAILURE = "GET_USER_REPOS_FAILURE";

export const GET_USER_ORGS_LOADING = "GET_USER_ORGS_LOADING";
export const GET_USER_ORGS_SUCCESS = "GET_USER_ORGS_SUCCESS";
export const GET_USER_ORGS_FAILURE = "GET_USER_ORGS_FAILURE";

export const getUserRepos = (payload: any) => {
  return { type: GET_USER_REPOS_LOADING, payload };
};

export const getUserOrgs = (payload: any) => {
  return { type: GET_USER_ORGS_LOADING, payload };
};
