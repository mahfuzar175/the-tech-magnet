import { useEffect, useState } from "react";
import Container from "../Pages/Shared/Container/Container";

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="bg-[#801eb2] text-white py-24 font-quicksand" id="services">
      <Container>
        <div>
          <h2 className="text-center font-bold text-5xl mb-2">Our Services</h2>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
              {services.map((item, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <div className="flex justify-start items-center gap-2">
                    <img className="w-9" src={item.icon} alt="" style={{ filter: 'brightness(0) invert(1)' }} />
                    <h2 className=" font-extrabold text-2xl">{item.service}</h2>
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
  );
};

export default ServiceSection;
