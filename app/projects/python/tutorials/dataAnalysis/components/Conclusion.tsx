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
          <p className="mb-4 text-lg leading-loose tracking-normal">
            In conclusion, data analysis with Python is a crucial skill in
            today's data-driven world. Python provides a wide range of powerful
            libraries and tools for data analysis, including NumPy, Pandas,
            Matplotlib, Scikit-learn, and more. These libraries allow us to
            manipulate, visualize, and model complex datasets, making it easier
            to extract insights and make data-driven decisions.
          </p>
          <p className="mb-4 text-lg leading-loose">
            Whether you are a data scientist, business analyst, or just someone
            interested in data analysis, learning Python can help you become
            more efficient and effective in your work. With the increasing
            amount of data available, data analysis is becoming a necessary
            skill in many industries. Python provides an excellent platform for
            beginners and experts alike to explore, manipulate, and analyze
            data.{" "}
          </p>
          <p className="mb-4 text-lg leading-loose">
            y learning the basics of data analysis in Python, you can gain a
            deeper understanding of your data, identify patterns and trends, and
            ultimately make better decisions based on data-driven insights. So,
            start learning today and unlock the power of data analysis with
            Python!
          </p>
        </div>
      </div>
    </>
  );
};

export default Conclusion;
