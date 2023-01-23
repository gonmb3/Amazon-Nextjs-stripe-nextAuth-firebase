import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const bannerImages = [
    "https:/links.papareact.com/gi1",
    "https:/links.papareact.com/6ff",
    "https:/links.papareact.com/7ma",
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
        interval={5000}
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
