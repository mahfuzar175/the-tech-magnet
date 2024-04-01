import Container from "../Pages/Shared/Container/Container";
import backgroundImage from "../assets/images/rm380-10.jpg";
import VideoIntro from "./VideoIntro";

const IntroductionSction = () => {
  return (
    <div
      className="py-24 font-quicksand"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Container>
          <VideoIntro></VideoIntro>
          <div className="text-center mt-12 space-y-5 md:px-16">
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl ">
              WELCOME TO TECH MAGNET
            </h2>
            <p className="text-gray-600">
              Tech Magnet stands as a beacon of innovation in the ever-expanding
              landscape of technology companies. At the forefront of
              technological advancement, we are more than just a company; we are
              pioneers, visionaries, and architects of the future. Our
              foundation rests upon a commitment to excellence, integrity, and
              relentless pursuit of innovation. Through our cutting-edge
              products, transformative services, and groundbreaking research, we
              strive to redefine the boundaries of what is possible.
            </p>
            
          </div>
          <div className="flex justify-center items-center mt-5">
          <a
            href="#"
            className="text-white lg:text-xl bg-gradient-to-r from-[#f73d91] to-[#801eb2]  py-3 px-16 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Now!
          </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default IntroductionSction;
