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
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/gallery">Gallery</NavLinks>
        <NavLinks to="/pricing">Pricing</NavLinks>
        <NavLinks to="/policies">Policies</NavLinks>
        <NavLinks to="/about">About Me</NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
