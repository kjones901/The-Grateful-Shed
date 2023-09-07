import styled from "styled-components";
import colors from "../../colors";

export const GalleryBackground = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, ${colors.green}, ${colors.light});
`

export const GalleryTitle = styled.h1`
  font-family: 'Shrikhand';
  font-weight: lighter;
  font-size: 5rem;
  color: white;
  padding-top: 2.5rem;
`

export const GallerySubtitle = styled.h2`
  color: white;
`

export const GalleryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  margin: 2rem;
  gap: 1rem;

  @media (max-width: 992px) {
	width: 80vw;
  }
`;

export const BeforeImg = styled.img`
  width: 50%;
  border-radius: 5px;
`;

export const AfterImg = styled.img`
  width: 50%;
  border-radius: 5px;
`;
