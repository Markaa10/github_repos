import styled from "styled-components";

interface IErrorProps {
  message: string;
}

const ErrorContainer = styled.div`
  width: auto;
  position: absolute;
  top: 1em;
  right: 1em;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px 20px;
`;

const ErrorTitle = styled.h4`
  line-height: 0;
  color: red;
`;

const ErrorMessage = styled.p`
  margin-top: 0;
`;

export function Error(props: IErrorProps) {
  const { message } = props;

  return (
    <ErrorContainer>
      <ErrorTitle>X Error</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
}
