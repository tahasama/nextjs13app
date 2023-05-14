"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const Conclusion = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="md:mx-auto md:max-w-[68rem] md:p-8 p-3 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between md:text-2xl text-xl  md:min-w-[33.3rem] min-w-full
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
          we have covered a lot of ground in this tutorial series about
          Tensorflow.{" "}
        </p>
        <p className="mb-4 text-lg leading-loose tracking-normal">
          We started with the basics of Tensorflow and gradually progressed
          towards building more advanced neural networks. We learned about
          different types of layers, activation functions, loss functions,
          optimizers, and how to handle overfitting. We also learned how to use
          Tensorflow to build image classification models and how to fine-tune
          pre-trained models. While we have covered a lot, there is still so
          much more to learn about Tensorflow.
        </p>
        <p className="mb-4 text-lg leading-loose">
          This is just the beginning of the journey towards mastering this
          powerful tool for building and optimizing neural networks. By
          continuing to learn and explore, you can build even more sophisticated
          models that can solve complex problems in a wide range of fields, from
          computer vision to natural language processing. So keep learning,
          experimenting, and building with Tensorflow, and see where it can take
          you!
        </p>
        <p className="mb-4 text-lg leading-loose"></p>
      </div>
    </div>
  );
};

export default Conclusion;
