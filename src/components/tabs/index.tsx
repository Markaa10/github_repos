import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { getUserOrgs, getUserRepos } from "../../pages/home/action";

interface ITabProps {
  tabs: Array<object>;
  currentTab: string;
  setCurrentTab: any;
  username: string;
}

const TabsContainer = styled.div`
  width: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.h5`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;

  cursor: pointer;
  margin-right: 100px;
  color: color: #91A4B7;
  
  ${({ active }: any) =>
    active &&
    css`
      color: #185adb;
      padding-bottom: 4px;
      border-bottom: 2px solid #185adb;
    `}
` as any;

export function Tabs(props: ITabProps) {
  const { tabs, currentTab, setCurrentTab, username } = props;

  const dispatch = useDispatch();
  const state = useSelector((state) => state) as any;

  const handleOnClick = (item: any) => {
    if (state.repos.data !== null || state.orgs.data !== null) {
      dispatch(getUserRepos(username));
      dispatch(getUserOrgs(username));
    }

    setCurrentTab(item.name);
  };

  return (
    <TabsContainer>
      {tabs.map((item: any, index: number) =>
        currentTab === item.name ? (
          <Tab key={index} active onClick={() => handleOnClick(item)}>
            {item.name}
          </Tab>
        ) : (
          <Tab key={index} onClick={() => handleOnClick(item)}>
            {item.name}
          </Tab>
        )
      )}
    </TabsContainer>
  );
}
