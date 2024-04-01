import service from "../../assets/images/services/service.jpg";
import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import { BallTriangle } from "react-loader-spinner";

const ServicePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setServices(data);
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


  return (
    <div className="font-quicksand">
      <Helmet>
        <title>Tech Magnet | Services</title>
      </Helmet>
      <div
        className="w-full h-[400px] bg-center bg-cover mt-14"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-6xl font-bold text-white">
                  Business Tech Support & Cybersecurity
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  We specialize in supporting small to medium sized businesses
                  with all of their IT support needs including cyber security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#801eb2] text-white py-24 font-quicksand">
        <Container>
          <div>
            <h2 className="text-center font-bold text-5xl mb-2">
              Our Services
            </h2>
            <div className="flex justify-center items-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
                {services.map((item, index) => (
                  <div key={index} className="card">
                    <div className="card-body">
                      <div className="flex justify-start items-center gap-2">
                        <img
                          className="w-9"
                          src={item.icon}
                          alt=""
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <h2 className=" font-extrabold text-2xl">
                          {item.service}
                        </h2>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServicePage;
