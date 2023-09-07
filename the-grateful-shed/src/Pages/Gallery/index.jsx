import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
// import GalleryCarousal from "../../Components/GalleryCarousel";
import Before1 from "../../assets/before1.png";
import After1 from "../../assets/after1.png";
import Before2 from "../../assets/before2.png";
import After2 from "../../assets/after2.png";
import Before3 from "../../assets/before3.png";
import After3 from "../../assets/after3.png";
import { AfterImg, BeforeImg, GalleryBackground, GalleryCard, GalleryTitle } from "./styled";

const Gallery = () => {
  return (
      <GalleryBackground>
        <Header />
        <GalleryTitle>Gallery</GalleryTitle>
        <GalleryCard>
          <BeforeImg src={Before1} />
          <AfterImg src={After1} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before2} />
          <AfterImg src={After2} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before3} />
          <AfterImg src={After3} />
        </GalleryCard>

        <Footer />
      </GalleryBackground>
  );
};

export default Gallery;
