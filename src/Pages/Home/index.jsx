import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer, TextContainer, TextAndImageContainer } from "../pageStyled";
import {
  Logo,
  TitleContainer,
  BusImage,
  BannerTitle,
  ServiceMap,
  MapContainer,
  ServiceTextContainer,
  ServiceTitle,
  SmallScreenBannerTitle,
  SmallLogo,
  SmallLogoWrapper,
  SmallScreenBannerTitleWrapper,
  HomeTextContainer,
} from "./styled";
import Map from "../../assets/service-area-map.png";
import BusImg from "../../assets/bus-img-wide2.jpg";

const Home = () => {
  return (
    <PageContainer>
      <Header />
      <TitleContainer>
        <BannerTitle>THE GRATEFUL SHED</BannerTitle>
        <SmallScreenBannerTitleWrapper>
          <SmallScreenBannerTitle>
            THE <br /> GRATEFUL <br /> SHED
          </SmallScreenBannerTitle>
        </SmallScreenBannerTitleWrapper>
        <SmallLogoWrapper>
          <SmallLogo />
        </SmallLogoWrapper>
      </TitleContainer>
      <TextAndImageContainer>
        <HomeTextContainer>
          &quot;The Grateful Shed&quot; – where convenience meets canine comfort. With a
          freshly renovated and roomy mobile dog bus, I offer nothing short of top of the
          line pampering for your beloved four-legged friend, no matter their size. My
          mission goes beyond just bringing grooming to your doorstep; it&apos;s about
          providing the undivided attention and personalized care that your cherished
          companion deserves. Welcome to a world of tail-wagging transformations and a
          truly grateful pup.
        </HomeTextContainer>
        <Logo />
      </TextAndImageContainer>
      <MapContainer>
        <ServiceTextContainer>
          <ServiceTitle>Service Area</ServiceTitle>
          <TextContainer>
            Based out of Payson, UT.
            <br />
            Now Accepting Clients from Springville to Santaquin.
            <br />
            <br />
            <br />* Discounts available if you&apos;d prefer to bring your dog to Payson.
          </TextContainer>
        </ServiceTextContainer>
        <ServiceMap src={Map} />
      </MapContainer>
      <BusImage src={BusImg} />
      <Footer />
    </PageContainer>
  );
};

export default Home;
