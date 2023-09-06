// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import { dataGallery } from "./dataGallery";
import { BeforePicture, AfterPicture, SlideContent } from "./styled";

const GalleryCarousel = () => {
  
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 2,
    //   slidesToScroll: 2,
    // };

  return (
    // <Slider {...settings}>
    <div>
      {dataGallery.map((slide, index) => (
        <SlideContent key={index}>
          <BeforePicture src={`../../assets/${slide.beforeImg}`} />
          <AfterPicture src={`../../assets/${slide.afterImg}`} />
        </SlideContent>
      ))}
    </div>
    // </Slider>
  );
};

export default GalleryCarousel;
