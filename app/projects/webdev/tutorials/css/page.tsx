import React from "react";
import Introduction from "./components/Introduction";
import SyntaxAndSelectors from "./components/SyntaxAndSelectors";
import BoxModel from "./components/BoxModel";
import Typography from "./components/Typography";
import ColorsAndBackgrounds from "./components/ColorsAndBackgrounds";
import LayoutsAndPositioning from "./components/LayoutsAndPositioning";
import TransformsAndTransitions from "./components/TransformsAndTransitions";
import Frameworks from "./components/Frameworks";
import BestPractices from "./components/BestPractices";
import Conclusion from "./components/Conclusion";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <SyntaxAndSelectors />
      <BoxModel />
      <Typography />
      <ColorsAndBackgrounds />
      <LayoutsAndPositioning />
      <TransformsAndTransitions />
      <Frameworks />
      <BestPractices />
      <Conclusion />
    </div>
  );
};

export default page;
