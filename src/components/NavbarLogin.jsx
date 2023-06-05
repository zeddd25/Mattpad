import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <div className="absolute bg-[#ffeded] w-full h-[55px] flex justify-around items-center font-outfit shadow-sm">
      <div className="text-[24px] font-bold flex gap-1">
        <NavLink to={"/"}>Mattpad</NavLink>
        <NavLink to={"/"}>
          <div className="logo w-[42px] h-[30px]"></div>
        </NavLink>
      </div>
      <div className="text-[18px] font-light">
        <NavLink to={"/register"}>Buat akun, Daftar</NavLink>
      </div>
    </div>
  );
};

export default NavbarLogin;
