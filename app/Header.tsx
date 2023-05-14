"use client";

import { Kiwi_Maru } from "next/font/google";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getBarData, showHideDropdown } from "./redux/features/barSlice";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { getAuthData, resetUser } from "./redux/features/authSlice";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const dispatch = useAppDispatch();
  const { dropDown } = useAppSelector(getBarData);
  const { uid } = useAppSelector(getAuthData);

  return (
    <header
      className={`shadow-sm fixed top-0 w-full bg-black z-50 shadow-slate-200 text-lg text-slate-400 h-16 flex items-center justify-around ${kiwi.className}`}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/projects/python"}>Python</Link>
      <Link href={"/projects/webdev"}>Web Dev</Link>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            dispatch(showHideDropdown(!dropDown));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>

        <ul
          className={`absolute mt-14 float-right mx-4  z-50 py-2 text-slate-200 bg-sky-300 rounded-md shadow-xl indent-3 ${
            dropDown
              ? "bg-sky-900 w-32 opacity-100 pointer-events-auto right-2"
              : "bg-sky-700 w-0 opacity-0 pointer-events-none right-24"
          } transition-all duration-[375ms] 
          flex flex-col`}
        >
          <Link
            href={!uid ? "/login" : "profile"}
            className={`block px-4 py-2 text-slate-200 hover:bg-sky-700   transition-all duration-700 `}
            onClick={() => dispatch(showHideDropdown(!dropDown))}
          >
            {!uid ? "Login" : "Profile"}
          </Link>
          <div className="divide-x-2 bg-black"></div>
          <Link
            href={uid ? "/" : "/register"}
            className={`block px-4 py-2 text-gray-200 hover:bg-sky-700  transition-all duration-700 `}
            onClick={() => {
              dispatch(showHideDropdown(!dropDown));
              uid &&
                signOut(auth).then(() =>
                  dispatch(resetUser({ uid: "", email: "" }))
                );
            }}
          >
            {uid ? "Logout" : "Register"}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
