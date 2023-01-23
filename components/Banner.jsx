import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const bannerImages = [
    "/img/banner1.png",
    "/img/banner2.png",
    "/img/banner3.png",
  ];

  return (
    <div className="relative">
     { /* gradient div*/}
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3500}
      >
        {
        bannerImages.map((img, index) => (
          <div key={index}>
            <img loading="lazy" src={img} alt="banner-img" />
          </div>
        ))
        }
      </Carousel>
    </div>
  );
};

export default Banner;
