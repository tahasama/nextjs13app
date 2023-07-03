"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const SupervisedLearning = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-950 -translate-x-7" : ""
        } md:ml-7 ml-6 mb-4 flex flex-row items-start justify-between md:text-xl  md:min-w-[33.3rem] 
      font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        SupervisedLearning
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${
          !ShowSection ? "hidden" : "visible"
        } indent-10 mb-8  mt-3`}
      ></div>
    </>
  );
};

export default SupervisedLearning;
