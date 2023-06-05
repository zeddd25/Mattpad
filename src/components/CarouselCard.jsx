import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardLong } from './Card';

const CarouselCard = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    cssEase: "linear",
    centerMode: false,
    responsive: [
      {
        breakpoint: 1465,
        settings: {
          slidesToShow: 4,
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
    <Slider {...settings}>
      <div>
      <CardLong
          title="Judul Buku 2"
          description="Fiksi"
          image="https://img.wattpad.com/cover/304946573-100-k202217.jpg"
        />
      </div>
      <div>
        <CardLong
          title="Judul Buku 2"
          description="Fiksi"
          image="https://img.wattpad.com/cover/170003970-100-k136980.jpg"
        />
      </div>
      <div>
        <CardLong
          title="Judul Buku 3"
          description="Romance"
          image="https://img.wattpad.com/cover/333474807-100-k320839.jpg"
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
          image="https://img.wattpad.com/cover/312884506-100-k972092.jpg"
        />
      </div>     <div>
        <CardLong
          title="Judul Buku 3"
          description="Romance"
          image="../public/images/posterfilm3.jpg"
        />
      </div>
      {/* Tambahkan card lainnya sesuai kebutuhan */}
    </Slider>
  );
};


export default CarouselCard;
