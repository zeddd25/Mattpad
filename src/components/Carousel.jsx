import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    cssEase: "linear",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 755,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const userName = localStorage.getItem("userName")

  return (
    <>
    <div className="carousel w-full h-auto">
       <div className="w-[100%] mt-10 mb-5 text-[18px] px-[10px] text-black">
        <h2 className="font-bold">Mattys KEMBALI HADIR! 🥳️</h2>
        <p className="text-[#121212A3]">Kontes menulis tahunan resmi dibuka 9 Juni 2023</p>
      </div>
      <Slider {...settings} >
        <div className="box outline-none shadow-md w-full overflow-hidden rounded-[4px]">
          <img
            className="object-cover w-full rounded[4px] h-full"
            src="https://ma.wattpad.com/house_of_card_hfc_mobileweb.png"
            alt=""
          />
        </div>
        <div className="box outline-none shadow-md overflow-hidden rounded-[4px]">
          <img
            className="object-cover w-full rounded[4px] h-full"
            src="https://ma.wattpad.com/themedrl_may_hfc_mobileweb_ba.jpg"
            alt=""
          />
        </div>
        <div className="box outline-none shadow-md overflow-hidden rounded-[4px]">
          <img
            className="object-cover w-full rounded[4px] h-full"
            src="https://ma.wattpad.com/imaginary_boyfriend_hfc_mobileweb.png"
            alt=""
          />
        </div>
        <div className="box outline-none shadow-md overflow-hidden rounded-[4px]">
          <img
            className="object-cover w-full  rounded[4px] h-full"
            src="https://ma.wattpad.com/married_to_a_dangerous_man_hfc_desktop.jpg"
            alt=""
          />
        </div>
      </Slider> 
      <div className="text-black px-[16px] flex flex-col gap-[25px] mt-5 mb-5">
        <h1 className="text-[22px] capitalize">Selamat datang, {userName} &#128079;</h1>
        <hr className="border-1 border-[#f0e5e5]"/>
        <h1 className="text-[22px] capitalize font-semibold">Cerita Pilihan untuk Kamu</h1>
      </div> 
      <div className="flex flex-col gap-5 w-full">
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
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
    </> 
  );
};

export default Carousel;
