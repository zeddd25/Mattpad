import { IoIosArrowBack } from "react-icons/io"
import { NavLink } from "react-router-dom"

const NavbarCreate = ({type}) => {
  return (
    <nav className='font-outfit p-5 flex items-center justify-between h-[55px] shadow-sm'>
    <NavLink to={"/dashboard"}>
    <IoIosArrowBack className="text-4xl"/>
    </NavLink>
    <div className="flex gap-2">
    <button className="w-[100px] h-[30px] rounded-lg bg-slate-100 text-black">Batalkan</button>
    <button type={type} className="w-[100px] h-[30px] rounded-lg bg-black text-white">Posting</button>
    </div>
    </nav>
  )
}

export default NavbarCreate