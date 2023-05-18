import React from "react";
import Introduction from "./components/Introduction";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-slate-200 min-h-screen max-w-full">
      <div className="mt-24 md:mt-28"></div>
      <Introduction />
    </div>
  );
};

export default page;
