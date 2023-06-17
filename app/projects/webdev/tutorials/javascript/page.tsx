import React from "react";
import Introduction from "./components/Introduction";
import TensorFlow from "@/app/projects/python/tutorials/machineLearning/components/TensorFlow";
import ScikitLearn from "@/app/projects/python/tutorials/machineLearning/components/ScikitLearn";
import Conclusion from "../css/components/Conclusion";
import VariablesAndDataTypes from "./components/VariablesAndDataTypes";
import OperatorsAndExpressions from "./components/OperatorsAndExpressions";
import ControlFlow from "./components/ControlFlow";
import FunctionsAndScope from "./components/FunctionsAndScope";
import ArraysAndObjects from "./components/ArraysAndObjects";
import DomManipulation from "./components/DomManipulation";

const MachineLeraningTutorial = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <VariablesAndDataTypes />
      <OperatorsAndExpressions />
      <ControlFlow />
      <FunctionsAndScope />
      <ArraysAndObjects />
      <DomManipulation />
    </div>
  );
};

export default MachineLeraningTutorial;
