"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div className="top-0 py-1 lg:py-2 w-full lg:relative z-50 dark:bg-gray-900 bg-[#E2DAD6]">
          <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
            <div className="flex items-center justify-between">
              <button>
                <div className="flex items-center space-x-2">
                  <h2 className="text-black uppercase dark:text-white font-bold text-2xl">
                    <Link href="/">Listify</Link>
                  </h2>
                </div>
              </button>

              <div className="hidden lg:block">
                <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex lg:items-center gap-x-2">
                <button className="flex items-center justify-center rounded-md bg-[#5B99C2] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  <Link href="/login">Login</Link>
                </button>
              </div>

              <div className="flex items-center justify-center lg:hidden">
                <button
                  className="focus:outline-none text-slate-200 dark:text-white"
                  onClick={toggleMenu}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="lg:hidden mt-2">
                <ul className="flex flex-col space-y-2 text-base font-bold text-black/60 dark:text-white">
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button className="block w-full text-left rounded-md bg-[#5B99C2] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                      <Link href="/login">Login</Link>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
