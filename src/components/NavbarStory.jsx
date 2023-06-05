import { NavLink } from "react-router-dom";

const NavbarStory = () => {
  return (
    <div className=" w-full h-[55px] flex justify-around items-center font-outfit shadow-sm">
      <div className="text-[24px] flex gap-1 font-bold">
        <NavLink to={"/"}>Mattpad</NavLink>
        <NavLink to={"/"}>
          <div className="logo w-[42px] h-[30px]"></div>
        </NavLink>
      </div>
      <div className="text-[18px] font-light">
          <NavLink to={"/create"}>
            <button className="w-[103px] h-[35px] bg-black text-white rounded-full text-[12px] font-semibold ml-4">
              Buat Cerita +
            </button>
          </NavLink>
      </div>
    </div>
  );
};

export default NavbarStory;
