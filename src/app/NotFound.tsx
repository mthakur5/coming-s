import React from "react";
import data from "../../data/data";
import Image from "next/image";
import Link from "next/link";

function notfound() {
  const { description, title } = data;

  return (
    <>
      <Image src="/logo.png" alt="Haroth Group Logo" width={350} height={150} />
      <div className="relative flex flex-col place-items-center ">
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {title}
          </span>
          <span className="">⏳</span>
        </h2>
        <p
          className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        {/* Button to redirect to furniture.haroth.com */}
        <Link href="https://furniture.haroth.com" passHref>
          <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out">
            Visit Our Furniture Store
          </button>
        </Link>
      </div>
    </>
  );
}

export default notfound;
