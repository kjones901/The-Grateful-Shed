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
          At The Grateful Shed, I am dedicated to providing exceptional and tailored
          grooming services. Your trust in me means the world, and I want to ensure a safe
          and comfortable experience for both your dog and me as your groomer.
        </PolicySubText>
        <PolicySubTitle>1. Rabies Vaccination Requirement: </PolicySubTitle>
        <PolicyText>
          For the safety of all our clients and to comply with local regulations, all dogs
          MUST have a current Rabies Vaccination. We require proof of rabies vaccination,
          and it must be up-to-date. While we recommend full vaccination, rabies
          vaccination is the only mandatory requirement.
        </PolicyText>
        <PolicySubTitle>2. No Aggressive Dogs</PolicySubTitle>
        <PolicyText>
          If your dog displays aggressive behavior during the grooming appointment, I may
          need to cancel the session in the interest of safety. In such cases, the full
          service fee will be charged.
        </PolicyText>
        <PolicySubTitle>3. Cancellation Policy:</PolicySubTitle>
        <PolicyText>
          All appointments must be canceled with at least 24 hours&apos; notice.
          Appointments canceled with less than 24 hours&apos; notice will be subject to a
          $50 cancellation fee.
        </PolicyText>
        <PolicySubTitle>4. Specializing in Larger Dogs:</PolicySubTitle>
        <PolicyText>
          I specialize in grooming larger dog breeds. Considering their unique coat types
          and sizes, I have found that I can provide the best results and individualized
          attention to larger breeds. While I do not have strict size restrictions, please
          understand that my focus is on larger dogs to ensure the highest level of care
          and expertise.
          <br />
          <br />
          If you have a smaller dog that you believe would benefit from my services,
          please feel free to contact me. I will assess each case individually to
          determine if I can accommodate your dog&apos;s specific needs. <br />
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
