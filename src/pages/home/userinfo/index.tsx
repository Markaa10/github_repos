import { useSelector } from "react-redux";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  min-height: 340px;
  background: #ffffff;
  border: 1px solid #cad5e0;
  box-sizing: border-box;
  border-radius: 8px;
  // margin-right: 20px;
  // margin-bottom: 20px;
  padding: 0.5rem 2rem;

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

export function UserInfo() {
  const state = useSelector((state) => state) as any;

  const userRepos = state.repos;
  const userOrgs = state.orgs;

  return (
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
  );
}
