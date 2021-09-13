import styled from "styled-components";

const SearchContainer = styled.div`
  dispaly: inline-flex;
  align-items: center;
`;

const SearchInputContainer = styled.div`
  width: 560px;
  height: 60px;
  background: #f8fafc;
  border: 1px solid #91a4b7;
  box-sizing: border-box;
  border-radius: 12px;
`;

const SearchInput = styled.input`
  width: 99%;
  height: 99%;
  border: none;
  box-sizing: border-box;
  border-radius: 12px;
  outline: none;
`;

const SearchButton = styled.button`
  height: 60px;
  background: #185adb;
  border-radius: 12px;
  border: none;

  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #f8fafc;
`;

export function Search() {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>

      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
}
