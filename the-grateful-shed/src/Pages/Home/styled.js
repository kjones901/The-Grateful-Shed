import styled from "styled-components";
import colors from '../../colors'
import BackgroundSrc from "../../assets/groovy-background-blurred.png";
import LogoImg from "../../assets/logo.png";

export const PageContainer = styled.div`
  margin: 6rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: -1;
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

export const Title = styled.h1`
  font-family: "Shrikhand";
  font-size: 8rem;
  text-shadow: 0 0 50px ${colors.darkest};
  color: ${colors.light};
`

export const TextAndImageContainer = styled.div`
  display: flex;
`


export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  height: 25rem;
`;