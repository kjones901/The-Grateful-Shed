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

  @media (max-width: 550px) {
    height: 23vh;
    text-align: left;
    align-items: flex-start;
  }
`;

export const SmallScreenBannerTitleWrapper = styled.div`
  padding-left: 1.5rem;
`;

export const SmallScreenBannerTitle = styled.h1`
  display: none;
  font-family: "Shrikhand";
  text-shadow: 0 0 10px black;
  color: ${colors.lightest};

  @media (max-width: 550px) {
    display: contents;
    font-size: 10vw;
    margin-left: 3rem;
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Shrikhand";
  font-size: 8vw;
  text-shadow: 0 0 30px black;
  color: ${colors.lightest};

  @media (max-width: 550px) {
    display: none;
  }
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

  @media (max-width: 550px) {
    display: none;
  }
`;

export const SmallLogoWrapper = styled.div`
  display: none;
  position: absolute;
  right: 35px;
  margin-top: 240px;
  border: 3px solid black;
  border-radius: 5px;

  @media (max-width: 550px) {
    display: block;
  }
`;

export const SmallLogo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  @media (max-width: 550px) {
    width: 9rem;
  }
`;

export const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 4rem;
  font-size: 1.5rem;

  @media (max-width: 992px) {
    max-width: 100vw;
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
    margin-bottom: 2rem;
    border-radius: .5rem;
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

export const BusImage = styled.img`
  width: 100vw;
`
