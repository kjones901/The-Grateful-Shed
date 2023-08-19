import { HeaderContainer, NavLinks, NavContainer, Logo, LogoLink } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      <NavContainer>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/">Pricing</NavLinks>
        <NavLinks to="/">Service Area</NavLinks>
        <NavLinks to="/">Gallery</NavLinks>
        <NavLinks to="/">Contact</NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
