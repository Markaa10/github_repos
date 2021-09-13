import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/header";
import { Search } from "../../components/Search";
import { getUserRepos, getUserOrgs } from "./action";
import { Tabs } from "../../components/tabs";
import { EmptyData } from "../../components/emptyData";
import { Loader } from "../../components/loader";
import { Error } from "../../components/error";

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
  width: 300px;
  height: 160px;
  background: #f0f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const UserInfoContainer = styled.div`
  width: 300px;
  height: 340px;
  background: #ffffff;
  border: 1px solid #cad5e0;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: auto;
  height: 80px;
  border-radius: 54px;
`;

const UserName = styled.h5`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  color: #1c2a3a;
  margin-top: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid #cad5e0;
  width: 236px;
`;

const UserDatasCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const UserDataCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserDataCount = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;

  color: #1c2a3a;
  margin: 0;
`;

const UserDataCountTitle = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: #445668;
  margin: 0;
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
        {userRepos.data?.length > 0 && (
          <UserInfoContainer>
            <UserImage src={userRepos.data[0]?.owner.avatar_url} />
            <UserName>{userRepos.data[0]?.owner.login}</UserName>

            <UserDatasCountContainer>
              <UserDataCountContainer>
                <UserDataCount>{userRepos.data.length}</UserDataCount>
                <UserDataCountTitle>repositories</UserDataCountTitle>
              </UserDataCountContainer>

              <UserDataCountContainer>
                <UserDataCount>{userOrgs.data?.length}</UserDataCount>
                <UserDataCountTitle>organizations</UserDataCountTitle>
              </UserDataCountContainer>
            </UserDatasCountContainer>
          </UserInfoContainer>
        )}
        <DatasGridContainer>
          {currentTab === "Repositories"
            ? userRepos.data?.length > 0 &&
              userRepos.data?.map((item: any, index: number) => (
                <DataContainer key={index}>{item.name}</DataContainer>
              ))
            : userOrgs.data?.length > 0 &&
              userOrgs.data?.map((item: any, index: number) => (
                <DataContainer key={index}>{item.login}</DataContainer>
              ))}
        </DatasGridContainer>
      </DatasContainer>

      {getEmptyView()}

      {loading()}
    </Fragment>
  );
}
