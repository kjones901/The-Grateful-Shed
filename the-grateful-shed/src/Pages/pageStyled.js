import styled from "styled-components";
import colors from "../colors";
import BackgroundSrc from "../assets/groovy-background-blurred.png";

export const PageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 90vw;
`
export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20rem;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-image: url(${BackgroundSrc});
`;

export const BannerTitle = styled.h1`
  font-family: "Shrikhand";
  font-size: 8rem;
  text-shadow: 0 0 50px black;
  color: ${colors.lightest};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const TextAndImageContainer = styled.div`
  display: flex;
`

export const Title = styled.h1`
  font-family: 'Shrikhand';
  font-weight: lighter;
  font-size: 3rem;
  color: black;
`

export const Subheading = styled.h3`
  font-size: 2rem;
  
`