import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import Carousel from "../components/Carousel";
import NavbarDashboard from "../components/NavbarDashboard";


const Dashboard = () => {

  return (
    <>
      <div className="w-full font-outfit h-auto flex flex-col justify-center items-center">
        <NavbarDashboard />
        <main className="w-[95%] lg:w-[50%] h-auto">
        <Carousel />
        </main>
      </div>
      <BottomBar/>
    </>
  );
};

export default Dashboard;
