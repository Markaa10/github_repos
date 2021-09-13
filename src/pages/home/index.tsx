import { Fragment, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { Search } from "../../components/Search";
import { getUserRepos, getUserOrgs } from "./action";
import { Tabs } from "../../components/tabs";
import { EmptyData } from "../../components/emptyData";

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

  const handleChange = (e: any) => {};
  const handleSearch = () => {
    console.log("search");
  };

  return (
    <Fragment>
      <Header />
      <Search onChange={handleChange} onSearch={handleSearch} />
      <DividerLine marginTop={"40px"} />
      <Tabs />

      {userRepos.data <= 0 && <EmptyData />}
    </Fragment>
  );
}
