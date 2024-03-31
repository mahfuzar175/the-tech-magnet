import Container from "../Pages/Shared/Container/Container";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";

const CompanySection = () => {
  const imageStyle = {
    width: "140px",
    height: "100px",
  };

  return (
    <div className=" py-24 font-quicksand">
      <Container>
        <div className="space-y-4">
          <h2 className="text-center font-bold text-5xl mb-2">
            Trusted by 150+ companies
          </h2>
          <p className="lg:px-64 text-gray-600 text-center mb-2">
            Explore testimonials from 150+ companies, ranging from marketing
            managers to CEOs. Discover why our solutions have earned widespread
            trust across diverse industries
          </p>
        </div>
        <Marquee pauseOnHover speed={60} className="mt-12">
          <div className="mr-12">
            <img src={img1} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img2} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img3} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img4} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img5} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img1} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img6} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img7} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img8} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img9} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img10} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img11} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img11} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img12} alt="" style={imageStyle} />
          </div>
          <div className="mr-12">
            <img src={img13} alt="" style={imageStyle} />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default CompanySection;
