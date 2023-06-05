import { FiArrowUpRight } from "react-icons/fi"
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"

const ResponsiveHome = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <div className='hidden lg:flex flex-col items-center gap-5 font-outfit'>
        <nav className="w-full flex justify-around items-center p-2 shadow-sm font-outfit">
          <div className="text-[24px] font-bold">
            <div className="text-[24px] font-bold flex gap-1 ">
              <NavLink to={"/"}>Mattpad</NavLink>
              <NavLink to={"/"}>
                <div className="logo w-[42px] h-[30px]"></div>
              </NavLink>
            </div>
          </div>
          <div className="flex items-center text-[18px] font-semibold gap-1 text-[#242423]">
            <NavLink to={"/login"}>Masuk</NavLink>
            <FiArrowUpRight />
            <NavLink to={"/register"}>Daftar</NavLink>
            <FiArrowUpRight />
          </div>
        </nav>
        <main className="w-full">
            <div className="flex flex-wrap gap-64 mt-[135px] justify-center md:" data-aos="zoom-out">
                <div className="flex flex-col gap-[12px] font-outfit">
                <h1 className="font-black text-[64px]">Hai, ini Mattpad.</h1>
                <h2 className="text-[24px]">Platform sosial untuk bercerita yang paling <br /> disukai di dunia</h2>
                <NavLink to={"login"}>
                <div className="flex gap-[30px]">
                <button className="w-[180px] h-[44px] rounded-[32px] text-[14px] font-semibold bg-black text-white">
                Mulai Membaca</button>
                <button className="w-[180px] h-[44px] rounded-[32px] text-[14px] font-semibold bg-black text-white">
                Mulai Menulis</button>
                </div>
                </NavLink>
                </div>
                    <img src="../public/images/laptop.svg" alt="laptop" />
            </div>

            <div className="flex justify-center items-center" data-aos="fade-down">
                <img src="../public/images/people.svg" alt="people" />
            </div>

            <div className="flex justify-center items-center bg-[url('/img/footer-texture')]">
            <div className="h-[676px] mt-10">
              <div className="flex flex-col justify-center gap-[30px] items-center mb-[55px]">
                <p className="font-semibold text-[30px]">
                  Cara Kerjanya Mattpad
                </p>
                <p className="text-[16px]">
                  Buat ceritamu lebih mudah ditemukan dengan kekuatan komunitas
                  dan teknologi di Mattpad.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-2 justify-center" data-aos="fade-up">
                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber1Filled className="text-[100px] mr-[27px] mb-[30px]" />
                <div className="w-[274px]">
                <p className="text-[25px]">Tulis</p>  
                <p className="font-light text-[16px] text-[#6F6F6F] mt-5">
                  Bagikan cerita unik dan orisinal kamu di Mattpad. Dapatkan
                  referensi dan strategi menulis untuk membantumu mengarang
                  kisah yang hanya dapat kamu ceritakan sendiri.
                </p>
                </div>
                </div>

                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber2Filled className="text-[100px] mr-[27px] mb-[30px]" />
                <div className="w-[274px]">
                <p className="text-[25px]">Bangun</p>
                <p className="font-light text-[16px] text-[#6F6F6F] mt-5">
                  Dapatkan penggemar dari seluruh dunia saat cerita kamu menjadi
                  semakin populer. Terhubung dengan penulis lain yang juga suka
                  bercerita.
                </p>
                </div>
                </div>
                <div className="flex gap-2 items-center">
                  <TbSquareRoundedNumber3Filled className="text-[100px] mr-[27px] mb-[30px]" />
                <div className="w-[274px]">
                <p className="text-[25px]">Perluas Jangkauan</p>
                <p className="font-light text-[16px] text-[#6F6F6F] mt-5">
                  Dapatkan status Mattpad Star dan terbitkan atau adaptasikan
                  ceritamu menjadi film atau acara televisi dengan Mattpad Books
                  dan Mattpad Studios!
                </p>
                </div>
                </div>
              </div>

              <div className="flex justify-center items-center" data-aos="fade-up">
                <img src="../public/images/notebook.svg" alt="" className="w-[300px] mt-10"/>
              </div>
            </div>
            </div>
        </main>
        <footer className="lg:py-4 lg:mt-10 py-16">
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
  )
}

export default ResponsiveHome