import { FooterContainer, FooterText, FooterLink, FooterLinks } from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>801-696-2233 - Call or Text to Book</FooterText>
      <FooterText>The Grateful Shed - Mobile Grooming Serving Utah County</FooterText>
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
