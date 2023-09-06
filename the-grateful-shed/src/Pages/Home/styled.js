import styled from "styled-components";
import colors from '../../colors'

import LogoImg from "../../assets/logo.png";
import BackgroundSrc from "../../assets/groovy-background-blurred.png";

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 15rem;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-image: url(${BackgroundSrc});

  @media (max-width: 992px) {
    height: 7rem;
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Shrikhand";
  font-size: 6rem;
  text-size-adjust: 90%;
  text-shadow: 0 0 50px black;
  color: ${colors.lightest};

  @media (max-width: 1200px) {
    font-size: 5rem;
    text-shadow: 0 0 50px black;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
    text-shadow: 0 0 50px black;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
    text-shadow: 0 0 50px black;
  }
`


export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  height: 25rem;
  width: 24rem;
  padding: 1rem;

  @media (max-width: 992px) {
    height: 23rem;
    width: 22rem;
    padding: 0.5rem;
  }
`;