import { MdSettingsBackupRestore } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
      <div className="grid h-screen px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-[#f73d91] text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4  font-medium mb-4">We can't find that page.</p>
          <Link
              to="/"
              smooth={true}
              duration={500}
              className="text-white lg:text-xl bg-gradient-to-r from-[#f73d91] to-[#801eb2]  py-3 px-16 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center h-14 text-base text-centerno-underline align-middle  bg-transparent  bg-gray-950 border-gray-950  hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Go Back Home
              <MdSettingsBackupRestore className="ml-2 mt-1 text-2xl" />
            </Link>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;