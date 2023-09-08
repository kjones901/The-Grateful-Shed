import styled from "styled-components";
// import colors from "../colors";


export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
`


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 2rem;
  font-size: 1.5rem;

  @media (max-width: 992px) {
    max-width: 100vw;
  }
`;

export const TextAndImageContainer = styled.div`
  display: flex;
  width: 95vw;
  margin-top: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 550px) {
    margin-top: 80px;
  }
`

export const Title = styled.h1`
  font-family: 'Shrikhand';
  font-weight: lighter;
  font-size: 3rem;
  color: black;
  padding-top: 1rem;
`

export const Subheading = styled.h3`
  font-size: 2rem;
  
`