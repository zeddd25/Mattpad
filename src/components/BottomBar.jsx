import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import React, { useState, useRef } from 'react';
import Logout from "./Logout";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '14px',
      boxShadow: '0 7px 14px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '336px',
      width: '100%',
      background: '#FFFFFF',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
    },
  };

  Modal.setAppElement('#root');

const BottomBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== imgRef.current) {
      setIsOpen(false);
    }
  };


    React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-outfit flex justify-between bg-[#ffeded] items-center w-screen h-[55px] rounded-t-xl fixed border bottom-0 lg:hidden">
    <NavLink to={"/create"}>
    <button className="w-[103px] h-[35px] bg-black text-white rounded-2xl text-[12px] font-semibold ml-4">
    Buat Cerita +
    </button>
    </NavLink>

    <div className="flex flex-col px-4" onClick={toggleDropdown}>
    <span className="animate-bounce absolute h-[10px] w-[10px] right-4 overflow-hidden rounded-full bg-[#31A24C]"></span>
            <img
              ref={imgRef}
              src="../public/images/hengker.png"
              className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full "
              alt="profile"
            />
          </div>

        {isOpen && (
        <div
          ref={menuRef}
          className="dropop absolute flex flex-col gap-2 w-36 items-center right-0 bottom-14 mt-14 bg-white shadow-lg p-2 pt-5 pb-5"
        >
          <button className="text-gray-800 p-1 hover:bg-black hover:text-white hover:underline decoration-solid rounded-full w-full">
            <NavLink to={"/profile"}>Profil saya</NavLink>
          </button>
          <button className="text-gray-800 p-1 rounded-full w-full">
            <Logout />
          </button>
        </div>
      )}
    </div>
    
  );
};

export default BottomBar;
