import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GalleryCarousal from "../../Components/GalleryCarousel";
import { PageContainer, Title } from "../pageStyled";

const Gallery = () => {
  return (
    <PageContainer>
      <Header/>
      <Title>Gallery</Title>
      <GalleryCarousal/>
      <Footer />
    </PageContainer>
  );
};

export default Gallery;
