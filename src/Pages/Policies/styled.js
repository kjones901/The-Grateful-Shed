import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 6rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: -1;
`;

export const PolicyContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  text-align: left;
  width: 90vw;
  min-height: 70vh;

  @media (max-width: 992px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const PolicyTitle = styled.h1`
  font-family: "Shrikhand";
  font-weight: lighter;
  font-size: 3rem;
  padding-top: 2rem;

  @media (max-width: 992px) {
    font-size: 3rem;
  }
`;

export const PolicySubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  padding-top: 1rem;
`;

export const PolicyText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  font-size: 1.2rem;
  margin: 2rem;
  margin-top: 1rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 2rem;
    margin: 0px;
  }
`;

export const PolicySubText = styled.p`
	font-style: italic;
	padding: 1.5rem;
	font-size: 1.2rem;
	text-align: center;
`
