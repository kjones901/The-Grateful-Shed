import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer } from "../pageStyled";
import {
  PolicyContainer,
  PolicySubText,
  PolicySubTitle,
  PolicyText,
  PolicyTitle,
} from "./styled";

const Policies = () => {
  return (
    <PageContainer>
      <Header />
      <PolicyTitle> Mobile Grooming Policies</PolicyTitle>
      <PolicyContainer>
        <PolicySubText>
          I am dedicated to providing exceptional and tailored
          grooming services. Your trust in me means the world, and I want to ensure a safe
          and comfortable experience for both your dog and me as your groomer.
        </PolicySubText>
        <PolicySubTitle>1. Rabies Vaccination Requirement: </PolicySubTitle>
        <PolicyText>
          For the safety of all my clients and to comply with local regulations, all dogs
          MUST have a current Rabies Vaccination. I require proof of rabies vaccination,
          and it must be up-to-date. While I recommend full vaccination, rabies
          vaccination is the only mandatory requirement.
        </PolicyText>
        <PolicySubTitle>2. No Aggressive Dogs:</PolicySubTitle>
        <PolicyText>
          If your dog displays aggressive behavior during the grooming appointment, I may
          need to cancel the session in the interest of safety. In such cases, the full
          service fee will be charged.
        </PolicyText>
        <PolicySubTitle>3. No Micro-Sized Dogs:</PolicySubTitle>
        <PolicyText>
          At The Grateful Shed, I happily offer grooming services to dogs of various
          sizes, ranging from small to large breeds. Every dog, regardless of its size,
          deserves attention and care. However, please understand that I do not currently
          groom micro-sized dogs. This choice is based on my preference to focus on
          providing the best possible grooming experience, considering my setup and
          expertise.
        </PolicyText>
        <PolicySubTitle>4. Cancellation Policy:</PolicySubTitle>
        <PolicyText>
          All appointments must be canceled with at least 24 hours&apos; notice.
          Appointments canceled with less than 24 hours&apos; notice will be subject to a
          $50 cancellation fee.
        </PolicyText>
        <PolicySubText>
          Thank you for choosing The Grateful Shed for your dog&apos;s grooming needs. I
          look forward to serving you and your furry friend with professionalism and care.
        </PolicySubText>
      </PolicyContainer>
      <Footer />
    </PageContainer>
  );
};

export default Policies;
