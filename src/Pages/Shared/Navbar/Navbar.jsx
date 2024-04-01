import Container from "../Container/Container";
import icon from "../../../assets/images/icon/tech.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer drawer-end font-quicksand bg-white">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full  fixed z-30 bg-white navbar border border-b">
            <Container>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div
                className="flex-1 mx-2 md:mx-0 text-4xl font-bold"
                style={{
                  background:
                    "-webkit-linear-gradient(45deg, #801eb2, #f73d91)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                <a href="#" className="flex justify-start items-center">
                  <img className="w-11" src={icon} alt="" />
                  <span className="mb-1">Tech Magnet</span>
                </a>{" "}
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-lg font-semibold">
                  {/* Navbar menu content here */}
                  {navLinks}
                </ul>
              </div>
            </Container>
          </div>
        </div>
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-lg font-semibold">
            <button
              className="btn btn-circle mb-5"
              onClick={() => {
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Sidebar content here */}
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
