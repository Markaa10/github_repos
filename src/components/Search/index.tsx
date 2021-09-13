import styled from "styled-components";
import { SearchIcon } from "../../assets/icons/search";

interface ISearchProps {
  onChange?: any;
  onSearch?: any;
}

const SearchContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  width: 100%;
`;

const SearchInputContainer = styled.div`
  width: 560px;
  height: 60px;
  background: #f8fafc;
  border: 1px solid #91a4b7;
  box-sizing: border-box;
  border-radius: 12px;

  display: inline-flex;
  align-items: center;
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 13.69px;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  width: 132px;
  height: 60px;
  background: #185adb;
  border-radius: 12px;
  border: none;
  margin-left: 16px;

  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #f8fafc;
`;

export function Search(props: ISearchProps) {
  const { onChange, onSearch } = props;

  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIcon />
        <SearchInput placeholder="Enter Github Username" onChange={onChange} />
      </SearchInputContainer>

      <SearchButton onClick={onSearch}>Search</SearchButton>
    </SearchContainer>
  );
}
