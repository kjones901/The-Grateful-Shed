import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer } from "../pageStyled";
// import SmallDogImg from "../../assets/pricing-small-dog.jpeg";
import MedDogImg from "../../assets/pricing-medium-dog.jpeg";
import LargeDogImg from "../../assets/pricing-large-dog.jpeg";
import {
  AboutText,
  AboutTextSub,
  DogSize,
  ImageContainer,
  PawIcon,
  Price,
  PriceContainer,
  PriceTextColumn,
  PriceTextContainer,
  ServiceDetails,
  ServiceListItem,
  ServiceTitle,
  ServiceTitleContainer,
  ServicesPricingContainer,
  SizeImage,
} from "./styled";

const Pricing = () => {
  return (
    <PageContainer>
      <Header />
      <AboutText>
        By Appointment Only: 801-696-2233
        <br />
        <a href="tel:801-696-2233">CALL </a> or
        <a href="sms:801-696-2233"> TEXT</a> to book.
      </AboutText>
      <AboutTextSub>* Additional charges may apply for poodle mixes.</AboutTextSub>
      <AboutTextSub>* I specialize in grooming larger dogs, but feel free to reach out if you have a smaller dog and we can determine if it&apos;s a good fit.</AboutTextSub>
      {/* <PriceContainer>
        <ImageContainer>
          <SizeImage src={SmallDogImg} />
        </ImageContainer>
        <PriceTextContainer>
          <DogSize>Small Dogs &#40;20-30lbs&#41;</DogSize>
          <AboutTextSub>* I specialize in grooming larger dogs, but feel free to reach out if you have a smaller dog and we can determine if it&apos;s a good fit.</AboutTextSub>
          <ServicesPricingContainer>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Full Service </ServiceTitle>
                <Price> $100-$130</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo & Conditioner of Choice
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Haircut
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Sanitary Trimming
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Teeth Brushed
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$70-$100</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Brush Out
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Deluxe Pawdicure</ServiceTitle>
                <Price>$40</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Fur On & Between Paw Pads Trimmed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Paw Pads Massaged
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
          </ServicesPricingContainer>
        </PriceTextContainer>
      </PriceContainer> */}
      <PriceContainer>
        <PriceTextContainer>
          <DogSize>Medium Dogs &#40;30-60lbs&#41;</DogSize>
          <ServicesPricingContainer>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Full Service</ServiceTitle>
                <Price>$110-$140</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo & Conditioner of Choice
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Haircut
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Sanitary Trimming
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Teeth Brushed
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$75-$110</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Brush Out
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Deluxe Pawdicure</ServiceTitle>
                <Price>$40</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Fur On & Between Paw Pads Trimmed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Paw Pads Massaged
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
          </ServicesPricingContainer>
        </PriceTextContainer>
        <ImageContainer>
          <SizeImage src={MedDogImg} />
        </ImageContainer>
      </PriceContainer>
      <PriceContainer>
        <ImageContainer>
          <SizeImage src={LargeDogImg} />
        </ImageContainer>
        <PriceTextContainer>
          <DogSize>Large Dogs &#40;&gt;60lbs&#41;</DogSize>
          <ServicesPricingContainer>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Full Service</ServiceTitle>
                <Price>$130-$300</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo & Conditioner of Choice
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Haircut
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Sanitary Trimming
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Teeth Brushed
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$95-$200</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Shampoo
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Leave in Conditioner
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Brush Out
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Ear Cleaning
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
            <PriceTextColumn>
              <ServiceTitleContainer>
                <ServiceTitle>Deluxe Pawdicure</ServiceTitle>
                <Price>$40</Price>
              </ServiceTitleContainer>
              <ServiceDetails>
                <ServiceListItem>
                  <PawIcon /> Fur On & Between Paw Pads Trimmed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Nails Trimmed & Filed
                </ServiceListItem>
                <ServiceListItem>
                  <PawIcon /> Paw Pads Massaged
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
          </ServicesPricingContainer>
        </PriceTextContainer>
      </PriceContainer>
      <Footer />
    </PageContainer>
  );
};

export default Pricing;
