import styled from "styled-components";
// import colors from '../../colors';

export const PageContainer = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 90vw;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: black;
`