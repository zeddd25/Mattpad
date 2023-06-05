import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div
      className="relative flex items-center justify-center w-[100px] lg:w-[178px] lg:h-[278px] max-w-sm mt-6 overflow-hidden transition duration-200 ease-in-out transform shadow-xl group hover:-translate-y-2"
      tabIndex="0"
    >
      <img
        src="../public/images/posterfilm3.jpg"
        alt=""
        className="absolute z-0 object-cover object-center w-[100px] lg:w-[178px] h-full group-hover:mb-1 group-focus:mb-1 rounded-[4px]"
      />
      <div className="relative z-10 w-[100px] lg:w-[178px] h-full lg:h-0 transition duration-200 ease-in-out transform bg-black opacity-0 rounded-[4px] bg-opacity-30 group-hover:-translate-y-0 group-focus:-translate-y-0 group-hover:opacity-100 group-focus:opacity-100 focus-within:opacity-100">
        <div className="flex flex-col items-start justify-center px-16 py-6 rounded-[4px]">
          <div className="max-w-md ml-2  text-xl text-white transition duration-200 ease-in-out delay-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 focus:opacity-100"></div>
          <div
            href="/"
            className="flex justify-center w-24 mt-4 transition duration-200 ease-in-out delay-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 focus:opacity-100"
          >
            <div className="relative tracking-wider text-center text-white duration-150 ease-in-out border-b-4 border-white cursor-pointer hover:text-gray-100 hover:border-gray-100 hover:px-2 transision-all"></div>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between lg:h-20 px-4 py-4 text-sm bg-[#ffeded] rounded-b-[4px]">
          <div className="text-gray-800 transition duration-200 ease-in-out delay-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
            Living Dangerously
          </div>
          <div className="flex justify-between gap-4 text-gray-500 transition duration-200 ease-in-out delay-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 focus-within:opacity-100">
            <button type="button" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>
            <button type="button" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button type="button" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardLong = ({ title, description, image }) => {
  return (
    <NavLink to={"/story"}>
    <div className="cursor-pointer font-outfit max-w-md mx-auto rounded-[4px] overflow-hidden shadow-lg">
      <img className="w-full h-56 object-cover object-center" src={image} alt="Sampul Buku" />
      <div className="text-center mx-auto py-4">
        <div className="font-semibold text-lg mb-2 text-gray-900">{title}</div>
        <p className="text-center rounded-full text-sm p-1 font-semibold bg-[#EEEEEE] text-[#6F6F6F]">{description}</p>
      </div>
    </div>
    </NavLink>
  );
};

export { Card, CardLong };
