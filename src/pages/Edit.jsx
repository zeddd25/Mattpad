import React, { useState } from 'react';
import NavbarEdit from '../components/NavbarEdit';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import instance from '../api/api';

const Edit = () => {
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();
  let { id } = useParams(); 

  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
    let config = {
    method: "post",
        maxBodyLength: Infinity,
        url: `/detail-post/${id}`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")} `,
        
    },
    }

    instance
    .request(config)
    .then((response) => {
        setIsLoading(false)
        console.log(response.data);
        setJudul(response.data[0].judul);
        setDeskripsi(response.data[0].deskripsi);
        setImage(response.data[0].gambar);
        fetch(response.data[0].gambar)
            .then((response) => response.blob())
            .then((res) => {
                const file = new File([res], "image", {type: res.type});
                setGambar(file)
            });
    }) 
    .catch((error) => {
        console.log(error);
        setIsLoading(false)
    });
    };
    getData();
  }, []);

  const handleJudulChange = (e) => {
    setJudul(e.target.value)
  }

  const handleDeskripsiChange = (e) => {
    setDeskripsi(e.target.value)
  }

    const fileChangeHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setGambar(e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!judul || !deskripsi || !gambar) {
      alert('Semua inputan harus di isi!!!');
      return;
    }

    if (gambar.size > 2097152) {
      // 3145728 byte = 3 MB
      alert("Ukuran file gambar tidak boleh melebihi 3MB!");
      setButtonStatus("Tambah");
      return;
    }

    setIsLoading(true);

    const token = localStorage.getItem("token");
    const endpoint = `/edit/${id}`
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
            
        },
    };

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi)
    formData.append("gambar", gambar)
    

    instance
      .post(endpoint, formData, config)
      .then((response) => {
        console.log(response.data);
        setResponseMessage('Selamat Cerita anda berhasil di Update!');
        setIsLoading(false);
        navigate("/profile")
      })
      .catch((error) => {
        console.log(error.response.data);
        setResponseMessage('Terjadi kesalahan saat mengupdate cerita.');
        setIsLoading(false);
      });
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <NavbarEdit />
      <div className="font-outfit flex justify-center items-center mt-2">
        {image ? (
          <img
            className="w-[130px] h-[196px] flex justify-center items-center object-cover"
            src={image ? image : gambar === null}
            onClick={() => {
              document.querySelector('#input-file').click();
            }}
            alt=""
          />
        ) : (
          <div
            className="flex flex-col text-center justify-center items-center w-[130px] h-[196px] border rounded-md bg-[#EFEFEF]"
            onClick={() => {
              document.querySelector('#input-file').click();
            }}
          >
            <AiOutlineFileImage className="text-[50px]" />
            <p className="text-[12px] font-normal">Tambahkan sampul</p>
          </div>
        )}
      </div>
      <input hidden type="file" id="input-file" onChange={fileChangeHandler} />
      <div className="flex justify-center items-center">
        <div className="font-outfit w-full bg-white shadow-lg m-5 rounded-lg p-5 h-full md:w-[720px]">
          <p>Detail cerita</p>
          <hr className="border-1 border-[#000000]" />
          <p>Judul</p>
          <input
            className="w-full h-full rounded-md border outline-none p-2"
            type="text"
            value={judul}
            onChange={handleJudulChange}
            placeholder="Cerita tak berjudul"
          />
          <p>Isi Cerita</p>
          <textarea
            className="w-full resize-y rounded-md h-full border outline-none"
            cols="30"
            rows="10"
            value={deskripsi}
            onChange={handleDeskripsiChange}
          ></textarea>
        </div>
      </div>
      <div className="font-outfit flex justify-center items-center">
        <button
          className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-5"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Update Cerita'}
        </button>
      </div>
      {responseMessage && (
        <div className="flex justify-center items-center mt-3 text-slate-600 font-bold">
          {responseMessage}
        </div>
      )}
    </form>
  );
};

export default Edit;
