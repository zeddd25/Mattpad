import NavbarLogin from "../components/NavbarLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("false");
  const [show, setShow] = useState(false);
  const [className, setClassName] = useState("close-eye w-[20px] h-[10px]");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  });

  const handleShow = () => {
    setShow(!show);
    if (!show) {
      setClassName("show-logo w-[20px] h-[10px]");
    } else {
      setClassName("close-eye w-[20px] h-[10px]");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (email === "" || password === "") {
      setLoading(false);
      alert("Email dan Password harus diisi semua!!");
      return;
    }

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    const config = {
      method: "post",
      url: "/login",
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.user.username);
          navigate("/dashboard");
        } else {
          alert("Email atau Password salah");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response) {
          // Menangani kesalahan HTTP dari server
          const { data, status } = error.response;
          if (status === 401) {
            alert(data.message);
          } else {
            alert(`Terjadi kesalahan: ${data.message}`);
          }
        } else {
          // Menangani kesalahan jaringan
          alert("Terjadi kesalahan jaringan. Mohon cek koneksi internet Anda.");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <NavbarLogin />
      {loading ? (
        <div className="flex justify-center items-center h-screen font-outfit">
          <div className="rounded-xl relative overflow-hidden shadow-2xl">
            <div className="loader absolute"></div>
            <div className="bg-slate-50 rounded-xl h-[500px] w-[380px] p-6 stroke-black shadow-2xl flex flex-col justify-center">
              <p className="font-semibold text-[40px] mb-10 text-center">
                Log in
              </p>
              <div className="flex items-center gap-2 text-center text-slate-400">
                <hr className="w-1/2" />
                <p>mattpad</p>
                <hr className="w-1/2" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center flex-col justify-between gap-[7px]">
                  <div className="w-full flex justify-between">
                    <p className="font-medium text-[16px]">Email</p>
                    <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer"></div>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. howard.thurman@gmail.com"
                    className="w-full h-[45px] rounded-[6px] p-5"
                  />
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
                  <button className="w-full h-[50px] rounded-[38px] bg-[#16192C] text-white">
                    Let's go
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen font-outfit">
          <div className="bg-slate-50 rounded-xl h-[500px] w-[380px] p-6 stroke-black shadow-2xl flex flex-col justify-center">
            <p className="font-semibold text-[40px] mb-10 text-center">
              Log in
            </p>
            <div className="flex items-center gap-2 text-center text-slate-400">
              <hr className="w-1/2" />
              <p>mattpad</p>
              <hr className="w-1/2" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center flex-col justify-between gap-[7px]">
                <div className="w-full flex justify-between">
                  <p className="font-medium text-[16px]">Email</p>
                  <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer"></div>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g.ward.thurman@gmail.com"
                  className="w-full h-[45px] rounded-[6px] p-5 outline-black"
                />
                <div className="w-full flex justify-between">
                  <p className="font-medium text-[16px]">Password</p>
                  <div className="flex flex-row items-center gap-[4px] text-[15px] font-normal cursor-pointer">
                    <i className={className} onClick={handleShow}></i>
                  </div>
                </div>
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="8+ karakter"
                  className="w-full h-[45px] rounded-[6px] p-5 outline-black"
                />
                <button className="w-full h-[50px] rounded-[38px] bg-[#16192C] text-white">
                  Let's go
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Login;
