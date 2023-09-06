import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
  PageContainer,
  // Subheading,
  // TextAndImageContainer,
  TextContainer,
  // Title,
} from "../pageStyled";
import SmallDogImg from "../../assets/small-dog-pricing2.png";
import MedDogImg from "../../assets/medium-dog-pricing.png";
import LargeDogImg from "../../assets/large-dog-pricing.png";
import {
  DogSize,
  ImageContainer,
  PawIcon,
  Price,
  PriceContainer,
  PriceTextColumn,
  PriceTextContainer,
  PricesContainer,
  ServiceDetails,
  ServiceListItem,
  ServiceTitle,
  ServicesPricingContainer,
  SizeImage,
} from "./styled";

const Pricing = () => {
  return (
    <PageContainer>
      <Header />
      <TextContainer>
        By Appointment only: CALL or TEXT to book - 801-696-2233
      </TextContainer>
      * Additional charges may apply for poodle mixes.
      <PricesContainer>
        <PriceContainer>
          <ImageContainer>
            <SizeImage src={SmallDogImg} />
          </ImageContainer>
          <PriceTextContainer>
            <DogSize>Small Dogs &#40;&#60; 20lbs&#41;</DogSize>
            <ServicesPricingContainer>
              <PriceTextColumn>
                <ServiceTitle>Full Service</ServiceTitle>
                <Price>$100-$130</Price>
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
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$70-$100</Price>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
                <Price>$40</Price>
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
                <ServiceTitle>Full Service</ServiceTitle>
                <Price>$110-$140</Price>
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
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$70-$100</Price>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
                <Price>$40</Price>
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
                <ServiceTitle>Full Service</ServiceTitle>
                <Price>$130-$300</Price>
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
                <ServiceTitle>Bath & Brush Out</ServiceTitle>
                <Price>$70-$100</Price>
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
                <ServiceTitle>Deluxe Pawdycures</ServiceTitle>
                <Price>$40</Price>
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
        {/* <PriceContainer>
          <PriceTextContainer>
            <PriceText>Medium Dogs &#40;20-55lbs&#41;</PriceText>
            <PriceText>$110-$140</PriceText>
          </PriceTextContainer>
          <SizeImage src={MedDogImg} />
        </PriceContainer>
        <PriceContainer>
          <SizeImage src={LargeDogImg} />
          <PriceTextContainer>
            <PriceText>Large Dogs &#40;Depending on size & breed&#41;</PriceText>
            <PriceText>$130-$300</PriceText>
          </PriceTextContainer>
        </PriceContainer> */}
      </PricesContainer>
      <Footer />
    </PageContainer>
  );
};

export default Pricing;
