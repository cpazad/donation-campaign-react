import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = <>
    <li className="my-2"><NavLink to="/"> Home </NavLink></li>
    <li className="my-2"><NavLink to="/donations"> Donation </NavLink></li>
    <li className="my-2"><NavLink to="/statistics"> Statistics </NavLink></li>

  
  </>
    return (
    <div className="navbar bg-base-100 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/home"><img className="w-32 sm:w-44" src="/Logo.png" alt="Company logo" /></Link>
        {/* <a className="btn btn-ghost normal-case text-xl"> <img className="w-32 sm:w-44" src="public\Logo.png" alt="Company logo" /> </a> */}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {links}
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
