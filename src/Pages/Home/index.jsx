import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
  PageContainer,
  TextContainer,
  TextAndImageContainer,
} from "../pageStyled";
import {
  Logo,
  TitleContainer,
  BannerTitle,
  ServiceMap,
  MapContainer,
  ServiceTextContainer,
  ServiceTitle,
  SmallScreenBannerTitle,
} from "./styled";
import Map from "../../assets/service-area-map.png";

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <TitleContainer>
        <BannerTitle>THE GRATEFUL SHED</BannerTitle>
        <SmallScreenBannerTitle>THE <br/> GRATEFUL SHED</SmallScreenBannerTitle>
      </TitleContainer>
      <TextAndImageContainer>
        <TextContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextContainer>
        <Logo />
      </TextAndImageContainer>
      <MapContainer>
        <ServiceTextContainer>
          <ServiceTitle>Service Area</ServiceTitle>
          <TextContainer>
            Based out of Payson, UT.
            <br />
            Now Accepting Clients from Provo to Santaquin.
            <br />
            <br />
            <br />* Discounts available if you&apos;d prefer to bring your dog to Payson.
          </TextContainer>
        </ServiceTextContainer>
        <ServiceMap src={Map} />
      </MapContainer>
      <Footer />
    </PageContainer>
  );
};

export default Home;
