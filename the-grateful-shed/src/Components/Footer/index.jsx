import { FooterContainer, FooterText, FooterLink} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Call or Text to Book: 801-696-2233</FooterText>
      <FooterText>The Grateful Shed - Serving South Utah County</FooterText>
      <FooterText>&quot;Stay Trippy, Little Yippy&quot;</FooterText>
        <a href="https://www.instagram.com/thegratefulshedut/?hl=en">
          <FooterLink className="fab fa-instagram"></FooterLink>
        </a>
    </FooterContainer>
  );
};

export default Footer;
