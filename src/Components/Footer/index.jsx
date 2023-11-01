import { FooterContainer, FooterText, FooterLink} from "./styled";
import colors from "../../colors";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText><a href="tel:number" style={{ color: colors.red }}>801-696-2233</a></FooterText>
      <FooterText>The Grateful Shed - Serving South Utah County</FooterText>
      <FooterText>&quot;Stay Trippy, Little Yippy&quot;</FooterText>
        <a href="https://www.instagram.com/thegratefulshedut/?hl=en">
          <FooterLink className="fab fa-instagram"></FooterLink>
        </a>
    </FooterContainer>
  );
};

export default Footer;
