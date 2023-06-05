import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled, } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ResponsiveHome from "../components/ResponsiveHome";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Home = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <>
      <div className="lg:hidden font-outfit">
        <nav className="h-[55px] w-full flex justify-center gap-12 items-center p-2 shadow-sm font-outfit">
          <div className="text-[24px] font-bold">
            <div className="text-[24px] font-bold flex gap-1">
              <NavLink to={"/"}>Mattpad</NavLink>
              <NavLink to={"/"}>
                <div className="logo w-[42px] h-[30px]"></div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center text-[14px] font-semibold gap-1 text-[#242423]">
            <NavLink to={"/login"}>Masuk</NavLink>
            <FiArrowUpRight />
            <NavLink to={"/register"}>Daftar</NavLink>
            <FiArrowUpRight />
          </div>
        </nav>
        <main>
          <div className="flex justify-center items-center flex-col" data-aos="zoom-in">
            <div className="flex flex-col place-items-center gap-3 mt-10">
              <div className="flex flex-col gap-3 mt-2">
                  <p className="font-black text-[32px]">Hai, ini Mattpad.</p>
                  <p>
                    Platform sosial untuk bercerita yang paling <br /> disukai
                    di dunia
                  </p>
                <div className="flex justify- items-center gap-4">
                <NavLink to={"/login"}>
                  <button className="px-7 h-[40px] rounded-[32px] text-[14px] font-semibold bg-black text-white">
                    Mulai Menulis
                  </button>
                </NavLink>
                <NavLink to={"login"}>
                  <button className="px-7 h-[40px] rounded-[32px] text-[14px] font-semibold bg-black text-white">
                    Mulai Membaca
                  </button>
                  </NavLink>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <img
                  src="../public/images/laptop-phone.png"
                  alt="laptop-phone"
                  data-aos="zoom-in"
                  className=""
                />
                <img src="../public/images/orang.png" alt="people" data-aos="zoom-in" />
              </div>
            </div>

            <div className="max-w-sm h-[676px] text-left mt-10">
              <div className="max-w-sm ">
                <p className="font-semibold text-center text-[30px]">
                  Cara Kerjanya Mattpad
                </p>
                <p className="font-light text-[18px]">
                  Buat ceritamu lebih mudah ditemukan dengan kekuatan komunitas
                  dan teknologi di Wattpad.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2" data-aos="zoom-in">
                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber1Filled className="text-[35px]" />
                  <p>Tulis</p>
                </div>

                <p className="font-light text-[16px]">
                  Bagikan cerita unik dan orisinal kamu di Mattpad. Dapatkan
                  referensi dan strategi menulis untuk membantumu mengarang
                  kisah yang hanya dapat kamu ceritakan sendiri.
                </p>

                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber2Filled className="text-[35px]" />
                  <p>Bangun</p>
                </div>

                <p className="font-light text-[16px]">
                  Dapatkan penggemar dari seluruh dunia saat cerita kamu menjadi
                  semakin populer. Terhubung dengan penulis lain yang juga suka
                  bercerita.
                </p>

                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber3Filled className="text-[35px]" />
                  <p>Perluas Jangkauan</p>
                </div>

                <p className="font-light text-[16px]">
                  Dapatkan status Wattpad Star dan terbitkan atau adaptasikan
                  ceritamu menjadi film atau acara televisi dengan Wattpad Books
                  dan Wattpad Studios!
                </p>
              </div>

              <div className="flex justify-center items-center" data-aos="zoom-in">
                <img src="../public/images/notebook.svg" alt="" />
              </div>
            </div>
          </div>
        </main>
      <footer className="mt-28">
      <div className="mx-auto flex flex-col items-center">
      <div className="flex gap-3 mb-4">
      <AiFillTwitterCircle className="text-gray-800 hover:text-gray-600 text-xl transition-colors duration-300" />
      <AiFillLinkedin className="text-gray-800 hover:text-gray-600 text-xl transition-colors duration-300" />
      <AiFillInstagram className="text-gray-800 hover:text-gray-600 text-xl transition-colors duration-300" />
      <AiFillFacebook className="text-gray-800 hover:text-gray-600 text-xl transition-colors duration-300" />
      </div>
      <p className="text-gray-600 text-sm">
      &copy; 2023 Mattpad. All rights reserved.
      </p>
      </div>
      </footer>
      </div>
      <ResponsiveHome />
    </>
  );
};

export default Home;
