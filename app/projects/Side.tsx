"use client";

import React from "react";
import { Kiwi_Maru, Nova_Oval } from "next/font/google";
import Link from "next/link";

const kiwi = Kiwi_Maru({
  subsets: ["latin"],
  weight: "400",
});

const novaOval = Nova_Oval({
  subsets: ["latin"],
  weight: "400",
});

const Side = () => {
  return (
    <header
      className={`z-50 fixed mt-16 overflow-auto w-16 h-screen border-r-2 border-slate-500 shadow-slate-700 text-lg
       bg-black text-slate-400 flex flex-col items-center justify-around ${kiwi.className}`}
    >
      <Link
        href={"/react-project"}
        className={`${novaOval.className} text-2xl `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
            clipRule="evenodd"
          />
        </svg>
        {/* Create a React Project */}
      </Link>
      <Link href={"/signUpIn"} className={`${novaOval.className} text-2xl `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
            clipRule="evenodd"
          />
        </svg>

        {/* Sign Up/Sign In */}
      </Link>
      <Link
        href={"/vanilla-project"}
        className={`${novaOval.className} text-2xl `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clipRule="evenodd"
          />
        </svg>
        {/* Create a Vanilla Project */}
      </Link>
      {/* </div> */}
    </header>
  );
};

export default Side;
