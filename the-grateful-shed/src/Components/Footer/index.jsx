import { FooterContainer, FooterText, FooterLink, FooterLinks } from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>801-696-2233</FooterText>
      <FooterText>@2023 by The Grateful Shed</FooterText>
      <FooterLinks>
        <a href="https://www.instagram.com/thegratefulshedut/?hl=en">
          <FooterLink className="fab fa-instagram"></FooterLink>
        </a>
        <a href="/">
          <FooterLink className="fab fa-facebook"></FooterLink>
        </a>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
