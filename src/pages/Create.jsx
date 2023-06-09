import React, { useState } from 'react';
import NavbarCreate from '../components/NavbarCreate';
import { AiOutlineFileImage } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SelectCategory from '../components/SelectCategory';
import instance from '../api/api';

const Create = () => {
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [category_id, setCategory_id] = useState();
  const navigate = useNavigate();

  const onCategoryChange = (category_id) => {
    setCategory_id(category_id);
  };

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setGambar(e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!judul || !deskripsi || !gambar) {
      alert('Semua inputan harus di isi!!!');
      return;
    }

    if (photo.size > 2097152) {
      // 3145728 byte = 3 MB
      alert("Ukuran file gambar tidak boleh melebihi 2MB!");
      setButtonStatus("Tambah");
      return;
    }

    setIsLoading(true);

    let data = new FormData();
    data.append('judul', judul);
    data.append('deskripsi', deskripsi);
    data.append('gambar', gambar);
    data.append('category_id', category_id); 

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/create',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setResponseMessage('Selamat Cerita anda berhasil dibuat!');
        setIsLoading(false);
        navigate(`/dashboard`);
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage('Terjadi kesalahan saat membuat cerita.');
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <NavbarCreate />
      <div className="font-outfit flex justify-center items-center mt-2">
        {image ? (
          <img
            className="w-[130px] h-[196px] flex justify-center items-center object-cover cursor-pointer"
            src={image ? image : photo === null}
            onClick={() => {
              document.querySelector('#input-file').click();
            }}
            alt=""
          />
        ) : (
          <div
            className="flex flex-col text-center justify-center items-center w-[130px] h-[196px] border rounded-md cursor-pointer bg-[#EFEFEF]"
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
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Cerita tak berjudul"
          />
          <p>Isi Cerita</p>
          <textarea
            className="w-full resize-y rounded-md h-full border outline-none"
            cols="30"
            rows="10"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
          <SelectCategory onCategoryChange={onCategoryChange} />
        </div>
      </div>
      <div className="font-outfit flex justify-center items-center">
        <button
          className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-5"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Buat Cerita'}
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

export default Create;
