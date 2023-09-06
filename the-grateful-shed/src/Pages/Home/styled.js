import styled from "styled-components";
// import colors from '../../colors'

import LogoImg from "../../assets/logo.png";

export const PageContainer = styled.div`
  margin: 6rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: -1;
`

export const Logo = styled.img.attrs({
  src: `${LogoImg}`,
})`
  height: 25rem;
`;