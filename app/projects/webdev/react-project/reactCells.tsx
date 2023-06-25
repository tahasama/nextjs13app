"use client";

import React, { useMemo } from "react";
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

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const ReactCells = () => {
  const { description, title, updatedAt, createdAt } =
    useAppSelector(getProjectData);
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

  return (
    <div
      className={`${
        title !== "" ? "mt-20" : "mt-20"
      } flex flex-col items-center  justify-center w-full`}
    >
      <div className=" py-4 flex flex-col min-h-[150px] justify-around items-center w-full bg-gradient-to-r from-purple-900 to-indigo-950  shadow-lg text-white">
        {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}

        {projectId !== undefined && (
          <div className="flex flex-col md:flex-row w-full justify-around items-center">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
              <h3 className="text-md md:text-lg text-gray-300 mb-4">
                {description}
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400">
                Created:{" "}
                <span className={`text-emerald-500 ${orbitron.className}`}>
                  {" "}
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
                <span className={`text-emerald-500 ${orbitron.className}`}>
                  {" "}
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

        {!uid && (
          <p className="text-red-500  text-md italic mb-4">
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
