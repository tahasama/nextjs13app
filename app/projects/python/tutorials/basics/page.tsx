import React from "react";
import Introduction from "./components/Introduction";
import Head from "next/head";
import { Lato } from "next/font/google";
import ConditionalStatementsAndLoops from "./components/ConditionalStatementsAndLoops";
import BasicSyntaxAndDataTypes from "./components/BasicSyntaxAndDataTypes";
import VariablesAndOperators from "./components/VariablesAndOperators";
import FunctionsAndModules from "./components/FunctionsAndModules";
import ObjectOrientedProgramming from "./components/ObjectOrientedProgramming";
import FileIO from "./components/FileInputOutput";
import ExceptionHandling from "./components/ExceptionHandling";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const PythonTutorial = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <BasicSyntaxAndDataTypes />
      <VariablesAndOperators />
      <ConditionalStatementsAndLoops />
      <FunctionsAndModules />
      <ObjectOrientedProgramming />
      <FileIO />
      <ExceptionHandling />
    </div>
  );
};

export default PythonTutorial;
