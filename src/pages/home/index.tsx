import { Fragment, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { Search } from "../../components/Search";
import { getUserRepos, getUserOrgs } from "./action";
import { Tabs } from "../../components/tabs";
import { EmptyData } from "../../components/emptyData";
import { Loader } from "../../components/loader";
import { UserInfo } from "./userinfo";
import { StarIcon } from "../../assets/icons/star";

interface IDividerLineProps {
  marginTop?: string;
}

const DividerLine = styled.div<IDividerLineProps>`
  margin: 0 10%;
  border: 1px solid #cad5e0;
  margin-top: ${(p) => p.marginTop};
`;

const DatasGridContainer = styled.div`
  display: grid;
  width: 70%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 300px);
`;

const DataContainer = styled.div`
  max-width: 300px;
  height: 160px;
  background: #f0f5f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
`;

const DatasContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 100vw;
  padding: 0;

  @media (min-width: 1368px) {
    padding: 5px 20%;
  }

  @media (min-width: 1000px) {
    padding: 5px 10%;
  }

  @media (min-width: 600px) {
    flex-wrap: nowrap;
    padding: 5px 10%;
  }
`;

const RepoStarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  align-self: flex-end;
`;

const StarCount = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #1c2a3a;
  margin-left: 4.39px;
`;

const RepoTitle = styled.h5`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  color: #1c2a3a;
  margin: 0;

  ${({ org }: any) =>
    org &&
    css`
      margin: auto;
    `}
` as any;

const RepoDescription = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;

  color: #445668;
  margin: 6px 0 0 0;
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
    dispatch(getUserRepos(username));
    dispatch(getUserOrgs(username));
  };

  const tabs = [
    { id: 1, name: "Repositories" },
    { id: 2, name: "Organizations" },
  ];

  const [currentTab, setCurrentTab] = useState<string>(tabs[0].name);

  const getEmptyView = () => {
    return currentTab === "Repositories"
      ? (userRepos.data === null || userRepos.data <= 0) &&
          !userRepos.loading && <EmptyData />
      : (userOrgs.data === null || userOrgs.data <= 0) && !userOrgs.loading && (
          <EmptyData />
        );
  };

  const loading = () => {
    return currentTab === "Repositories"
      ? userRepos.data <= 0 && userRepos.loading && <Loader />
      : userOrgs.data <= 0 && userOrgs.loading && <Loader />;
  };

  return (
    <Fragment>
      <Header />
      <Search onChange={handleChange} onSearch={handleSearch} />
      <DividerLine marginTop={"40px"} />
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <DatasContainer>
        {userRepos.data?.length > 0 && <UserInfo />}
        <DatasGridContainer>
          {currentTab === "Repositories"
            ? userRepos.data?.length > 0 &&
              userRepos.data?.map((item: any, index: number) => (
                <DataContainer key={index}>
                  <RepoStarContainer>
                    <StarIcon />
                    <StarCount>{item.stargazers_count}</StarCount>
                  </RepoStarContainer>

                  <div>
                    <RepoTitle>{item.name}</RepoTitle>
                    <RepoDescription>{item.description}</RepoDescription>
                  </div>
                </DataContainer>
              ))
            : userOrgs.data?.length > 0 &&
              userOrgs.data?.map((item: any, index: number) => (
                <DataContainer key={index}>
                  <RepoTitle org>{item.login}</RepoTitle>
                </DataContainer>
              ))}
        </DatasGridContainer>
      </DatasContainer>

      {getEmptyView()}

      {loading()}
    </Fragment>
  );
}
