import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer, TextContainer, TextAndImageContainer } from "../pageStyled";
import {
  // Logo,
  TitleContainer,
  BusImage,
  BannerTitle,
  ServiceMap,
  MapContainer,
  ServiceTextContainer,
  ServiceTitle,
  SmallScreenBannerTitle,
  AwardRibbon,
  SmallLogo,
  SmallLogoWrapper,
  SmallScreenBannerTitleWrapper,
  HomeTextContainer,
  AwardBanner,
  AnnouncementContainer,
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
      <AnnouncementContainer>
        Happy One-Year Anniversary! 🎉 Thank you for sharing your furry friends with me
        over the past year. I&apos;m excited to celebrate this milestone with all of you!
        I&apos;d like to let everyone know that, moving forward, I will no longer be
        accepting new clients north of Spanish Fork. Please rest assured that this change
        does not affect any of my existing clients. Thank you for your understanding and
        continued support!
      </AnnouncementContainer>
      <TextAndImageContainer>
        <HomeTextContainer>
          &quot;The Grateful Shed&quot; - where convenience meets canine comfort. With a
          freshly renovated and roomy mobile dog bus, I offer nothing short of top of the
          line pampering for your beloved four-legged friend. My mission goes beyond just
          bringing grooming to your doorstep; it&apos;s about providing the undivided
          attention and personalized care that your cherished companion deserves. Welcome
          to a world of tail-wagging transformations and a truly grateful pup.
        </HomeTextContainer>
        <AwardRibbon />
      </TextAndImageContainer>
      <AwardBanner />
      <MapContainer>
        <ServiceTextContainer>
          <ServiceTitle>Service Details</ServiceTitle>
          <TextContainer>
            Based out of Payson, UT.
            <br />
            <br />
            Accepting Clients from Spanish Fork to Santaquin.
            <br />
            <br />
             Service Days: Tuesday, Wednesday, Thursday, Saturday.
            <br />
            <br />
            <br />
            * I don&apos;t take walk-ins, however, discounts are available if you&apos;d prefer to bring your dog to Payson.
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
