import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo-small.png";

export const HeaderContainer = styled.section`
  font-family: "Shrikhand";
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 15vh;
  width: 100vw;
  background: ${colors.light};

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100vw;
    padding: 0px;
    margin: 0px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  padding-right: 2rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 1.5rem;
  color: black;

  &:hover {
    filter: drop-shadow(0 0 0.1rem ${colors.green});
    cursor: pointer;
  }

  @media (max-width: 992px) {
    width: 90vw;
    border: 2px solid black;
    border-radius: 0.3rem;
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

  @media (max-width: 992px) {
    width: 100vw;
    background-color: ${colors.dark};
  }
`;

export const HeaderTitle = styled.h2`
  text-decoration: none;
  padding: 0.8rem;
  font-size: 2rem;
  font-weight: 20;
  color: black;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;
