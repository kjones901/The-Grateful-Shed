import styled from "styled-components";
import colors from "../../colors";
import LauraPic from "../../assets/laura.jpg";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.green};
  width: 100vw;
  min-height: 70vh;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
  `;

export const AboutPicBackground = styled.section`
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding: 4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 2rem;
    margin: 0px;
  }
  `;

export const AboutPicture = styled.img.attrs({ src: `${LauraPic}` })`
  width: 300px;
  border-radius: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
  `;

export const AboutMeTitle = styled.h1`
  font-family: "Shrikhand";
  font-weight: lighter;
  font-size: 5rem;
  color: white;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 3rem;
  }
  `;

export const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  color: white;
  margin: 1rem;
  padding: 5rem;
  font-size: 1.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0px;
    margin: 0px;
  }
  `;

export const PageContainer = styled.div`
  margin: 6rem;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: -1;
`;

export const PawIcon = styled.i.attrs({ className:"fa-solid fa-paw"})`
	color: white;
	font-size: 6rem;

  @media (max-width: 992px) {
    font-size: 4rem;
  }
`
