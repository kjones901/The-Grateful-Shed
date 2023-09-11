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
        <AboutMeText>
          <AboutMeTitle>
            <PawIcon /> Hi,
          </AboutMeTitle>
          I would like to introduce myself. My name is Laura Hartman and I LOVE DOGS!
          According to my Mom, the first word I ever spoke was Dog! I deeply love all
          animals and considered becoming a veterinarian.<br/><br/> I followed a different path and
          became a nurse. I have worked in the operating room helping to heal people for
          close to 30 years. I am so excited and pleased to announce that I have
          started a whole new chapter in my healing caregiver role. I&apos;ve switched my focus
          back to dogs. I want to help dogs live their happiest, healthiest, most stylish
          lives possible!<br/><br/> When your beloved furry friend is in my care they will be
          treated with love just like my own dog Odin. ❤️🐶❤️
        </AboutMeText>
        <AboutPicBackground>
          <AboutPicture />
        </AboutPicBackground>
      </AboutContainer>
      <Footer />
    </PageContainer>
  );
};

export default About;
