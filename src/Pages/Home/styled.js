import styled from "styled-components";
import colors from "../../colors";

import LogoImg from "../../assets/logo.png";
import BackgroundSrc from "../../assets/background-groovy-blurred.png";

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 20vh;
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
  font-size: 8vw;
  text-size-adjust: 90%;
  text-shadow: 0 0 30px black;
  color: ${colors.lightest};

`;

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

export const MapContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  background-color: ${colors.lightest};
  border-radius: 1rem;
  margin: 3rem;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ServiceMap = styled.img`
  width: 27rem;
  padding: 4rem;
  border-radius: 4.5rem;

  @media (max-width: 992px) {
    width: 70vw;
    padding: 0;
    padding-bottom: 2rem;
    border-radius: 1rem;
  }
`;

export const ServiceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ServiceTitle = styled.h1`
  font-family: "Shrikhand";
  font-weight: lighter;
  font-size: 3rem;
  padding-top: 1rem;
  text-decoration: underline;
`;
