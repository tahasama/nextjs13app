import React from "react";
import Introduction from "./html/Introduction";
import HtmlFundamentals from "./html/HtmlFundamentals";
import WorkingWithLinksAndImages from "./html/WorkingWithLinksAndImages";
import CreatingLists from "./html/CreatingLists";
import TablesAndForms from "./html/TablesAndForms";
import HTML5SemanticTags from "./html/HTML5SemanticTags";
import AudioAndVideoElements from "./html/AudioAndVideoElements";
import Conclusion from "./html/Conclusion";

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
