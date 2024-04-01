import { useEffect, useState } from "react";
import Container from "../Pages/Shared/Container/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BallTriangle } from "react-loader-spinner";

const WhyChooseUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data);
        setIsLoaded(true);
      });
  }, []);


  if (!isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
      }
    }
    return stars;
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#801eb2] text-white py-24 font-quicksand" id="review">
      <Container>
        <div className="mb-6">
          <h2 className="text-center font-bold text-5xl mb-2">
            What our customer says
          </h2>
          <p className="text-center lg:px-64 text-gray-300">
            Our customers speak volumes about their satisfaction: 'Exceptional
            quality and service.' 'A game-changer for my business.' Join them
            and experience excellence firsthand
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="p-2">
                <div className="card border rounded-lg">
                  <div className="card-body space-y-4 shadow-lg ">
                  <div className="flex text-2xl">
                        {renderStars(item.rating)}
                      </div>
                    <p>{item.review}</p>
                    <div className="card-actions justify-start">
                      <div className="flex justify-start items-center gap-4">
                        <img className="w-12" src={item.image} alt="" />
                        <div>
                        <h2 className="card-title">{item.name}</h2>
                        <p className="text-gray-300">{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
