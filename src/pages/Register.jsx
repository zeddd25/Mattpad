import { useEffect, useState } from "react";
import NavbarRegister from "../components/NavbarRegister";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number_phone, setNumber_phone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [tanggal_lahir, setTanggal_lahir] = useState("")
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [show_confirm, setShow_confirm] = useState(false);
  const [className, setClassName] = useState("close-eye w-[20px] h-[10px]");
  const [className2, setClassName2] = useState("close-eye w-[20px] h-[10px]");

  const navigate = useNavigate();

  const Show = () => {
    setShow(!show);
    if (!show) {
      setClassName("show-logo w-[20px] h-[10px]");
    } else {
      setClassName("close-eye w-[20px] h-[10px]");
    }
  };

  useEffect(() => {
    setLoading(false)
  })

  const ShowConfirmation = () => {
    setShow_confirm(!show_confirm)
    if (!show_confirm) {
      setClassName2("show-logo w-[20px] h-[10px]");
    } else {
      setClassName2("close-eye w-[20px] h-[10px]");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      number_phone === "" ||
      tanggal_lahir === "" ||
      password_confirmation === ""
    ) {
      setLoading(false);
      alert("Pastikan isi semua inputan!!");
      return false;
    } else {
      let data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      data.append("number_phone", number_phone);
      data.append("tanggal_lahir", tanggal_lahir);
      data.append("password_confirmation", password_confirmation);

      let config = {
        method: "post",
        url: "https://c2ae-2001-448a-404f-79a7-e929-e36f-a55b-c9ea.ngrok-free.app/api/register",
        headers: {},  
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLoading(false);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <NavbarRegister />
      {loading ? (
        <div className="flex justify-center items-center h-screen font-outfit">
          <div className="rounded-xl bg-slate-50 relative mt-14 overflow-hidden shadow-2xl">
            <div className="loader absolute"></div>
            <div className="bg-slate-50 rounded-xl h-[600px] w-[380px] p-6 stroke-black shadow-2xl flex flex-col">
              <p className="font-semibold text-[34px] text-center">Register</p>
              <div className="flex items-center gap-2 text-center text-slate-400">
                <hr className="w-1/2" />
                <p>mattpad</p>
                <hr className="w-1/2" />
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="font-medium text-[16px]">Username</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="awali dengan huruf besar"
                    className="w-full h-[45px] rounded-[6px] p-5 mt-[4px]"
                  />
                  <p className="font-medium text-[16px]">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. howard.thurman@gmail.com"
                    className="w-full h-[45px] rounded-[6px] p-5 mt-[4px]"
                  />
                  <p className="font-medium text-[16px]">Nomor Telepon</p>
                  <input
                    type="tel"
                    value={number_phone}
                    onChange={(e) => setNumber_phone(e.target.value)}
                    placeholder="0838298393"
                    className="w-full h-[45px] rounded-[6px] p-5 mt-[4px]"
                  />
                </div>
                <div className="flex items-center flex-col justify-between gap-[7px]">
                  <div className="w-full flex justify-between">
                    <p className="font-medium text-[16px]">Password</p>
                    <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer">
                      <i
                        id="show-logo"
                        className="w-[16px] h-[10px]"
                        onClick={() => setShow(!show)}
                      ></i>
                    </div>
                  </div>
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="8+ karakter"
                    className="w-full h-[45px] rounded-[6px] p-5"
                  />
                  <div className="w-full flex justify-between">
                    <p className="font-medium text-[16px]">
                      Konfirmasi Password
                    </p>
                    <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer">
                      <i
                        id="show-logo"
                        className="w-[16px] h-[10px]"
                        onClick={() => setShow_confirm(!show_confirm)}
                      ></i>
                    </div>
                  </div>
                  <input
                    type={show_confirm ? "text" : "password"}
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    placeholder="8+ karakter"
                    className="w-full h-[45px] rounded-[6px] p-5"
                  />
                  <button className="w-full h-[50px] rounded-[38px] mt-7 bg-[#16192C] text-white">
                    Let's go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen font-outfit">
          <div className="bg-slate-50 rounded-xl mx-4 w-[380px] p-10 stroke-black shadow-2xl flex flex-col">
            <p className="font-semibold text-[40px] text-center">Register</p>
            <div className="flex items-center gap-2 text-center text-slate-400">
              <hr className="w-1/2" />
              <p>mattpad</p>
              <hr className="w-1/2" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="font-medium text-[16px]">Username</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="awali dengan huruf besar"
                  className="w-full h-[45px] rounded-[6px] p-5 mt-[4px] outline-black"
                />
                <p className="font-medium text-[16px]">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g.ward.thurman@gmail.com"
                  className="w-full h-[45px] rounded-[6px] p-5 mt-[4px] outline-black"
                />
                <p className="font-medium text-[16px]">Nomor Telepon</p>
                <input
                  type="tel"
                  value={number_phone}
                  onChange={(e) => setNumber_phone(e.target.value)}
                  placeholder="0838298393"
                  className="w-full h-[45px] rounded-[6px] p-5 mt-[4px] outline-black"
                />
              </div>
              <div className="flex items-center flex-col justify-between gap-[7px]">
                <div className="w-full flex justify-between">
                  <p className="font-medium text-[16px]">Password</p>
                  <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer">
                  <i className={className} onClick={Show}></i>
                  </div>
                </div>
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="8+ karakter"
                  className="w-full h-[45px] rounded-[6px] p-5 outline-black"
                />
                <div className="w-full flex justify-between">
                  <p className="font-medium text-[16px]">Konfirmasi Password</p>
                  <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer">
                    <i
                      className={className2}
                      onClick={ShowConfirmation}
                    ></i>
                  </div>
                </div>
                <input
                  type={show_confirm ? "text" : "password"}
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                  placeholder="8+ karakter"
                  className="w-full h-[45px] rounded-[6px] p-5 outline-black"
                />
              </div>
                <p className="font-medium text-[16px] mt-2">Tanggal lahir</p>
                <input
                  type="date"
                  value={tanggal_lahir}
                  onChange={(e) => setTanggal_lahir(e.target.value)}
                  className="w-full h-[45px] rounded-[6px] p-5 outline-black"
                />
                <button className="w-full h-[50px] mt-2 rounded-[38px] bg-[#16192C] text-white">
                  Let's go
                </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Register;
