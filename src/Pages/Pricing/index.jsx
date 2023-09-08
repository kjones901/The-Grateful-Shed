import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer, TextContainer } from "../pageStyled";
import SmallDogImg from "../../assets/pricing-small-dog.jpeg";
import MedDogImg from "../../assets/pricing-medium-dog.jpeg";
import LargeDogImg from "../../assets/pricing-large-dog.jpeg";
import {
  AboutText,
  AboutTextSub,
  DogSize,
  ImageContainer,
  PawIcon,
  PolicyContainer,
  PolicyTitle,
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
      <AboutText>By appointment only: CALL or TEXT to book - 801-696-2233</AboutText>
      <AboutTextSub>* Additional charges may apply for poodle mixes.</AboutTextSub>
      <PriceContainer>
        <ImageContainer>
          <SizeImage src={SmallDogImg} />
        </ImageContainer>
        <PriceTextContainer>
          <DogSize>Small Dogs &#40;&#60; 20lbs&#41;</DogSize>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
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
                  <PawIcon /> Paw Pad Massage with DoTerra Essential Oil
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
          </ServicesPricingContainer>
        </PriceTextContainer>
      </PriceContainer>
      <PriceContainer>
        <PriceTextContainer>
          <DogSize>Medium Dogs &#40;20-55lbs&#41;</DogSize>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
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
                  <PawIcon /> Paw Pad Massage with DoTerra Essential Oil
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
          <DogSize>Large Dogs &#40;Depending on size & breed&#41;</DogSize>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
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
                  <PawIcon /> Paw Pad Massage with DoTerra Essential Oil
                </ServiceListItem>
              </ServiceDetails>
            </PriceTextColumn>
          </ServicesPricingContainer>
        </PriceTextContainer>
      </PriceContainer>
      <PolicyContainer>
        <PolicyTitle>Policies</PolicyTitle>
        <TextContainer>
          All appointments cancelled with less than 24 hours notice will be charged a $50 fee.
          <br/>
          <br/>
          Dogs MUST have a current Rabies Vaccination.
          <br/>
          * Recommend full vaccination, but only require proof of rabies vaccination. 
          <br />
          <br />
          No Aggressive Dogs!
          <br />
          * Aggressive behavior during the appointment will be cancelled and charged for full service.
        </TextContainer>
      </PolicyContainer>

      <Footer />
    </PageContainer>
  );
};

export default Pricing;
