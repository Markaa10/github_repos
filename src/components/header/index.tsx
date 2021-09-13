import styled from "styled-components";

import { LogoIcon } from "../../assets/icons/logo";

const HeaderContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const HeaderTitle = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #0d1829;

  margin-left: 16px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoIcon />
      <HeaderTitle>Github Finder</HeaderTitle>
    </HeaderContainer>
  );
}
