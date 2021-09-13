import styled from "styled-components";
import emptyImage from "../../assets/images/empty.png";

const EmptyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyDataTitle = styled.h6`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;

  margin-top: 24px;
  color: #0d1829;
  margin-bottom: 0;
`;

const EmptyDataDescription = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 28px;

  margin-top: 12px;
  color: #445668;
`;

export function EmptyData() {
  return (
    <EmptyDataContainer>
      <img src={emptyImage} alt="empty" width={"80px"} height={"80px"} />
      <EmptyDataTitle>No Data</EmptyDataTitle>
      <EmptyDataDescription>
        Search for a user to see the results here!
      </EmptyDataDescription>
    </EmptyDataContainer>
  );
}
