import backgroundImage from "../assets/images/rm380-10.jpg";
import img1 from "../assets/images/Projects/1.jpg";
import img2 from "../assets/images/Projects/2.jpg";
import img3 from "../assets/images/Projects/3.jpg";
import img4 from "../assets/images/Projects/4.jpg";
import img5 from "../assets/images/Projects/5.jpg";
import img6 from "../assets/images/Projects/6.jpg";
import img7 from "../assets/images/Projects/7.jpg";
import img8 from "../assets/images/Projects/8.jpg";
import img9 from "../assets/images/Projects/9.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Container from "../Pages/Shared/Container/Container";

const OurWorks = () => {
  return (
    <div
      className="py-24 font-quicksand"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default OurWorks;
