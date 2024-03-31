import Container from "../Container/Container";

const Navbar = () => {
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
              <div className="flex-1 mx-2 md:mx-0 text-4xl font-bold" style={{background: "-webkit-linear-gradient(45deg, #801eb2, #f73d91)","-webkit-background-clip": "text","-webkit-text-fill-color": "transparent"}}>Tech Magnet</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal text-lg font-semibold">
                  {/* Navbar menu content here */}
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
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
            <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Services</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
