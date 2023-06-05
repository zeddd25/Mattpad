import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="slick-prev" onClick={onClick}>
      <BsArrowLeftCircle className="text-black text-lg" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="slick-next" onClick={onClick}>
      <BsArrowRightCircle className="text-black text-lg" />
    </button>
  );
};

export { PrevArrow, NextArrow };
