import img1 from "../../assets/images/about/1.jpg";
import img2 from "../../assets/images/about/2.jpg";
import Container from "../Shared/Container/Container";
import banner from "../../assets/images/about/who-we-are-banner-min.png";
import { Helmet } from "react-helmet-async";
const AboutPage = () => {
  return (
    <div className="font-quicksand">
      <Helmet>
        <title>Tech Magnet | About Us</title>
      </Helmet>
      <div
        className="w-full h-[400px] bg-center bg-cover mt-14"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-6xl font-bold text-white">
                  About Us
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Welcome to Tech Magnet, where innovation meets excellence. We
                  are dedicated to providing cutting-edge solutions for
                  businesses of all sizes, enabling them to thrive in the
                  digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="py-28">
          <div className="pb-10">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 justify-between items-center">
                <div className="lg:w-1/2">
                  <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div className="lg:w-1/2 lg:mb-16">
                  <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-bold">
                    Our Vision
                  </h4>
                  <p>
                    Our vision is to be the driving force behind every
                    business's success story. We aim to revolutionize the
                    digital landscape and empower our clients to achieve their
                    goals with confidence.
                  </p>
                  <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-bold">
                    What Sets Us Apart
                  </h4>
                  <p>
                    At Tech Magnet, we go above and beyond to deliver
                    unparalleled results. Our team of experts is committed to
                    excellence, ensuring that every project is executed with
                    precision and passion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 mb-10">
            <div className="container mx-auto px-4">
              <div className="flex flex-col-reverse  lg:flex-row-reverse gap-10 lg:gap-16 justify-between items-center">
                <div className="lg:w-1/2">
                  <h4 className="mb-4 lg:mb-8 text-xl md:text-2xl font-bold">
                    Why Choose Tech Magnet?
                  </h4>
                  <p>
                    When you choose Tech Magnet, you're choosing excellence. We
                    pride ourselves on delivering customized solutions that
                    exceed expectations. With our team by your side, success is
                    inevitable.
                  </p>
                  <h4 className="my-4 lg:my-8 text-xl md:text-2xl font-bold">
                    What We Offer
                  </h4>
                  <p>
                    Our offerings are designed to propel your business forward.
                    From strategic guidance to technical expertise, we provide
                    everything you need to thrive in today's competitive market.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <img className="rounded-lg" src={img2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
