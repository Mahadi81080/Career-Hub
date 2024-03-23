import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-[#f8f9ff] px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">
              <a>Statistics</a>
            </NavLink>
            <NavLink to="/applied jobs">
              <a>Applied Jobs</a>
            </NavLink>
            <NavLink to="/blogs">
              <a>Blog</a>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "font-bold"
            }
          >
            <a>Statistics</a>
          </NavLink>
          <NavLink to="/applied jobs" className={({isActive})=>isActive?'text-primary font-bold':"font-bold"}>
            <a>Applied Jobs</a>
          </NavLink>
          <NavLink to="/blogs" className={({isActive})=>isActive?'text-primary font-bold':"font-bold"}>
            <a>Blog</a>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Button</a>
      </div>
    </div>
  );
};

export default Header;
