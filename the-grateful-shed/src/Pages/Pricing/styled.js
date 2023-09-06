import styled from "styled-components";
import colors from "../../colors";

export const SizeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.5rem ${colors.green});
`;

export const ImageContainer = styled.div`
  width: 28%;
  height: 100%;
`;

export const PricesContainer = styled.section`
  margin: 25px auto;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  border-radius: 4px;
  margin-bottom: 2rem;
`;

export const DogSize = styled.h1`
  font-family: "Shrikhand";
  font-size: 2.5rem;
  padding: 1rem;
`;

export const PriceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const ServiceTitle = styled.h1`
  font-family: "Shrikhand";
  padding: .3rem;
`;

export const ServiceDetails = styled.ul`
  padding: 1rem;
  list-style-type: none;
`;


export const Price = styled.h4`
  font-family: "Shrikhand";
  border-bottom: 2px solid black;
`;

export const PriceTextColumn = styled.div`
  width: 33.3%;
  text-align: left;
  margin-right: 1.5rem;
`;

export const ServicesPricingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const PawIcon = styled.i.attrs({ className:"fa-solid fa-paw"})`
	color: #403f3c;
	font-size: 1rem;
`

export const ServiceListItem = styled.li`
  padding: .7rem;
`
