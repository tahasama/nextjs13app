"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
const Conclusion = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      {/* Conclusion */}
      <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
        <button
          className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
      font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
          onClick={() => setShowSection(!ShowSection)}
        >
          Conclusion
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
        >
          <div className={`indent-10 mb-8 mt-3`}>
            <p className="mb-4 text-lg leading-loose">
              CSS is a powerful tool that enables us to create visually
              appealing and engaging websites. By combining HTML with CSS, we
              can bring our web pages to life and provide a better user
              experience. Understanding CSS is essential for any web developer,
              as it allows us to customize and fine-tune the appearance of our
              web content.
            </p>
            <p className="mb-4 text-lg leading-loose">
              Moving forward, we will now transition to JavaScript, a powerful
              programming language that adds interactivity and dynamic
              functionality to web pages. With JavaScript, we can handle user
              interactions, create dynamic content, and perform complex
              operations. JavaScript is a vital skill for web developers, and it
              will open up endless possibilities for building interactive web
              applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conclusion;
