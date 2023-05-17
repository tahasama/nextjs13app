import React from "react";
import Introduction from "./components/Introduction";
import HtmlFundamentals from "./components/HtmlFundamentals";
import WorkingWithLinksAndImages from "./components/WorkingWithLinksAndImages";
import CreatingLists from "./components/CreatingLists";
import TablesAndForms from "./components/TablesAndForms";
import HTML5SemanticTags from "./components/HTML5SemanticTags";
import AudioAndVideoElements from "./components/AudioAndVideoElements";
import Conclusion from "./components/Conclusion";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
      <HtmlFundamentals />
      <WorkingWithLinksAndImages />
      <CreatingLists />
      <TablesAndForms />
      <HTML5SemanticTags />
      <AudioAndVideoElements />
      <Conclusion />
    </div>
  );
};

export default page;
