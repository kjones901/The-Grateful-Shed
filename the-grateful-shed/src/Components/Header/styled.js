import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo-small.png";

export const HeaderContainer = styled.section`
  font-family: "Shrikhand";
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  width: 100vw;
  background: ${colors.light};
`;

export const NavContainer = styled.div`
  display: flex;
  padding-right: 2rem;
  gap: 2rem;
`;

export const NavLinks = styled(Link)`
  font-size: 1.5rem;
  color: black;

  &:hover {
    filter: drop-shadow(0 0 0.1rem ${colors.green});
    cursor: pointer;
  }
`;

export const Logo = styled.img.attrs({
  src: `${LogoSrc}`,
})`
  height: 6rem;
  padding: 0.6rem;
  border-radius: 2rem;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    filter: drop-shadow(0 0 0.1rem ${colors.green});
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.h2`
  text-decoration: none;
  padding-left: .8rem;
  font-size: 2rem;
  font-weight: 20;
  color: black;
`;
