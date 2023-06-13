import { IoIosArrowBack } from "react-icons/io"
import { NavLink } from "react-router-dom"

const NavbarEdit = () => {
  return (
    <nav className='font-outfit p-5 flex items-center justify-between h-[55px] shadow-sm'>
    <NavLink to={"/dashboard"}>
    <IoIosArrowBack className="text-4xl"/>
    </NavLink>
    <div className="text-[24px] font-bold flex gap-1 ml-4">
    <NavLink to={"/dashboard"}>Mattpad</NavLink>
    <NavLink to={"/dashboard"}>
    <div className="logo w-[42px] h-[30px]"></div>
    </NavLink>
    </div>
    </nav>
  )
}

export default NavbarEdit