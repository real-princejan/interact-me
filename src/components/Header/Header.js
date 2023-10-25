import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import intLOGO from "../../assets/images/interactlogo.SVG";
import { useDispatch } from "react-redux";
import { RESET_AUTH, logout } from "../../redux/features/auth/authSlice";
import ShowOnLogin, {
  ShowOnAdmin,
  ShowOnLogout,
} from "../HiddenLink/hiddenLink";
import { UserName } from "../../pages/profile/Profile";

const navLink = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/checkin",
    display: "Activities",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-[80px] border-b relative">
      <div className="md:max-w-[1080px] sm:max-w-[600px] m-auto w-full h-full flex justify-between items-center relative">
        <Link to="/">
          <img alt="none" src={intLOGO} className="h-[45px] hover:opacity-75" />
        </Link>

        {/* Mobile Responsive View Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="flex items-center space-x-2 m-4 font-[500]">
            {toggle ? (
              <>
                <i className="ri-close-line text-gray-600" />
                <span className="text-gray-600">Close</span>
              </>
            ) : (
              <>
                <i className="ri-menu-3-fill text-gray-600" />
                <span className="text-gray-600">Menu</span>
              </>
            )}
          </div>
        </div>

        {/* Navbar */}
        <ShowOnLogin>
          <div
            className={`hidden md:flex items-center space-x-6 font-semibold text-sm`}
          >
            {navLink.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-gray-600 hover:text-greenColor"
              >
                {link.display}
              </NavLink>
            ))}
          </div>
        </ShowOnLogin>

        {/* Navbar Right Side */}
        <div
          className={`hidden md:flex space-x-6 text-sm font-semibold text-greenColor`}
        >
          <ShowOnLogin>
            <div className="relative" data-te-dropdown-ref>
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-1 gap-2 rounded-lg bg-transparent border hover:animate-pulse"
              >
                <i className="ri-user-line" /> Hi,
                <UserName />
                <i
                  className={`ri-arrow-down-s-line ml-1 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                ></i>
              </button>
              <ul
                className={`absolute right-0 mt-2 w-48 py-2 bg-white border border-gray-200 shadow-md rounded-lg z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
                data-te-dropdown-menu-ref
              >
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    data-te-dropdown-item-ref
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <Link
                    to="/support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    data-te-dropdown-item-ref
                  >
                    Manage Chat Support
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/"}
                    onClick={logoutUser}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    data-te-dropdown-item-ref
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </ShowOnLogin>
          <ShowOnLogout>
            <div className="relative" data-te-dropdown-ref>
              <Link
                to="/login"
                className="flex items-center px-4 py-1 gap-2 cursor-pointer bg-transparent border border-none hover:opacity-90"
              >
                <h6>Login</h6>
              </Link>
            </div>
            <div className="relative" data-te-dropdown-ref>
              <Link
                to="/register"
                className="flex items-center px-4 py-1 gap-2 cursor-pointer rounded-lg text-white bg-greenColor border hover:opacity-90"
              >
                <h6>Register</h6>
              </Link>
            </div>
          </ShowOnLogout>
        </div>
      </div>

      {/* Mobile Responsive View Menu */}
      {toggle && (
        <div className="md:hidden p-4 w-full px-8 bg-gray-100 absolute top-[80px] left-0 z-10">
          <ul className="flex flex-col space-y-4 font-semibold text-sm">
            <ShowOnLogout>
              <Link to="/login" className="text-gray-600 hover:text-greenColor">
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-600 hover:text-greenColor"
              >
                Register
              </Link>
            </ShowOnLogout>
            <ShowOnLogin>
              {navLink.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="text-gray-600 hover:text-greenColor"
                >
                  {link.display}
                </NavLink>
              ))}
              <Link
                to="/profile"
                className="text-gray-600 hover:text-greenColor"
              >
                My Profile
              </Link>
              <Link
                to={"/"}
                onClick={logoutUser}
                className="text-gray-600 hover:text-greenColor"
                data-te-dropdown-item-ref
              >
                Logout
              </Link>
            </ShowOnLogin>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
