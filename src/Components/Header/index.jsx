import Burger from "./Burger";

import { HeaderContainer, Logo, LogoContainer, HeaderTitle } from "./styled";

const Header = () => {
  return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
          <HeaderTitle>Mobile Grooming</HeaderTitle>
        </LogoContainer>
          <Burger />
      </HeaderContainer>
  );
};

export default Header;
