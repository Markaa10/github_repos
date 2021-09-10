import axios from "axios";
import { get } from "lodash";

axios.defaults.baseURL = "https://api.github.com/";

export class Api {
  async getUserRepos(payload: any) {
    try {
      const res = await axios.get(`/users/${payload}/repos`);
      console.log("Get User repos response: ", res);

      const data = get(res, "data");
      return data;
    } catch (e) {
      console.log("Get user repos Error: ", e);
      throw e;
    }
  }
}
