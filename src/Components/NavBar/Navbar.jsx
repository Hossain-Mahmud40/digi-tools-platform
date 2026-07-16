const Navbar = ({ cartCount, navLinks }) => {
  return (
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
        <button className="btn btn-ghost btn-sm relative hidden text-[#101727] hover:bg-transparent hover:text-[#4f39f6] sm:flex">
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
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold leading-none text-white">
              {cartCount}
            </span>
          )}
        </button>
        <button className="btn btn-ghost btn-sm hidden text-[#101727] hover:bg-transparent hover:text-[#4f39f6] sm:flex">
          Login
        </button>
        <button className="btn border-0 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] px-6 text-white shadow-none hover:opacity-90">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
