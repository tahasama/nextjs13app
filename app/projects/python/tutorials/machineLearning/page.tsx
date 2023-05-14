import React from "react";
import Introduction from "./components/Introduction";
import ScikitLearn from "./components/ScikitLearn";
import TensorFlow from "./components/TensorFlow";
import Conclusion from "./components/Conclusion";

const MachineLeraningTutorial = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <ScikitLearn />
      <TensorFlow />
      <Conclusion />
    </div>
  );
};

export default MachineLeraningTutorial;
