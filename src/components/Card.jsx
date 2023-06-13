import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import instance from "../api/api";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/profile",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData(response.data.Data);
          console.log(response.data.Data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Anda yakin ingin menghapus buku ini?");
    if (isConfirmed) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `/delete/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      instance
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          const newData = data.filter((item) => item.id !== id);
          setData(newData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
    {data?.map((item) => {
      return (
    <div
      className="relative flex items-center justify-center w-[130px] h-[196px] max-w-sm mt-6 overflow-hidden transition duration-200 ease-in-out transform shadow-xl group hover:-translate-y-2"
      tabIndex="0"
      key={item.id}
    >
      <img
        src={item.gambar}
        alt="sampu.buku"
        className="absolute z-0 object-cover object-center w-[178px] h-full group-hover:mb-1 group-focus:mb-1 rounded-[4px]"
      />
      <div className="relative z-10 w-[178px] h-[13rem] pt-[68px] lg:pt-[56px] transition duration-200 ease-in-out transform bg-black opacity-0 rounded-[4px] bg-opacity-30 group-hover:-translate-y-0 group-focus:-translate-y-0 group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100">
        <div className="flex flex-col items-start justify-center px-16 py-6 rounded-[4px]">
          <div className="max-w-md ml-2  text-xl text-white transition duration-200 ease-in-out delay-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 focus:opacity-100"></div>
          <div
            href="/"
            className="flex justify-center w-24 mt-4 transition duration-200 ease-in-out delay-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 focus:opacity-100"
          >
            <div className="relative tracking-wider text-center text-white duration-150 ease-in-out border-b-4 border-white cursor-pointer hover:text-gray-100 hover:border-gray-100 hover:px-2 transision-all"></div>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between h-20 px-4 py-4 text-sm bg-white rounded-b-[4px]">
          <div className="text-gray-800 transition duration-200 ease-in-out delay-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
            {item.judul}
          </div>
          <div>
            <button className="hover:text-gray-400 text-lg">
              <AiFillDelete onClick={() => handleDelete(item.id)}/>
            </button>
            <NavLink to={`/edit/${item.id}`}>
            <button className="hover:text-gray-400 text-lg">
              <AiFillEdit />
            </button>
            </NavLink>
            </div>
          </div>
          </div>
          </div>
          );
            })}
      </>
  );
};

const CardLong = ({ key, src, judul }) => {
  return (
    <div key={key} className="cursor-pointer font-outfit max-w-md mx-auto rounded-[4px] overflow-hidden shadow-lg">
      <img className="w-full h-56 object-cover object-center" src={src} alt="Sampul Buku" />
      <div className="text-center mx-auto py-4">
        <div className="font-semibold text-lg mb-2 text-gray-900">{judul}</div>
        {/* <p className="text-center rounded-full text-sm p-1 font-semibold bg-[#EEEEEE] text-[#6F6F6F]">KATEGORI</p> */}
      </div>
    </div>
  );
};

export { Card, CardLong };
