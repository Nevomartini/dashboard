// @ts-nocheck
import { useState } from "react";
import bank from "../assets/bank.png";
import { navLinks } from "../constant";
import { nav_icon, notif_icon, search_icon } from "../utils/svgs";
import NavLink from "./links/NavLink";

const userImg =
  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg";

const Header = () => {
  const [active, setActive] = useState("Overview");
  return (
    <nav className="flex items-center justify-between w-full px-3 pt-4 pb-3 space-x-4">
      <div className="border-b border-blue-900 w-[25%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start ">
        <img className="w-10 h-10 md:w-12 md:h-12" src={bank} alt="logo" />
        <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md">
          OpenBank
        </h1>
      </div>
      {/* navLinks */}
      <div className="border-b pb-5 border-blue-900 w-[140%] flex items-center justify-center space-x-2">
        {navLinks.map((link) => (
          <div
            onClick={() => setActive(link)}
            className="relative flex items-center justify-center"
          >
            <NavLink link={link} key={link.id} />
            <div
              className={`${
                link === active
                  ? "flex items-center justify-center absolute -bottom-3"
                  : "hidden"
              }`}
            >
              {nav_icon}
            </div>
          </div>
        ))}
      </div>

      {/* login */}
      <div className="border-b border-blue-900 pb-6 pt-4 hidden md:flex items-center justify-center px-3 space-x-6 w-[60%] ">
        <div>{search_icon}</div>
        <div>{notif_icon}</div>
        <img
          src={userImg}
          alt="logo"
          className="object-contain object-center w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Header;
