import { Fragment, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { Search } from "../../components/Search";
import { getUserRepos, getUserOrgs } from "./action";
import { Tabs } from "../../components/tabs";
import { EmptyData } from "../../components/emptyData";
import { Loader } from "../../components/loader";

interface IDividerLineProps {
  marginTop?: string;
}

const DividerLine = styled.div<IDividerLineProps>`
  margin: 0 10%;
  border: 1px solid #cad5e0;
  margin-top: ${(p) => p.marginTop};
`;

const DatasContainer = styled.div`
  display: grid;
  max-width: 100vw;
  padding: 5px 20%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
`;

const DataContainer = styled.div`
  width: 300px;
  height: 160px;
  background: #f0f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Home() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");

  const state = useSelector((state) => state) as any;

  const userRepos = state.repos;
  const userOrgs = state.orgs;

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };
  const handleSearch = () => {
    if (currentTab === "Repositories") {
      dispatch(getUserRepos(username));
    } else {
      dispatch(getUserOrgs(username));
    }
  };

  const tabs = [
    { id: 1, name: "Repositories" },
    { id: 2, name: "Organizations" },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabs[0].name);

  return (
    <Fragment>
      <Header />
      <Search onChange={handleChange} onSearch={handleSearch} />
      <DividerLine marginTop={"40px"} />
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <DatasContainer>
        {currentTab === "Repositories"
          ? userRepos.data.length > 0 &&
            userRepos.data.map((item: any, index: number) => (
              <DataContainer key={index}>{item.name}</DataContainer>
            ))
          : userOrgs.data.length > 0 &&
            userOrgs.data.map((item: any, index: number) => (
              <p key={index}>{item.login}</p>
            ))}
      </DatasContainer>

      {currentTab === "Repositories"
        ? userRepos.data <= 0 && !userRepos.loading && <EmptyData />
        : userOrgs.data <= 0 && !userOrgs.loading && <EmptyData />}

      {currentTab === "Repositories"
        ? userRepos.data <= 0 && userRepos.loading && <Loader />
        : userOrgs.data <= 0 && userOrgs.loading && <Loader />}
    </Fragment>
  );
}
