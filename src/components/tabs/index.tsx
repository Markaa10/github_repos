import { useState } from "react";
import styled, { css } from "styled-components";

interface ITabProps {
  tabs: Array<object>;
  currentTab: string;
  setCurrentTab: any;
}

const TabsContainer = styled.div`
  width: 100%;
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
  const { tabs, currentTab, setCurrentTab } = props;

  return (
    <TabsContainer>
      {tabs.map((item: any, index: number) =>
        currentTab === item.name ? (
          <Tab key={index} active onClick={() => setCurrentTab(item.name)}>
            {item.name}
          </Tab>
        ) : (
          <Tab key={index} onClick={() => setCurrentTab(item.name)}>
            {item.name}
          </Tab>
        )
      )}
    </TabsContainer>
  );
}
