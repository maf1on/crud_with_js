import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white-950 h-[70px] text-blue-950 flex items-center px-[90px] sticky top-0 left-0">
        <div className="left">
          <Link to={'/'} className="text-3xl">
            Avion
          </Link>
        </div>
        <div className="right absolute right-[90px] flex justify-normal gap-[90px]">
          <ul className="flex justify-end items-center gap-[20px]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/product"}>Product</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
          </ul>

          <div className="icons flex gap-[20px] items-center text-2xl">
            <Link to={'/basket'}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
