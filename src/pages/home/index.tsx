import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "./action";

export function Home() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");

  const state = useSelector((state) => state) as any;

  const userRepos = state.repos;

  const getUserRepositories = () => {
    dispatch(getUserRepos(username));
  };

  const getUserOraganizations = () => {
    dispatch(getUserRepos(username));
  };

  return (
    <div>
      <h1>Home</h1>

      <input
        type="text"
        placeholder="Add a githubUsername"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={getUserRepositories}>Get User Repo</button>
      <button onClick={getUserOraganizations}>Get User Oragnizations</button>

      {userRepos.loading && <h1>Loading...</h1>}
      {userRepos.data.length > 0 ? (
        userRepos.data.map((item: any, index: number) => (
          <p key={index}>{item.name}</p>
        ))
      ) : (
        <h1>Please input a username</h1>
      )}
    </div>
  );
}
