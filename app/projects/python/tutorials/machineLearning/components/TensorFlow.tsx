"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
import OptimizingNeuralNetwork from "./tesorflowComponent/OptimizingNeuralNetwork";
import AdvancedNeuralNetworks from "./tesorflowComponent/NeuralNetworks";
import RecurrentNeuralNetworks from "./tesorflowComponent/RecurrentNeuralNetworks";
import ConvolutionalNeuralNetworks from "./tesorflowComponent/ConvolutionalNeuralNetworks";
import IntroductiontoNeuralNetworks from "./tesorflowComponent/IntroductiontoNeuralNetworks";
const TensorFlow = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="md:mx-auto md:max-w-[68rem] md:p-8 p-3 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        TensorFlow
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
        <div className="py-8">
          <IntroductiontoNeuralNetworks />
          <ConvolutionalNeuralNetworks />
          <RecurrentNeuralNetworks />
          <AdvancedNeuralNetworks />
          <OptimizingNeuralNetwork />
        </div>
      </div>
    </div>
  );
};

export default TensorFlow;
