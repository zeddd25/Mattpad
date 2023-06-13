import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../api/api";

const CarouselCard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/dashboard",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false); // Set isLoading to false after data is fetched
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false); // Set isLoading to false if an error occurs
        });
    };
    getData();
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1465,
        settings: {
          slidesToShow: 4,
          arrows: false,  
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {isLoading ? ( // Show loading spinner if isLoading is true
        <div className="flex justify-center items-center h-80">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <Slider {...settings}>
          {data.map((item) => (
            <NavLink to={`/story/${item.id}`} key={item.id}>
              {/* card */}
              <div className="cursor-pointer font-outfit max-w-md mx-auto rounded-[4px] overflow-hidden shadow-lg">
                <img
                  className="w-full h-56 object-cover object-center"
                  src={item.gambar}
                  alt="Sampul Buku"
                />
                <div className="text-center mx-auto py-4">
                  <div className="font-semibold text-sm mb-2 capitalize text-gray-900">
                    {item.judul}
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </Slider>
      )}
    </>
  );
};

export default CarouselCard;
