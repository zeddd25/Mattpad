import { useState } from 'react';
import NavbarAdmin from "../components/NavbarAdmin";
import { BsBookFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

const Admin = () => {


//   const handleDeleteUser = (id) => {
//     const updatedUsers = users.filter((user) => user.id !== id);
//     setUsers(updatedUsers);
//   };

  return (
    <div className="font-outfit leading-normal tracking-normal mt-11">
      <header>
        <nav
          aria-label="menu nav"
          className="bg-[#ffeded] pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
        >
          <NavbarAdmin />
        </nav>
      </header>

      <main>
        <div className="flex flex-col bg-gradient-to-b from-[#F7E1D2] to-[#FFEDED]">
          <section>
            <div id="main" className="flex-1 mt-12 md:mt-2 pb-24 md:pb-5">
              <div className="flex rounded-xl flex-wrap">
                <div className="w-full lg:w-1/2 p-6">
                  <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex justify-center items-center w-16 h-16 bg-green-600 rounded-full">
                        <BsBookFill className="text-white text-4xl" />
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">
                          Total Buku
                        </h2>
                        <p className="font-bold text-3xl">3249</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-6">
                  <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex justify-center items-center w-16 h-16 bg-pink-600 rounded-full">
                        <FaUser className="text-white text-4xl" />
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">
                          Total Users
                        </h2>
                        <p className="font-bold text-3xl">
                          249{" "}
                          <span className="text-pink-500">
                            <i className="fas fa-exchange-alt"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-6">
                  <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex justify-center items-center w-16 h-16 bg-indigo-600 rounded-full">
                        <TbCategory className="text-white text-4xl" />
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">
                          total kategori
                        </h2>
                        <p className="font-bold text-3xl">7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-6">
                  <div className="bg-gradient-to-b from-orange-200 to-orange-100 border-b-4 border-orange-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                      <div className="flex justify-center items-center w-16 h-16 bg-orange-600 rounded-full">
                        <RiAdminFill className="text-white text-4xl" />
                      </div>
                      <div className="flex-1 text-right md:text-center">
                        <h2 className="font-bold uppercase text-gray-600">
                          total admin
                        </h2>
                        <p className="font-bold text-3xl">7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-px-8">
                <div className="overflow-x-auto">
                  <table className="w-1/2 bg-white mx-auto border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 border-b">Nama</th>
                        <th className="py-2 border-b">Email</th>
                        <th className="py-2 border-b">No Handphone</th>
                        <th className="py-2 border-b">Tanggal Lahir</th>
                        <th className="py-2 border-b">Buku</th>
                        <th className="py-2 border-b">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {users.map((user) => ( */}
                        <tr>
                        {/* key={user.id} */}
                          <td className="px-11 py-2 border-b">user.name</td>
                          <td className="px-11 py-2 border-b">user.email</td>
                          <td className="px-11 py-2 border-b">user.phone</td>
                          <td className="px-11 py-2 border-b">
                            user.birthdate
                          </td>
                          <td className="px-11 py-2 border-b">userbook</td>
                          <td className="px-11 py-2 border-b">
                            <button
                            //   onClick={() => handleDeleteUser(user.id)}
                              className="text-red-500 hover:text-red-700 font-medium"
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Admin;
