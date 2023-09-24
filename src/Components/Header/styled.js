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
    width: 100vw;
    padding: 0px;
    margin: 0px;
  }
  `;

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 992px) {
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    flex-direction: column;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100vw;
    gap: 2rem;
    height: 100vh;
    background-color: ${colors.light};
    transition: transform 0.3s ease-in-out;
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
    width: 200px;
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
    padding-left: 1.5rem;
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
    display: none;
  }
`;
