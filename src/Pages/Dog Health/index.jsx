import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { PageContainer } from "../pageStyled";
import FoxtailImg from "../../assets/foxtail-plant.jpg";
import FoxtailPaw from "../../assets/foxtail-paw.jpg";
import { TipContainer, TipColumn, TipImage, TipRow } from "./styled";

const Health = () => {
  return (
    <PageContainer>
      <Header />
      <TipContainer>
        <TipColumn>
          <h1>Foxtails</h1>
          <div>
            <TipImage src={FoxtailImg} />
          </div>
          <p>
            Please, please, please, check between your dogs toes for foxtails after
            camping, hiking, or any time they&apos;ve been in areas where foxtails might
            be present, especially if they have fluffy feet. Although foxtails may look
            like an ordinary weed, they can lead to serious issues. Abscesses between toes
            being the most common. Left untreated they can burrow deep into the tissue
            requiring surgery for removal and in extreme cases, they can even lead to the
            death of your dog.
          </p>
        </TipColumn>
        <TipRow>
          <p>
            Here&apos;s an example of some foxtails I found while grooming. They&apos;re
            more common than you might realize. If you find yourself removing them from
            their coat, be sure to check their paws as well. Catching foxtails early can
            help prevent bigger problems. Thank you!
          </p>
          <div>
            <TipImage src={FoxtailPaw} />
          </div>
        </TipRow>
      </TipContainer>

      <Footer />
    </PageContainer>
  );
};

export default Health;
