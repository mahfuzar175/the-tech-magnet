import background from '../assets/images/tech.jpg'
import { FaStar } from 'react-icons/fa';
const SpacialPackages = () => {
    return (
        <div className="py-16 font-quicksand"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <div className="container mx-auto text-center">
            <h2 className="text-center text-white font-bold text-5xl mb-8">
            Special Offer
          </h2>
            <div className="bg-white bg-opacity-65 p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                    <FaStar className="text-yellow-500 text-4xl mr-2" /> {/* Adding an icon */}
                    <h3 className="text-2xl text-gray-800">Limited Time Offer!</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">Don't miss out on this exclusive offer! Upgrade your tech experience today with our special packages.</p>
                <a
            href="#"
            className="text-white lg:text-xl bg-gradient-to-r from-[#f73d91] to-[#801eb2]  py-3 px-16 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Explore More!
          </a>
            </div>
        </div>
    </div>
);
};


export default SpacialPackages;