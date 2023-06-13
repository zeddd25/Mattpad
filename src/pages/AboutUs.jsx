import NavbarAbout from "../components/NavbarAbout";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


const AboutUs = () => {
  return (
    <>
    <NavbarAbout />
    <div className="lg:mt-10 max-w-6xl mx-auto my-4 text-center font-outfit">
      <h4 className="text-xl">A bit About Mattpadd</h4>
      <h2 className="lg:text-7xl text-4xl font-bold text-slate-900 ">Whoever the team is</h2>
      <div className="flex flex-col p-5 mx-auto rounded-t-xl bg-gradient-to-b from-[#F7E1D2] to-[#FFEDED] mt-2 border-t-2 border-r-2 border-l-2 border-black">
        <div className="flex justify-around flex-wrap">
        <div className="text-lg relative group">
            <img
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-black"
              src="../public/images/avatar-face.png"
              alt="person"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100 w-72 h-72 lg:w-80 lg:h-80 rounded-full">
              <div className="flex items-center gap-2 cursor-pointer">
                <a href="https://github.com/zeddd25" target="blank">
                <AiFillGithub className="text-white text-2xl hover:text-4xl" />
                </a>
                <a href="https://www.instagram.com/muhamad_dzilli/?hl=id">
                <AiFillInstagram className="text-white text-2xl hover:text-4xl" target="blank"/>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-dzilli-assajad-275a98260/" target="blank">
                <AiFillLinkedin className="text-white text-2xl hover:text-4xl" />
                </a>
              </div>
            </div>
            <h1>Front-End</h1>
          </div>
          <div className="text-lg relative group">
            <img
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-black"
              src="../public/images/avatar-face.png"
              alt="person"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100 w-72 h-72 lg:w-80 lg:h-80 rounded-full">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiFillGithub className="text-white text-2xl hover:text-4xl" />
                <AiFillInstagram className="text-white text-2xl hover:text-4xl" />
                <AiFillLinkedin className="text-white text-2xl hover:text-4xl" />
              </div>
            </div>
            <h1>Back-End</h1>
          </div>
          <div className="text-lg relative group">
            <img
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-black"
              src="../public/images/avatar-face.png"
              alt="person"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100 w-72 h-72 lg:w-80 lg:h-80 rounded-full">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiFillGithub className="text-white text-2xl hover:text-4xl" />
                <AiFillInstagram className="text-white text-2xl hover:text-4xl" />
                <AiFillLinkedin className="text-white text-2xl hover:text-4xl" />
              </div>
            </div>
            <h1>Mobile</h1>
          </div>
        </div>
      </div>

      <p className="lg:mt-16">
        We’re the global multi-platform entertainment company for stories. We’re
        using groundbreaking technology to set stories free into a world of
        unbridled possibility.
      </p>
      <p>
        We’re setting stories free. And it’s changing everything. Stories.
        They’re not static. They’re living. Breathing. They change and they can
        change you. At Wattpad, we’ve seen the power a single story can have.{" "}
      </p>

      <div className="flex flex-wrap justify-evenly items-center bg-gradient-to-b to-[#F7E1D2] from-[#FFEDED] rounded-b-xl border-b-2 border-r-2 border-l-2 border-black">
        <div className="w-14 object-cover">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="reatjs.logo" />
        </div>
        <div className="w-16 object-cover">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png" alt="tailwind.logo" />
        </div>
        <div className="w-32 object-cover">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/128px-Logo.min.svg.png" alt="laravel.logo" />
        </div>
        <div className="w-32 object-cover">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/512px-MySQL_textlogo.svg.png" alt="mysql.logo" />
        </div>
        <div className="w-11 object-cover">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" alt="typescript.logo" />
        </div>
       
      </div>
    </div>
    </>
  );
};

export default AboutUs;
