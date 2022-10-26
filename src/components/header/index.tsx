import styled from "styled-components";
import { LogoIcon } from "../../assets/icons/Logo";

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
  color: #0d1829;
  font-size: 32px;
  line-height: 32px;

  margin-left: 16px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoIcon />
      <HeaderTitle>Github Finder</HeaderTitle>
    </HeaderContainer>
  );
}
