import { FooterContainer, FooterLinkContainer, FooterText, FooterLink} from "./styled";
import colors from "../../colors";



const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&quot;Stay Trippy, Little Yippy&quot;</FooterText>
      <FooterText>
        <a href="tel:number" style={{ color: colors.red, fontWeight: "bold" }}>
          801-696-2233
        </a>{" "}
        - The Grateful Shed - Serving South Utah County
      </FooterText>
      <FooterText>
        Love what I do? Help me out by leaving a quick
        <a
          href="https://www.google.com/maps/place/The+Grateful+Shed,LLC/@40.0377238,-111.7523745,17z/data=!4m14!1m7!3m6!1s0x874da510f61f6767:0xb2bd109c2bbf87a!2sThe+Grateful+Shed,LLC!8m2!3d40.0377197!4d-111.7497996!16s%2Fg%2F11l6c1yn91!3m5!1s0x874da510f61f6767:0xb2bd109c2bbf87a!8m2!3d40.0377197!4d-111.7497996!16s%2Fg%2F11l6c1yn91?entry=ttu
        "
          style={{ color: colors.red, fontWeight: "bold" }}
        >
          {" "}
          Google review
        </a>
        . Your feedback means the world!
      </FooterText>
      <FooterLinkContainer>
        <a href="https://www.instagram.com/thegratefulshedut/?hl=en">
          <FooterLink className="fab fa-instagram"></FooterLink>
        </a>
        <a
          href="https://www.google.com/maps/place/The+Grateful+Shed,LLC/@40.0377238,-111.7523745,17z/data=!4m14!1m7!3m6!1s0x874da510f61f6767:0xb2bd109c2bbf87a!2sThe+Grateful+Shed,LLC!8m2!3d40.0377197!4d-111.7497996!16s%2Fg%2F11l6c1yn91!3m5!1s0x874da510f61f6767:0xb2bd109c2bbf87a!8m2!3d40.0377197!4d-111.7497996!16s%2Fg%2F11l6c1yn91?entry=ttu
        "
        >
          <FooterLink className="fab fa-google"></FooterLink>
        </a>
      </FooterLinkContainer>
    </FooterContainer>
  );
};

export default Footer;
