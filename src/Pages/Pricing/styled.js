import styled from "styled-components";
import colors from "../../colors";

export const SizeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.5rem ${colors.green});

  @media (max-width: 992px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 28%;
  height: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin-bottom: 2rem;
  background-color: ${colors.lightest};
  border-radius: 1rem;
`;

export const DogSize = styled.h1`
  font-family: "Shrikhand";
  font-size: 3rem;
  padding: 1rem;

  @media (max-width: 992px) {
    font-size: 4vw;
  }

  @media (max-width: 550px) {
    font-size: 5vw;
  }
`;

export const PriceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1rem;

  @media (max-width: 992px) {
    width: 100vw;
  }
`;

export const ServiceTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    flex-direction: row;
    border-bottom: 2px solid black;
    justify-content: space-between;
    padding-top: 1rem;
  }
`;

export const ServiceTitle = styled.h1`
  font-family: "Shrikhand";
  padding: 0.3rem;
  font-size: 1.7vw;

  @media (max-width: 992px) {
    padding: 0px;
    font-size: 3vw;
  }

  @media (max-width: 550px) {
    font-size: 3.5vw;
    border: none;
  }
`;

export const ServiceDetails = styled.ul`
  padding: 1rem;
  list-style-type: none;

  @media (max-width: 992px) {
    padding: 0px;
  }
`;

export const Price = styled.h4`
  font-family: "Shrikhand";
  border-bottom: 2px solid black;

  @media (max-width: 992px) {
    font-size: 3vw;
    border: none;
  }

  @media (max-width: 550px) {
    font-size: 3.5vw;
    border: none;
  }
`;

export const PriceTextColumn = styled.div`
  width: 33.3%;
  text-align: left;
  padding-right: 1.5rem;

  @media (max-width: 992px) {
    width: 75vw;
  }
`;

export const ServicesPricingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const PawIcon = styled.i.attrs({ className: "fa-solid fa-paw" })`
  color: #403f3c;
  font-size: 1rem;
`;

export const ServiceListItem = styled.li`
  padding: 0.7rem;

  @media (max-width: 992px) {
    font-size: 2.2vw;
    padding: 0.2rem;
  }

  @media (max-width: 550px) {
    font-size: 3vw;
    padding: 0.2rem;
  }
`;

export const AboutText = styled.h3`
  padding: 1rem;

  a{
    font-size: 1.4rem;
    color: ${colors.red};
  }
`;

export const AboutTextSub = styled.h5`
  margin-bottom: 1rem;
`;
