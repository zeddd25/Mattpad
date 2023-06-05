import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavbarHome = () => {
  return (
    <>
    <div className="w-full h-[55px] flex justify-around items-center bg-white shadow-sm font-outfit">
      <div className="text-[24px] font-bold">
      <div className="text-[24px] font-bold flex gap-1 ">
        <NavLink to={"/"}>Mattpad</NavLink>
        <NavLink to={"/"}>
        <div className="logo w-[42px] h-[30px]"></div>
        </NavLink>
      </div>
      </div>
      <div className="flex items-center text-[14px] font-semibold gap-1 text-[#242423]">
      <NavLink to={"/login"}>Masuk</NavLink>
      <FiArrowUpRight />
      <NavLink to={"/register"}>Daftar</NavLink>
      <FiArrowUpRight />
      </div>
    </div>


    <nav className="h-[55px] w-full flex justify-center gap-12 items-center p-2 shadow-sm font-outfit">
          <div className="text-[24px] font-bold">
            <div className="text-[24px] font-bold flex gap-1 ">
              <NavLink to={"/"}>Mattpad</NavLink>
              <NavLink to={"/"}>
                <div className="logo w-[42px] h-[30px]"></div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center text-[14px] font-semibold gap-1 text-[#242423]">
            <NavLink to={"/login"}>Masuk</NavLink>
            <FiArrowUpRight />
            <NavLink to={"/register"}>Daftar</NavLink>
            <FiArrowUpRight />
          </div>
        </nav>
    </>
  );
};

export default NavbarHome;
