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
import FunctionsAandHigherOrderFunctions from "./components/FunctionsAandHigherOrderFunctions";
import AsynchronousProgramming from "./components/AsynchronousProgramming";
import ErrorHandlingAndDebugging from "./components/ErrorHandlingAndDebugging";
import ES6Features from "./components/ES6Features";
import WorkingWithAPIs from "./components/WorkingWithAPIs";
import BrowserStorage from "./components/BrowserStorage";
import JavaScriptAndHTMLForms from "./components/JavaScriptAndHTMLForms";
import RegularExpressions from "./components/RegularExpressions";
import JavaScriptLibrariesAndFrameworks from "./components/JavaScriptLibrariesAndFrameworks";

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
      <FunctionsAandHigherOrderFunctions />
      <AsynchronousProgramming />
      <ErrorHandlingAndDebugging />
      <ES6Features />
      <WorkingWithAPIs />
      <BrowserStorage />
      <JavaScriptAndHTMLForms />
      <RegularExpressions />
      <JavaScriptLibrariesAndFrameworks />
    </div>
  );
};

export default MachineLeraningTutorial;
