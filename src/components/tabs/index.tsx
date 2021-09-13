import styled from "styled-components";

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
  padding-bottom: 4px;
  color: #185adb;
  border-bottom: 2px solid #185adb;
`;

export function Tabs() {
  return (
    <TabsContainer>
      <Tab>Repositories</Tab>
      <Tab>Organizations</Tab>
    </TabsContainer>
  );
}
