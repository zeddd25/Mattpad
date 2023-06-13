import React, { useState, useEffect } from 'react';
import { AiOutlineUserAdd, AiFillCamera, AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import axios from 'axios';
import instance from '../api/api';

const Profile = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };


  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `/user`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData([response.data]);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

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
          >
            Edit Profil
          </button>
        </div>
      </nav>

      {/* Profile picture */}
      {data?.map((item) => {
      return (
      <div className="relative w-full h-[250px]" key={item.User.id}>
        <div className="flex justify-center items-center w-full h-[250px] bg-gradient-to-b from-[#F7E1D2] to-[#FFEDED]">
          <div className="font-outfit flex flex-col mb-1 justify-center items-center rounded-full">
            {image ? (
              <img
                className="w-[125px] object-cover h-[125px] border border-black rounded-full flex justify-center items-center"
                src={item.User.gambar}
                alt="foto.profile"
              />
            ) : (
              <div
                className="flex flex-col justify-center items-center w-[125px] h-[125px] border rounded-full cursor-pointer bg-gradient-to-b from-white to-slate-200"
                onClick={() => {
                  document.querySelector("#input-file").click();
                }}
              >
                <AiOutlineUserAdd className='text-2xl'/>
              </div>
            )}
            <h1 className="font-outfit text-center text-[24px] flex mb-5">{item.User.email}</h1>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2 items-center leading-3">
                <p>{item.User.number_phone}</p>
                <p>no handphone</p>
              </div>
            <div className="flex flex-col gap-2 items-center leading-3">
              <p>{item["Jumlah Post"]}</p>
              <p>postingan</p>
              </div>
              <div className="flex flex-col gap-2 items-center leading-3">
                <p>{item.User.tanggal_lahir}</p>
                <p>tanggal lahir</p>
              </div>
            </div>
            <input hidden type="file" id="input-file" onChange={fileChangeHandler} />
          </div>
        </div>
        <hr className='border-1 border-[#F7E1D2]' />
      </div>
          );
        })}
       <h1 className='text-2xl tracking-tighter mt-5 capitalize'>Cerita oleh {userName}</h1>
      <div className="max-w-4xl flex overflow-y-scroll justify-center items-start h-[480px] text-center p-2 gap-2 flex-wrap ">
      <Card />
      </div>
    </div>
  );
};

export default Profile;
