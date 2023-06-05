import React, { useState } from 'react';
import { AiOutlineUserAdd, AiFillCamera, AiFillEdit, AiTwotoneDelete } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Card, CardLong } from '../components/Card';

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('@romy yuza');
  const [editingUsername, setEditingUsername] = useState(false);

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const toggleEditUsername = () => {
    setEditingUsername(!editingUsername);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    // Perform API call or update the user data in the backend
    toggleEditUsername();
  };

  const userName = localStorage.getItem("userName")

  return (
    <div className="font-outfit flex flex-col items-center">
      <nav className="w-full flex justify-between items-center p-2 shadow-sm font-outfit">
        <NavLink to={"/dashboard"}>
          <IoIosArrowBack className="text-4xl" />
        </NavLink>
        <div className="flex items-center text-[14px] font-semibold gap-1 text-[#242423]">
          <button
            className="w-[120px] h-[40px] bg-black text-white rounded-full"
            onClick={toggleEditUsername}
          >
            Edit Profil
          </button>
        </div>
      </nav>

      {/* Profile picture */}
      <div className="relative w-full h-[250px]">
        {/* Overlay */}
        {editingUsername && (
          <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center bg-black bg-opacity-50">
            <button
              onClick={() => {
                document.querySelector("#input-file").click();
              }}
            >
              <div className="px-2 py-2 w-full flex gap-[5px] items-center bg-black rounded-md text-white border border-white">
                <AiFillCamera className="text-lg"/>
                <p>Ubah gambar latar belakang</p>
              </div>
            </button>
            <form onSubmit={handleUsernameSubmit} className="flex flex-col gap-2 text-white">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="px-2 py-2 w-full bg-transparent border border-white rounded-md focus:outline-none"
              />
              <button type="submit" className="px-2 py-2 w-full border bg-black text-white rounded-md">
                Simpan
              </button>
            </form>
          </div>
        )}

        {/* Profile Picture */}
        <div className="flex justify-center items-center w-full h-[250px] bg-gradient-to-b from-[#F7E1D2] to-[#FFEDED]">
          <div className="font-outfit flex flex-col mb-1 justify-center items-center rounded-full">
            {image ? (
              <img
                className="w-[125px] object-cover h-[125px] border border-black rounded-full flex justify-center items-center"
                src={image}
                alt=""
              />
            ) : (
              <div
                className="flex flex-col justify-center items-center w-[125px] h-[125px] border rounded-full cursor-pointer bg-gradient-to-b from-white to-slate-200"
                onClick={() => {
                  document.querySelector("#input-file").click();
                }}
              >
                <AiOutlineUserAdd className='text-3xl'/>
              </div>
            )}
            <h1 className="font-outfit text-center text-[24px] flex mb-5">{username}</h1>
            <div className="flex gap-7">
              <div className="flex flex-col items-center leading-3">
                <p>3</p>
                <p>karya</p>
              </div>
              <div className="flex flex-col items-center leading-3">
                <p>13</p>
                <p>disukai</p>
              </div>
              <div className="flex flex-col items-center leading-3">
                <p>9</p>
                <p>komentar</p>
              </div>
            </div>
            <input hidden type="file" id="input-file" onChange={fileChangeHandler} />
          </div>
        </div>
      </div>

      {/* Table code */}
      <div className="w-full text-center">
        <h2 className="font-outfit text-2xl mt-8 mb-4 px-2">Daftar Buku</h2>
        <div className="flex gap-4 justify-center">
        <div>
        <CardLong
          title="Judul Buku 3"
          description="Romance"
          image="https://img.wattpad.com/cover/285086938-100-k948675.jpg"
        />
        </div>
        <div>
        <CardLong
          title="Judul Buku 3"
          description="Romance"
          image="https://img.wattpad.com/cover/285086938-100-k948675.jpg"
        />
        </div>
        <div>
        <CardLong
          title="Judul Buku 3"
          description="Romance"
          image="https://img.wattpad.com/cover/285086938-100-k948675.jpg"
        />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
