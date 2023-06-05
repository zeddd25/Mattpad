import Modal from "react-modal";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


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

const Logout = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    };
    
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Logout Confirmation"
        style={customStyles}
        ariaHideApp={false}
      >
        <p className="text-black text-[24px] font-outfit text-center">
          Anda yakin ingin Log out ??
        </p>

        <div className="font-outfit flex justify-center gap-4 mt-10">
          <NavLink to={"/"} onClick={handleLogout}>
            <button className="text-black text-[20px] ring-2 ring-black rounded-[38px] w-[127px] h-[42px] hover:bg-black hover:text-white">
              Yakin
            </button>
          </NavLink>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[20px] ring-2 ring-black rounded-[38px] w-[127px] h-[42px] hover:bg-black hover:text-white"
          >
            Batal
          </button>
        </div>
      </Modal>
      <button 
      onClick={() => setIsOpen(true)}
      className="flex justify-center text-gray-800 p-1 hover:bg-black hover:text-white hover:underline decoration-solid rounded-full w-full h-full">
      Logout
    </button>
    </div>
  );
};

export default Logout;
