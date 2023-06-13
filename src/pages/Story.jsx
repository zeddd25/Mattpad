import { AiOutlineSend } from "react-icons/ai";
import ButtonLike from "../components/ButtonLike";
import NavbarStory from "../components/NavbarStory";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import instance from "../api/api";

const Story = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/dashboard");
      }
      checkUserToken();
    };
  }, []);

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `/detail-post/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <>
      <NavbarStory />
      {data?.map((item) => {
      return (
        <div className="flex justify-center my-6 lg:my-0 lg:mt-10 flex-wrap" key={item.id}>
          <div className="flex flex-col gap-2">
            <img src={item.gambar} alt="sampul.buku" className="rounded-md w-[130px] h-[196px] object-cover"/>
            <ButtonLike />
          </div>
          <div className="px-10 flex flex-col gap-2 justify-start relative overflow-hidden">
            <div className="container-scroll scroll-smooth relative w-full px-6 py-12 h-[500px] border-2 border-slate-700  rounded-lg shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-7 lg:pb-28">
              <h1 className="font-outfit mx-auto text-3xl font-bold text-center text-black">{item.judul}</h1>
              <div className="mt-8 prose prose-slate mx-auto lg:prose-lg leading-8 tracking-tight text-[18px] text-[#222222]">
                <p>
                {item.deskripsi}
                </p>
              </div>
            </div>
            <div className="w-full lg:max-w-4xl sm:max-w-3xl font-outfit flex items-center gap-10 px-2 mx-auto rounded-3xl border-2 border-slate-700 ">
              <input className="p-3 w-full bg-transparent outline-none font-medium" type="text" placeholder="Tulis komentar..."/>
              <button>
                <AiOutlineSend className="text-3xl text-slate-700 hover:text-slate-900"/>
              </button>
            </div>
            <div className="w-full lg:max-w-4xl sm:max-w-3xl font-outfit mx-auto border-2 rounded-xl border-slate-700 py-4 p-2 flex flex-col gap-2 h-[230px] overflow-y-scroll">
              <div className="flex items-center gap-2">
                <img
                  src="../public/images/hengker.png"
                  className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full"
                  alt="profile"
                />
                <h1>Budak Bager🍆</h1>
              </div>
              <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
              <div className="flex items-center gap-2">
                <img
                  src="../public/images/hengker.png"
                  className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full"
                  alt="profile"
                />
                <h1>Budak Bager🍆</h1>
              </div>
              <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
              <div className="flex items-center gap-2">
                <img
                  src="../public/images/hengker.png"
                  className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full"
                  alt="profile"
                />
                <h1>Budak Bager🍆</h1>
              </div>
              <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
              <div className="flex items-center gap-2">
                <img
                  src="../public/images/hengker.png"
                  className="w-[35px] h-[35px] cursor-pointer object-cover rounded-full"
                  alt="profile"
                />
                <h1>Budak Bager🍆</h1>
              </div>
              <p className="w-full relative text-sm pl-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem aliquid veritatis vel! Ad esse reiciendis quia, vitae corporis, tempore voluptates facilis architecto magnam repellat perferendis saepe rem. Adipisci, illo.🥰🥰🥰</p>
            </div>
          </div>
        </div>
          );
        })}
    </>
  );
};

export default Story;
