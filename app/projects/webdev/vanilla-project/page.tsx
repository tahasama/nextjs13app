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
  } = useAppSelector(getProjectData);

  return (
    <div className="flex flex-col items-center ml-16 w-[calc(100vw-5.1rem)] bg-gray-950 min-h-screen">
      <div className="mt-20"></div>
      {projectId && (
        <>
          {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}
          {uid ? (
            <h2 className="projectTitle">Project: {title} </h2>
          ) : (
            <p className="projectWarning">
              This work can't be saved, Log in and create/save or clone
              projects.
            </p>
          )}
          {uid && (
            <p className="date ">
              Updated on &#160;
              {/* {new Date(updatedAt).toLocaleDateString(navigator.language, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })} */}
              &#160; at &#160;
              {/* {new Date(updatedAt).toLocaleTimeString(navigator.language, {
                    hour: "numeric",
                    minute: "numeric",
                  })} */}
            </p>
          )}
        </>
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
