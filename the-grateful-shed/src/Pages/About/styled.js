import styled from "styled-components";
import colors from "../../colors";
import LauraPic from "../../assets/laura.jpg";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem;
  background-color: ${colors.green};
  width: 100vw;
  min-height: 60vh;
  `;

export const AboutPicBackground = styled.section`
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 80rem;
  height: 20rem;
  padding: 3rem;
  margin-left: 6rem;
  overflow: hidden;
  border-radius: 15rem;
  `;

export const AboutPicture = styled.img.attrs({ src: `${LauraPic}` })`
  width: 450px;
  `;

export const AboutMeTitle = styled.h1`
  font-family: "Shrikhand";
  font-weight: lighter;
  font-size: 5rem;
  color: white;
  text-align: left;
  `;

export const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  color: white;
  margin: 1rem;
  padding: 3rem;
  font-size: 1.5rem;
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
`
