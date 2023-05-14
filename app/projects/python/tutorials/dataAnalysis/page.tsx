import React from "react";
import Introduction from "./components/Introduction";
import Pandas from "./components/Pandas";
import Matplotlib from "./components/Matplotlib";
import Seaborn from "./components/Seaborn";
import Conclusion from "./components/Conclusion";
import Numpy from "./components/Numpy";

const DataAnalysistutorial = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <Pandas />
      <Numpy />
      <Matplotlib />
      <Seaborn />
      <Conclusion />
    </div>
  );
};

export default DataAnalysistutorial;
