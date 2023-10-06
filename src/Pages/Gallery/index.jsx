import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Before1 from "../../assets/Gbefore1.jpeg";
import After1 from "../../assets/Gafter1.jpeg";
import Before2 from "../../assets/Gbefore2.jpeg";
import After2 from "../../assets/Gafter2.jpeg";
import Before3 from "../../assets/Gbefore3.jpeg";
import After3 from "../../assets/Gafter3.jpeg";
import Before4 from "../../assets/Gbefore4.jpeg";
import After4 from "../../assets/Gafter4.jpeg";
import Before5 from "../../assets/Gbefore5.jpeg";
import After5 from "../../assets/Gafter5.jpeg";
import Halloween1 from "../../assets/Halloween1.jpeg";
import Halloween2 from "../../assets/Halloween2.jpeg";

import { AfterImg, BeforeImg, GalleryBackground, GalleryCard, GallerySubtitle, GalleryTitle } from "./styled";

const Gallery = () => {
  return (
      <GalleryBackground>
        <Header />
        <GalleryTitle>Gallery</GalleryTitle>
        <GallerySubtitle>&quot;Stay Trippy, Little Yippy!&quot;</GallerySubtitle>
        <GalleryCard>
          <BeforeImg src={Halloween1} />
          <AfterImg src={Halloween2} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before4} />
          <AfterImg src={After4} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before3} />
          <AfterImg src={After3} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before2} />
          <AfterImg src={After2} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before1} />
          <AfterImg src={After1} />
        </GalleryCard>
        <GalleryCard>
          <BeforeImg src={Before5} />
          <AfterImg src={After5} />
        </GalleryCard>
        <Footer />
      </GalleryBackground>
  );
};

export default Gallery;
