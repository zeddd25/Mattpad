import React from "react";

const Notfound = () => {
  return (
    <main className="font-outfit flex justify-center items-center h-screen py-24 px-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold text-gray-900">
        Ups!!   
        </h1>
        <img src="../public/images/typo.svg" alt="gambar no internet" />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Page not Found!!!   
        </h1>
        <div className="flex items-center justify-center gap-x-6 mt-5">
          <a
            href="/dashboard"
            className="rounded-[20px] bg-[#000000] px-10 py-4 text-sm font-light text-white shadow-sm hover:bg-slate-800"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
};

export default Notfound;
