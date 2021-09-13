import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { Search } from "../../components/Search";
import { getUserRepos, getUserOrgs } from "./action";

interface IDividerLineProps {
  marginTop?: string;
}

const DividerLine = styled.div<IDividerLineProps>`
  margin: 0 10%;
  border: 1px solid #cad5e0;
  margin-top: ${(p) => p.marginTop};
`;

export function Home() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");

  const state = useSelector((state) => state) as any;

  const userRepos = state.repos;
  const userOrgs = state.orgs;

  console.log(state);

  const getUserRepositories = () => {
    dispatch(getUserRepos(username));
  };

  const getUserOraganizations = () => {
    dispatch(getUserOrgs(username));
  };

  return (
    <div>
      <Header />

      <Search />

      <DividerLine marginTop={"40px"} />
      <h1>Home</h1>

      <input
        type="text"
        placeholder="Add a githubUsername"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={getUserRepositories}>Get User Repo</button>
      <button onClick={getUserOraganizations}>Get User Oragnizations</button>

      <h3>User Repos</h3>
      {userRepos.loading && <h1>Loading Repos...</h1>}
      {userRepos.data.length > 0 ? (
        userRepos.data.map((item: any, index: number) => (
          <p key={index}>{item.name}</p>
        ))
      ) : (
        <h1>No user repos</h1>
      )}
      <h3>User Orgs</h3>
      {userOrgs.loading && <h1>Loading Orgs...</h1>}
      {userOrgs.data.length > 0 ? (
        userOrgs.data.map((item: any, index: number) => (
          <p key={index}>{item.login}</p>
        ))
      ) : (
        <h1>No user Orgs</h1>
      )}
    </div>
  );
}
