import React, { useState, useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  DeleteCells,
  getProjectData,
} from "../../../../redux/features/projectSlice";
import Preview from "./preview";
import ReactEditor from "./reactEditor";
import bundle from "../../../../bundler";
import Resizable from "../../../resizable";

// Define interface for ReactProject component props
interface ReactProjectProps {
  cell: any;
}

// Define interface for Cell object
interface Cell {
  cellCode: string;
}

const ReactProject: React.FC<ReactProjectProps> = ({ cell }) => {
  let x: any = 0;
  let y: number = 0;
  if (typeof window !== "undefined") {
    x = window;
  }
  // Use useState to initialize component state
  const [code, setCode] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [handleWidth, setHandleWidth] = useState(x.innerWidth * 0.8);

  const dispatch = useAppDispatch();

  // Use useMemo to compute the sum of all cell codes only when the cells array changes
  const cells = useAppSelector(getProjectData).cells;
  const sumCellCodes = useMemo(() => {
    if (cells) {
      return cells.reduce((acc: string, cell: Cell) => acc + cell.cellCode, "");
    }
    return "";
  }, [cells]);
  const [allCode, setAllCode] = useState("");

  useEffect(() => {
    if (cells) {
      let allcodes: string = "";
      for (let index = 0; index < cells.length; index++) {
        const element = cells[index].cellCode;
        allcodes += element;
        setAllCode(allcodes);
      }
    }
  }, [cell.cellCode]);

  // Use useEffect to bundle all code and update component state when the sum of all cell codes changes
  // This will be debounced to prevent bundling every time the sum changes
  // The returned function will be called when the component unmounts to clean up the timer
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    // Define function to handle window resize
    const handleResize = () => {
      setHandleWidth(x.innerWidth * 0.8);
    };

    // Add event listener for window resize
    x.addEventListener("resize", handleResize);

    // Define function to bundle code
    const bundleCode = async () => {
      if (timer) clearTimeout(timer);
      const newTimer = x.setTimeout(async () => {
        try {
          const { code, err } = await bundle(allCode);
          setCode(code);
          setErr(err);
        } catch (err) {
          console.error(err);
        }
      }, 750);
      setTimer(newTimer);
    };

    // Call bundleCode function
    bundleCode();

    // Clean up event listener and timer
    return () => {
      x.removeEventListener("resize", handleResize);
      if (timer) clearTimeout(timer);
    };
  }, [allCode]);

  // Define function to handle cell deletion
  const handleDeleteCells = () => {
    dispatch(DeleteCells({ cellId: cell.cellId }));
  };

  return (
    <div className="my-16 flex flex-col ">
      <button
        onClick={handleDeleteCells}
        className="hover:text-cyan-500 text-lg py-1 ml-auto rounded-md m-4 w-20 transition duration-700 ease-in-out
         border-cyan-500 border-2 hover:bg-transparent bg-cyan-700 text-slate-200"
      >
        Delete
      </button>{" "}
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "white",
          // width: "100%", //preview width
        }}
        // className="h-full flex flex-row bg-white  xs:w-[30%] sm:w-[30%] md:w-[40%] lg:w-[100%]"
        className=" bg-gradient-to-b from-gray-800 to-black rounded-md py-3"
      >
        <Resizable direction="vertical-react" handleWidth={handleWidth}>
          <div
            style={{
              height: "100%",
              display: "flex",
              // backgroundColor: "red",
            }}
          >
            <Resizable direction="horizontal-react" handleWidth={handleWidth}>
              <ReactEditor cell={cell} handleWidth={handleWidth} />
            </Resizable>
            <Preview code={code} err={err} handleWidth={handleWidth} />
          </div>
        </Resizable>
      </div>
    </div>
  );
};

export default ReactProject;
