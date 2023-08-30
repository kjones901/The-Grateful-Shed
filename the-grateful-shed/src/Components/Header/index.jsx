import {
  HeaderContainer,
  NavLinks,
  NavContainer,
  Logo,
  LogoContainer,
  HeaderTitle,
} from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to ="/">
          <Logo />
        <HeaderTitle>Mobile Grooming</HeaderTitle>
      </LogoContainer>
      <NavContainer>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/pricing">Pricing</NavLinks>
        <NavLinks to="/servicearea">Service Area</NavLinks>
        <NavLinks to="/gallery">Gallery</NavLinks>
        <NavLinks to="/contact">Contact</NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
