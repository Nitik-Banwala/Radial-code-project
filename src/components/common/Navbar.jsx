import { useState, useEffect } from "react";
import { NAV_LIST } from "../../utils/helper";
import Button from "./Button";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [hamburgerState, setHamburgerState] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerState((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = hamburgerState ? "hidden" : "auto";
  }, [hamburgerState]);

  return (
    <div
      className="w-full sticky
     top-0 mx-auto border-b border-b-black/10 px-4 bg-white py-6 z-20 flex items-center"
    >
      <div className="max-w-285 w-full justify-between mx-auto flex items-center">
        <Link to={"/"} className="lg:h-7.25 h-5 max-w-46.75 z-20 ">
          <img
            src="/assets/images/webp/logo.webp"
            alt="logo"
            className="h-full w-full"
          />
        </Link>
        <ul
          className={`${
            hamburgerState
              ? "translate-x-0 bg-white"
              : "translate-x-full md:translate-x-0"
          } flex flex-col justify-center items-center gap-4
            fixed top-0 left-0 h-screen z-10 w-full 
            transition-all duration-200 ease-linear
            md:static md:h-auto md:w-auto md:flex-row md:bg-transparent
            xl:gap-8 lg:gap-5 md:gap-3`}
        >
          {NAV_LIST.map((nav, i) => (
            <li
              key={i}
              className={`${nav.path === location.pathname ? "font-semibold  text-black" : " text-grey font-normal"}  leading-150 whitespace-nowrap`}
            >
              <Link to={nav.path} onClick={() => setHamburgerState(false)} className="li">
                {nav.title}
              </Link>
            </li>
          ))}
          <div className="group w-fit xl:ml-28.25 lg:ml-20 md:ml-4 ml-2">
            <Button
              text={"Log In"}
              icon={
                <Icons
                  icon={"logIn"}
                  pathClass={"group-hover:fill-black duration-300 ease"}
                />
              }
              className={
                "bg-black text-white border-transparent border group-hover:text-black group-hover:border-black group-hover:bg-white whitespace-nowrap md:py-3.25 py-2 xl:px-8 md:pl-5 px-5  rounded-full"
              }
            />
          </div>
        </ul>
        {hamburgerState ? (
          <span
            className="md:hidden block text-2xl z-10 cursor-pointer"
            onClick={() => handleHamburgerClick()}
          >
            <RxCross2 />
          </span>
        ) : (
          <span
            className="md:hidden block text-2xl z-10 cursor-pointer"
            onClick={() => handleHamburgerClick()}
          >
            <GiHamburgerMenu />
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
