const Banner = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 mt-16 h-screen text-white overflow-hidden font-quicksand">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="xl:text-7xl text-4xl font-bold leading-tight mb-4">
          EMPOWERING TECHNOLOGIES
          </h1>
          <p className="lg:text-2xl text-gray-300 mb-8">
          The Ultimate Destination for Comprehensive Services and Solutions!
          </p>
          <a
            href="#"
            className="text-white border-2 lg:text-2xl hover:bg-gradient-to-r from-[#f73d91] to-[#801eb2] py-3 px-12 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
