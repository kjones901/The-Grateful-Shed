import styled from "styled-components";
import colors from "../../colors";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo-small.png";

export const HeaderContainer = styled.section`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background: ${colors.light};

  @media (max-width: 992px) {
    width: 100vw;
    padding: 0px;
    margin: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
  `;


export const NavContainer = styled.nav`
  display: flex;
  /* gap: 2rem; */
  align-items: center;
  
  @media (max-width: 992px) {
    height: ${({open}) => open ? '290px' : '0px'};
    flex-direction: column;
    width: 100vw;
    gap: .5rem;
    background-color: ${colors.light};
    overflow: hidden;
    transition: height .3s;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 1.3rem;
  color: black;
  padding-right: 1.5rem;

  &:hover {
    /* filter: drop-shadow(0 0 0.1rem ${colors.green}); */
    color: white;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    width: 95vw;
    font-size: 1.5rem;
    padding-right: 1rem;
    padding: 0%;
    background-color: ${colors.dark};
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

  @media (max-width: 992px) {
    height: 5.1rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

   @media (max-width: 992px) {
    padding-left: .3rem;
  }

`;

export const HeaderTitle = styled.h2`
font-family: "Shrikhand";
  text-decoration: none;
  font-size: 2.5vw;
  font-weight: 20;
  color: black;

  @media (max-width: 992px) {
    font-size: 4vw;
  }
`;
