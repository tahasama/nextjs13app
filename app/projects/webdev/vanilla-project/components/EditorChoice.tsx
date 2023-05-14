"use client";

import { Dancing_Script, Amiri } from "next/font/google";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  getProjectData,
  selectedDivState,
} from "@/app/redux/features/projectSlice";

const bilbo = Amiri({
  subsets: ["latin"],
  weight: "400",
});

const vanilla: string[] = ["html", "css", "javascript"];

const EditorChoice = () => {
  const dispatch = useAppDispatch();
  const { selectedDiv } = useAppSelector(getProjectData);

  const handleDivClick = (i: string) => {
    dispatch(selectedDivState(i));
  };

  return (
    <div className="flex flex-row">
      {vanilla.map((v, i) => (
        <button
          key={v}
          onClick={() => handleDivClick(v)}
          className={`${
            bilbo.className
          } text-xl  w-[138px] h-16 relative  top-3 first-letter: rounded capitalize border-r-gray-800 border-r-4
           ${
             selectedDiv === v
               ? "border-b-4 border-sky-700 text-3xl text-sky-600 bg-gradient-to-b from-indigo-900 via-gray-800 to-gray-800"
               : "bg-gradient-to-b from-black  to-gray-800 text-stone-300  "
           }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
};

export default EditorChoice;
