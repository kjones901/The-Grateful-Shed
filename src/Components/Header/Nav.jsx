import { NavLinks, NavContainer } from "./styled";



// eslint-disable-next-line react/prop-types
const NavBar = ({open}) => {
  return (
    <NavContainer open = {open}>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="/gallery">Gallery</NavLinks>
      <NavLinks to="/pricing">Pricing</NavLinks>
      <NavLinks to="/policies">Policies</NavLinks>
      <NavLinks to="/about">About Me</NavLinks>
    </NavContainer>
  );
};

export default NavBar;
