import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import React, { useState, useRef } from 'react';
import Logout from "./Logout";

const NavbarDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== imgRef.current) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Menggunakan useEffect untuk menambahkan event listener ketika komponen dimount
  React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* MOBILE */}
      <nav className="lg:hidden w-full flex justify-center items-center gap-10 h-[55px] shadow-sm">
        <div className="text-[24px] font-bold flex gap-1 ml-4">
          <NavLink to={"/"}>Mattpad</NavLink>
          <NavLink to={"/"}>
            <div className="logo w-[42px] h-[30px]"></div>
          </NavLink>
        </div>
        <div className="flex items-center h-[35px] w-[251px] rounded-full pl-2 bg-white mr-4">
          <BiSearch className="text-[30px]" />
          <input
            type="text"
            placeholder="Search for stories"
            className="outline-none text-sm rounded-full p-1 h-[35px] w-full"
          />
        </div>
      </nav>

      {/* DEKSTOP */}
      <nav className="hidden w-full lg:flex justify-between items-center gap-10 h-[55px] shadow-sm">
        <div className="flex gap-14">
          <div className="text-[24px] font-bold flex gap-1 ml-4">
            <NavLink to={"/"}>Mattpad</NavLink>
            <NavLink to={"/"}>
              <div className="logo w-[42px] h-[30px]"></div>
            </NavLink>
          </div>
          <div className="flex items-center h-[35px] w-[251px] rounded-full pl-2 bg-white mr-4">
            <BiSearch className="text-[30px]" />
            <input
              type="text"
              placeholder="Search for stories"
              className="outline-none text-lg rounded-full p-1 h-[35px] w-full"
            />
          </div>
        </div>
        <div className="flex  items-center px-2">
          <NavLink to={"/create"}>
            <button className="w-[103px] h-[35px] bg-black text-white rounded-full text-[12px] font-semibold ml-4">
              Buat Cerita +
            </button>
          </NavLink>
          <div className="flex flex-col px-4" onClick={toggleDropdown}>
          <span className="animate-bounce absolute h-[10px] w-[10px] right-6 rounded-full bg-[#31A24C]"></span>
            <img
              ref={imgRef}
              src="../public/images/hengker.png"
              className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
              alt="profile"
            />
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="drop hidden absolute lg:flex flex-col gap-2 w-36 items-center right-0 top-0 mt-14 bg-white shadow-lg shadow-black-600 p-2 pt-5 pb-5"
        >
          <button className="text-gray-800 p-1 hover:bg-black hover:underline decoration-solid hover:text-white rounded-full w-full">
            <NavLink to={"/profile"}>Profil saya</NavLink>
          </button>
          <button className="text-gray-800 p-1 rounded-full w-full">
            <Logout />
          </button>
        </div>
      )}
    </>
  );
};

export default NavbarDashboard;
