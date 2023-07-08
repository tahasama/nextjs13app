"use client";

import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactProject from "./components/reactProject";
import { AddCells, getProjectData } from "../../../redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { example1, example2 } from "../../../projects/constatnts/example";
import { useParams } from "next/navigation";
import { getAuthData } from "@/app/redux/features/authSlice";

const exampleCells = [
  { cellId: uuidv4(), cellCode: example2 },
  { cellId: uuidv4(), cellCode: example1 },
];

import { Orbitron, Barlow } from "next/font/google";
import LandscapeAnimation from "../../LandscapeAnimation";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "600",
});

const ReactCells = () => {
  const { description, title, updatedAt, createdAt, user } =
    useAppSelector(getProjectData);

  const hhh = useAppSelector(getProjectData);
  console.log("🚀 ~ file: reactCells.tsx:29 ~ ReactCells ~ hhh:", hhh);

  const { uid } = useAppSelector(getAuthData);
  const { projectId } = useParams();
  const updatedAt1 = new Date(
    // @ts-ignore
    updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
  );
  const createdAt1 = new Date(
    // @ts-ignore
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  );
  const { cells } = useAppSelector(getProjectData);
  const dispatch = useAppDispatch();

  useMemo(() => {
    // Load initial example cells on component mount
    cells.length < 2 &&
      exampleCells.forEach((cell) => dispatch(AddCells(cell)));
  }, [cells]); // add dispatch to dependency array to fix warning

  const handleAddCells = () => {
    // Add a new cell with a unique ID
    dispatch(AddCells({ cellId: uuidv4(), cellCode: "" }));
  };

  const [landscape, setLandscape] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handlelandscape = () => {
    setLandscape(true);
    setTimeout(() => {
      setLandscape(false);
      console.log("its on trueeeeeeee");
    }, 2500);
  };
  useEffect(() => {
    // Function to update window width state
    window.innerWidth < 678 ? handlelandscape() : setLandscape(false);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div
      className={`${
        title !== "" ? "mt-20" : "mt-20"
      } flex flex-col items-center  justify-center w-full`}
    >
      {landscape && <LandscapeAnimation />}

      <div className="p-4 flex flex-col min-h-[150px] justify-around items-center w-full bg-gradient-to-r from-purple-900 to-indigo-950 shadow-lg text-white">
        {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}

        {projectId !== undefined && (
          <div className="flex flex-col md:flex-row w-full justify-around items-center">
            <div className="text-center md:mx-14">
              <h2 className="text-2xl  lg:text-4xl font-bold mb-2">{title}</h2>
              <h3 className="text-md md:text-lg  text-gray-300 mb-4">
                {description}
              </h3>
            </div>

            <div className="flex flex-col items-end md:absolute top-20 right-0 mt-4 mr-4">
              <p className="text-sm text-gray-400">
                Created:{" "}
                <span className={`text-emerald-500 ${barlow.className}`}>
                  {createdAt1.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                  &nbsp;
                  {createdAt1.toLocaleTimeString("en-US")}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Updated:{" "}
                <span className={`text-emerald-500 ${barlow.className}`}>
                  {createdAt1.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                  &nbsp;
                  {createdAt1.toLocaleTimeString("en-US")}
                </span>
              </p>
            </div>
          </div>
        )}

        {(!uid || uid !== user.uid || !projectId) && (
          <p className="text-red-500 mx-2 text-center text-md italic mb-4">
            This work can't be saved. Please log in to create, save, or clone
            projects.
          </p>
        )}
      </div>

      <button
        onClick={handleAddCells}
        className="
       text-slate-50 hover:text-emerald-500 border-2 bg-emerald-700 hover:bg-transparent transition duration-700 border-emerald-500  text-lg p-2  rounded-md mt-8 w-56"
      >
        Add Cell
      </button>
      <div>
        {cells
          .filter((cell: any) => cell.cellId !== "")
          .map((cell: any) => (
            <div className="" key={cell.cellId}>
              <ReactProject cell={cell} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReactCells;
