import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer } from "../pageStyled";
import {
  AboutContainer,
  AboutMeText,
  AboutMeTitle,
  AboutPicBackground,
  AboutPicture,
  PawIcon,
} from "./styled";

const About = () => {
  return (
    <PageContainer>
      <Header />
      <AboutContainer>
        <AboutPicBackground>
          <AboutPicture />
        </AboutPicBackground>
        <AboutMeText>
          <AboutMeTitle>
            <PawIcon /> Hi, I&apos;m Laura
          </AboutMeTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutMeText>
      </AboutContainer>
      <Footer />
    </PageContainer>
  );
};

export default About;
