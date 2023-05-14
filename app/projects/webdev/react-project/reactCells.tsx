"use client";

import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactProject from "./components/reactProject";
import { AddCells, getProjectData } from "../../../redux/features/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { example1, example2 } from "../../../projects/constatnts/example";

const exampleCells = [
  { cellId: uuidv4(), cellCode: example2 },
  { cellId: uuidv4(), cellCode: example1 },
];

const ReactCells = () => {
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
    <div className="grid place-items-center h-(100vh) mt-10">
      <div className="flex flex-col items-center">
        <button
          onClick={handleAddCells}
          className="
       text-slate-50 hover:text-emerald-500 border-2 bg-emerald-700 hover:bg-transparent transition duration-700 border-emerald-500  text-lg p-2  rounded-md mt-5 w-56"
        >
          Add Cell
        </button>
        <div>
          {cells
            .filter((cell: any) => cell.cellId !== "")
            .map((cell) => (
              <div className="" key={cell.cellId}>
                <ReactProject cell={cell} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReactCells;
