"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
import SupervisedLearning from "./ScikitLearnComponent/supervisedLearning";
import UnsupervisedLearning from "./ScikitLearnComponent/unsupervisedLearning";
import ModelEvaluationAndSelection from "./ScikitLearnComponent/ModelEvaluationAndSelection";
const ScikitLearn = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="md:mx-auto md:max-w-[68rem] md:p-8 p-3 indent-10 w-full">
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Scikit-Learn
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
        <p className="mb-5">
          Scikit-Learn is a popular Python library for machine learning. It
          provides simple and efficient tools for data mining and data analysis,
          as well as a consistent interface for a variety of machine learning
          algorithms.{" "}
        </p>

        <p className="mb-4">
          Scikit-Learn is built on top of NumPy, SciPy, and matplotlib, which
          are other popular Python libraries for scientific computing and data
          visualization.
        </p>
        <p className="mb-4">
          In this section, we will explore some of the key concepts and features
          of Scikit-Learn, including supervised and unsupervised learning,
          regression and classification, clustering, and model evaluation and
          selection.
        </p>
        <SupervisedLearning />
        <UnsupervisedLearning />
        <ModelEvaluationAndSelection />
      </div>
    </div>
  );
};

export default ScikitLearn;
