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
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

export default function vanillaEdit() {
  const [saveMessage, setSaveMessage] = useState("");
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
  console.log("🚀 ~ file: page.tsx:44 ~ vanillaEdit ~ title:", title);

  const updatedAt1 = useMemo(
    () =>
      new Date(
        // @ts-ignore
        updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
      ),
    [updatedAt]
  );

  const createdAt1 = useMemo(
    () =>
      new Date(
        // @ts-ignore
        createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
      ),
    [createdAt]
  );

  return (
    <div
      className={`flex flex-col items-center md:ml-16 w-full md:w-[calc(100vw-5.1rem)] bg-gray-950 min-h-screen  ${
        title !== "" ? "mt-10" : "mt-10"
      }`}
    >
      <div className="mt-10 py-4 flex flex-col  min-h-[150px] justify-around items-center w-full bg-gradient-to-r from-purple-900 to-indigo-950  shadow-lg text-white">
        {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}
        {projectId !== undefined && (
          <div className="flex flex-col md:flex-row justify-around items-center w-full">
            <div className=" w-full md:w-2/3 mt-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
              <h3 className="text-md md:text-lg text-gray-300 mb-4 line-clamp-3">
                {description}
              </h3>
            </div>

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
                  {updatedAt1.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                  &nbsp;
                  {updatedAt1.toLocaleTimeString("en-US")}
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
