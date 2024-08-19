import styled from "styled-components";
import colors from "../../colors";

export const TipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80vw; /* Adjusted from 60vw to be more responsive */
  margin: 2rem auto; /* Centered margin */
  background-color: ${colors.lightest};
  border-radius: 1rem;
  box-sizing: border-box; /* Ensure padding and borders are included in width/height */

  @media (max-width: 768px) {
    width: 90vw; /* More responsive width for smaller screens */
    margin: 1rem;
  }
`;

export const TipColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Adjusted to full width of the container */
  padding: 1rem; /* Adjusted padding for responsiveness */
  gap: 1rem;

  div {
    width: 100%; /* Adjusted to full width */
    padding: 1rem;
  }

  h1 {
    font-size: 3.5rem; /* Use rem units for font size */

    @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  }

  p {
    text-align: justify;
    padding: 1rem;
    font-size: 1.2rem; /* Use rem units for font size */
  }

  @media (max-width: 992px) {
    width: 95%; /* Adjusted to fit smaller screens */
  }
`;

export const TipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; /* Adjusted gap */
  width: 100%; /* Adjusted to full width */
  padding: 1rem;

  p {
    flex: 1; /* Make paragraphs take available space */
    text-align: justify;
    padding: 1rem;
    font-size: 1.2rem; /* Use rem units for font size */
  }

  div {
    flex: 0 0 auto; /* Prevent resizing */
    max-width: 20vw; /* Responsive width for images */
    margin: 1rem; /* Adjusted margin */

    @media (max-width: 992px) {
      max-width: 45vw;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    width: 95%; /* Adjusted to full width */
  }
`;

export const TipImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 3px;
  object-fit: cover; /* Adjusts the image fitting */
`;

// import styled from "styled-components";
// import colors from "../../colors";

// export const TipContainer = styled.div`
//   display: flex;
//   width: 60vw;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin: 2rem;
//   background-color: ${colors.lightest};
//   border-radius: 1rem;
// `;

// export const TipColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 90%;
//   padding: 1.5rem;
//   gap: 1rem;

//   div {
//     width: 50%;  
//     height: 100%;
//     padding: 1rem;
//   }

//   h1 {
//     font-size: 2.5vw;  

//     @media (max-width: 992px) {
//       font-size: 4vw;  
//     }

//     @media (max-width: 550px) {
//       font-size: 5vw;  
//     }
//   }

//   p {
//     text-align: justify;  
//     font-size: large;
//   }

//   @media (max-width: 992px) {
//     width: 75vw;  
//   }
// `;

// export const TipRow = styled.div`
//   width: 90%;
//   display: flex;
//   align-items: center;
//   gap: 3rem;
//   padding: 1.5rem;

//   p {
//     width: 50%;  
//     text-align: justify;
//     font-size: large;
//   }

//   div {
//     width: 15vw;  
//     margin: 2rem;
//   }

//   @media (max-width: 992px) {
//     width: 75vw;  
//   }
// `;

// export const TipImage = styled.img`
//   max-width: 100%;
//   height: 100%;
//   height: auto;
//   width: auto;
//   border-radius: 3px;
// `;

