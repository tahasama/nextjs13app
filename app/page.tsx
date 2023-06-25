"use client";
import Image from "next/image";
import { Nova_Oval } from "next/font/google";

import html from "./images/html.png";
import css from "./images/css.png";
import javascript from "./images/javascript.png";
import python from "./images/python.png";
import Side from "./projects/Side";

const novaOval = Nova_Oval({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const code = "Code Better";
  const codeArr = code.split(/(?!^)/u); //regular expression to keep the empty space
  const code2 = "Code Faster";
  const codeArr2 = code2.split(/(?!^)/u); //regular expression to keep the empty space
  return (
    <main className="">
      <Side />
      <div className="flex flex-row h-[calc(100vh-4rem)] justify-around items-center">
        <div
          className="w-screen md:w-3/4 text-7xl md:text-[4.35rem] lg:text-8xl xl:text-9xl 
         mt-24 flex flex-col items-center md:items-start md:text-start text-center gap-10 "
        >
          <p className="md:indent-10 lg:indent-28 w-[100vw]  md:w-full bg-white bg-gradient-to-l pb-6 from-[#2c3e50] via-[#3498db] to-[#2c3e50]">
            Code Simpler
          </p>

          <div
            className="md:ml-16 lg:ml-28 flex flex-row text-transparent pb-8  bg-clip-text bg-gradient-to-l
           from-[#004a4d] via-[#64ecf6] to-[#004a4d]"
          >
            {codeArr2.map((l: string, i: number) => {
              return (
                <span key={i}>
                  <p
                    className={`
                    transition-all duration-500
                    border-b-8
                    border-transparent                  
                ${l !== " " && "hover:border-[#004a4d]"}                  
                    ${
                      i % 2 !== 0 && i % 3 !== 0
                        ? "hover:text-[#f6ab64] hover:tracking-[20px]"
                        : i % 2 !== 0
                        ? "hover:text-[#ecf664] hover:tracking-[40px]"
                        : "hover:text-[#34c67f] hover:tracking-[30px]"
                    }
                     "hover:text-[#f6ab64] hover:tracking-[20px]"
                    `}
                  >
                    {/* regular expression to show the empty space */}
                    {l === " " ? "\u00a0" : l}
                  </p>
                </span>
              );
            })}
          </div>

          <div
            className="md:ml-16 lg:ml-28 flex flex-row text-transparent pb-8 bg-clip-text bg-gradient-to-l
             from-[#004d40] via-[#8bc34a] to-[#004d40] "
          >
            {codeArr.map((l: string, i: number) => {
              return (
                <span key={i}>
                  <p
                    className={`transition-all duration-700  ${
                      l !== " " && "hover: hover:bg-[#76b020] hover:rounded"
                    } hover:text-slate-900 hover:px-3 hover:mx-3 
                    ${
                      i === 5 &&
                      "md:bg-transparent bg-[#8bc34ae4] md:text-transparent  rounded text-slate-900 md:px-0 px-3 md:mx-3 mx-3 hover:bg-[#76b020] "
                    }
                    `}
                  >
                    {/* regular expression to show the empty space */}
                    {l === " " ? "\u00a0" : l}
                  </p>
                </span>
              );
            })}
          </div>
        </div>
        <div
          className="w-3/6  lg:w-2/6 h-[96%]  border-2 border-slate-700 bg-gradient-to-br from-slate-600 to-slate-900 
         mr-5  rounded-xl hidden md:block mt-32"
        >
          <Image
            src={html}
            alt={""}
            className="relative xl:right-20 xl:bottom-5 lg:right-24 lg:top-0 lg:scale-125 xl:scale-110 rounded-xl
            md:scale-110 md:right-20"
          />{" "}
          <Image
            src={css}
            alt={""}
            className="relative  z-10 xl:right-2 xl:bottom-28 lg:bottom-24 lg:scale-110 xl:scale-110 rounded-xl
            md:scale-110 bottom-24"
          />{" "}
          <Image
            src={javascript}
            alt={""}
            className="relative z-0 0 xl:right-13 xl:bottom-[10.5rem] lg:bottom-16 lg:left-0 lg:scale-110 xl:scale-100 rounded-xl
            md:bottom-20"
          />{" "}
          <Image
            src={python}
            alt={""}
            className="relative z-0 0 xl:right-16 xl:bottom-[20.8rem] lg:bottom-48 xl:scale-105 lg:scale-125 lg:right-12 rounded-xl
            md:bottom-52 md:right-16"
          />{" "}
        </div>
      </div>
    </main>
  );
}
