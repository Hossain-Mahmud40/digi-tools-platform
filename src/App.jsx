import "./App.css";

function App() {
  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <>
      <div className="navbar border-b border-gray-100 bg-white px-6 py-4 shadow-sm lg:px-28">
        <div className="navbar-start lg:flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-white p-2 text-gray-700 shadow"
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold text-[#6c2ffb] hover:bg-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-1">
          <ul className="menu menu-horizontal gap-4 px-1 text-sm font-medium text-[#101727]">
            {navLinks.map((link) => (
              <li key={link}>
                <a className="hover:bg-transparent hover:text-[#4f39f6]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-4 lg:flex-1">
          <button className="btn btn-ghost btn-sm hidden text-[#101727] hover:bg-transparent hover:text-[#4f39f6] sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5.4 5M7 13l-2 5h14M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-sm hidden text-[#101727] hover:bg-transparent hover:text-[#4f39f6] sm:flex">
            Login
          </button>
          <button className="btn border-0 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-6 text-white shadow-none hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
      <section className="bg-white">
        <div className="hero min-h-[620px] px-6 py-16 lg:px-28 lg:py-20">
          <div className="hero-content w-full max-w-[1200px] justify-between gap-12 p-0 text-left flex-col lg:flex-row-reverse">
            <img
              src="/assets/banner.png"
              alt="Digital workflow tools"
              className="w-full max-w-[360px] rounded-lg object-cover sm:max-w-[420px] lg:max-w-[500px]"
            />
            <div className="max-w-[640px]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ebe8ff] px-4 py-2 text-sm font-medium text-[#4f39f6]">
                <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
                New: AI-Powered Tools Available
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-[#101727] sm:text-5xl lg:text-6xl">
                Supercharge Your Digital Workflow
              </h1>
              <p className="mt-5 max-w-[560px] text-base leading-8 text-[#627382]">
                Access premium AI tools, design assets, templates, and
                productivity software-all in one place. Start creating faster
                today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="btn border-0 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-7 text-white shadow-none hover:opacity-90">
                  Explore Products
                </button>
                <button className="btn border-[#7c3aed] bg-white px-7 text-[#4f39f6] hover:border-[#4f39f6] hover:bg-[#f5f3ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3l14 9-14 9V3Z"
                    />
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
