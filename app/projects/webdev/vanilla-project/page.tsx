"use client";

import { useParams } from "next/navigation";
import EditorChoice from "./components/EditorChoice";
import FrameEeditor from "./components/FrameEditor";
import {
  cloneProject,
  deleteProject,
  getProjectData,
  projectInitialState,
  saveProject,
  updateCellCode,
  updateCode,
  updateSaved,
  cleanState,
} from "@/app/redux/features/projectSlice";
import { getAuthData } from "@/app/redux/features/authSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

export default function vanillaEdit() {
  const [saveMessage, setSaveMessage] = useState("");
  const dispatch = useAppDispatch();
  const { uid, email } = useAppSelector(getAuthData);
  const { projectId } = useParams();
  const {
    title,
    description,
    selectedDiv,
    code,
    updatedAt,
    saved,
    reactCode,
    cells,
    createdAt,
  } = useAppSelector(getProjectData);

  const updatedAt1 = new Date(
    // @ts-ignore
    updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
  );
  const createdAt1 = new Date(
    // @ts-ignore
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  );

  return (
    <div className="flex flex-col items-center ml-16 w-[calc(100vw-4rem)] bg-gray-950 min-h-screen">
      {projectId && (
        <div className="mt-10 py-4 flex flex-col md:flex-row min-h-[150px] justify-around items-center w-full bg-gradient-to-r from-purple-900 to-indigo-950  shadow-lg text-white">
          {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}
          {uid ? (
            <div className=" w-full md:w-2/3 mt-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
              <h3 className="text-md md:text-lg text-gray-300 mb-4 line-clamp-3">
                {/* {description} */} ojeyyyyyy ojeyyyyyy ojeyyyyyy ojeyyyyyy
                ojeyyyyyy ojeyyyyyy ojeyyyyyy ojeyyyyyy
              </h3>
            </div>
          ) : (
            <p className="text-red-500 text-md mb-4">
              This work can't be saved. Please log in to create, save, or clone
              projects.
            </p>
          )}
          {uid && (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-400">
                Created:{" "}
                <span className={`text-emerald-500 ${orbitron.className} pb-2`}>
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
          )}
        </div>
      )}

      <div className="my-16 flex flex-col ">
        <div
          style={{
            height: "100%",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <EditorChoice />
          <FrameEeditor />
        </div>
      </div>
    </div>
  );
}
