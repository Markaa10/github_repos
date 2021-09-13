import styled from "styled-components";
import { LoaderIcon } from "../../assets/icons/loader";

const LoaderContainer = styled.div`
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;

  animation-name: loader;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  transform-origin: 50% 50%;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export function Loader() {
  return (
    <LoaderContainer>
      <LoaderIcon />
    </LoaderContainer>
  );
}
