"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { Editor } from "@monaco-editor/react";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  fetchProjectById,
  getProjectData,
  updatePythonCode,
  updateSaved,
} from "@/app/redux/features/projectSlice";
import { getAuthData } from "@/app/redux/features/authSlice";
import Resizable from "../../resizable";
import { pythonExample, pythonExample2 } from "../../constatnts/example";

import { Orbitron } from "next/font/google";
import {
  BsFillLightningFill,
  BsHeartFill,
  BsFillEmojiAngryFill,
  BsEmojiAngry,
} from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

let x: any = 0;
if (typeof window !== "undefined") {
  x = window;
}

export default function PythonEdit() {
  const pythonUrl: string = process.env.NEXT_PUBLIC_PYTHON as string;
  const editorRef = useRef<any>(null);

  const [data, setData] = useState<any>({
    error: "",
    result: "",
    result_images: "",
  });
  const [images, setImages] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { pythonCode, title, updatedAt, createdAt, description, user } =
    useAppSelector(getProjectData);
  const { uid } = useAppSelector(getAuthData);
  console.log(
    "🚀 ~ file: page.tsx:49 ~ uidbbbbbbbbbbbbbbbbbbb:",
    user.uid,
    "and",
    uid
  );
  const { projectId } = useParams();
  console.log("🚀 ~ file: page.tsx:51 ~ projectId:", projectId);

  const ffffffff = useAppSelector(getProjectData);
  const [handleWidth, setHandleWidth] = useState(x.innerWidth * 0.8);

  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const query = useSearchParams().get("type");

  const updatedAt1 = new Date(
    // @ts-ignore
    updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
  );
  const createdAt1 = new Date(
    // @ts-ignore
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  );

  useEffect(() => {
    if (!projectId) {
      dispatch(
        updatePythonCode(query === "basic" ? pythonExample2 : pythonExample)
      );
    } else {
      dispatch(fetchProjectById("projectId"));
    }
  }, [query]);

  useEffect(() => {
    // Define function to handle window resize
    const handleResize = () => {
      setHandleWidth(x.innerWidth * 0.8);
    };

    // Add event listener for window resize

    x.addEventListener("resize", handleResize);

    // Clean up event listener and timer
    return () => {
      x.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const dataToSend = { code: pythonCode };

    fetch(pythonUrl!, {
      // fetch("http://localhost:8000/execute-python/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setImages([...data?.result_images]);
        setData(data);
      })
      .catch((error) => {
        setData(error.message), setLoading(false);
      });
  };

  const handleEditorChange = () => {
    dispatch(updatePythonCode(editorRef.current.getValue()));
  };

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <div className=" flex flex-col items-center ml-0 justify-center w-full mt-10 md:w-[calc(100vw-1.35rem)] ">
      <div
        className={`fixed md:bottom-4 top-24 md:top-auto right-4 left-4 md:left-auto p-6 md:p-5 md:w-[calc(100%-7rem)] rounded-md flex justify-center ${
          showAlert
            ? "bg-emerald-700 text-gray-300 shadow-md opacity-100"
            : "hidden"
        } transition-all duration-5000 ease-in-out text-sm md:text-lg  text-center flex flex-wrap items-center`}
      >
        <span className="text-yellow-500 underline underline-offset-2">
          Tip:&nbsp;
        </span>
        <span className="">Initial execution may take up to&nbsp;</span>
        <span className="">90 seconds&nbsp;</span>
        <span>
          😒, but don't worry! Your next ones will be lightning-fast⚡, Try it!
        </span>
      </div>

      <div className="mt-10 py-4 flex flex-col min-h-[150px] justify-around items-center w-full bg-gradient-to-r from-purple-900 to-indigo-950  shadow-lg text-white">
        {/* {saveMessage && <p className="saveMessage">{saveMessage}</p>} */}

        {projectId !== undefined && (
          <div className="flex flex-col md:flex-row justify-around items-center w-full">
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
          <p className="text-red-500  text-md italic mb-4 text-center">
            This work can't be saved. Please log in to create, save, or clone
            projects.
          </p>
        )}
      </div>

      <div className=" bg-gradient-to-b from-gray-800 to-black rounded-md mt-8 py-3 px-0 ">
        <Resizable direction="vertical-react" handleWidth={handleWidth}>
          <div
            style={{
              height: "100%",
              display: "flex",
            }}
          >
            <div className="flex flex-col bg-gray-900 p-1 rounded-lg w-full">
              <>
                <div className={`relative left-0 h-full w-full`}>
                  <span onClick={() => dispatch(updateSaved(false))}>
                    <div className="w-full h-full">
                      <Editor
                        // height="100%"
                        defaultLanguage="python"
                        value={pythonCode}
                        onChange={handleEditorChange}
                        onMount={handleEditorDidMount}
                        theme="vs-dark"
                        width="100%"
                        options={{
                          wordWrap: "on",
                          minimap: { enabled: false },
                          showUnused: false,
                          folding: false,
                          lineNumbersMinChars: 3,
                          fontSize: 16,
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                        }}
                      />
                    </div>
                  </span>
                </div>
              </>
            </div>
          </div>
        </Resizable>
      </div>

      <div className="flex flex-row justify-around gap-6 w-full">
        <button
          onClick={handleSubmit}
          className="md:w-[14rem] xl:w-96 bg-cyan-700 my-4 py-2 px-4 rounded-md textg text-slate-300 font-medium hover:bg-sky-800 transition-colors duration-300"
          type="submit"
        >
          Execute code
        </button>
        {images.length !== 0 && (
          <button
            onClick={() => setImages([])}
            className="md:w-[14rem] xl:w-96 bg-teal-700 my-4 py-2 px-4 rounded-md textg text-slate-300 font-medium hover:bg-teal-800 transition-colors duration-300"
          >
            Clear images
          </button>
        )}
      </div>

      {x.innerWidth > 768 ? (
        <div className={`mb-20 ${images.length == 0 && "ml-16"}`}>
          <Resizable direction="vertical-react" handleWidth={handleWidth}>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
              }}
            >
              <div className="flex flex-row w-full ">
                <Resizable
                  direction="horizontal-react"
                  handleWidth={handleWidth}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <div className="flex flex-col bg-gray-900 p-6 rounded-lg w-[100%] overflow-hidden">
                      <>
                        <pre
                          className="bg-gray-700  text-[#cacab3] border-2 border-slate-600 whitespace-pre-wrap
       w-full max-h-[80vh] overflow-auto scrollbar scrollbar-thumb-purple-900 scrollbar-track-gray-600 text-center"
                        >
                          {loading ? (
                            <>Loading...</>
                          ) : data?.error ? (
                            data?.error
                          ) : (
                            data.result
                          )}
                        </pre>
                      </>
                    </div>
                  </div>
                </Resizable>
                {images[0] !== "" && (
                  <div
                    className={`my-1 h-full flex-col overflow-auto
                scrollbar scrollbar-thumb-gray-600 scrollbar-track-stone-900`}
                    style={{
                      height: "100%",

                      display: "flex",
                    }}
                  >
                    {/* {(pythonCode.includes("plt.") ||
                      pythonCode.includes("sns.")) && */}
                    {data &&
                      images
                        .reverse()

                        .map((plt: any, index: any) => {
                          // if (index === 1) {
                          //   return null; // Return null to skip this element
                          // }
                          return (
                            <img
                              key={index}
                              src={plt}
                              alt="Histogram"
                              className=""
                            />
                          );
                        })}
                  </div>
                )}
              </div>
            </div>
          </Resizable>{" "}
        </div>
      ) : (
        <div className="flex flex-col p-4 mx-6 my-4 rounded-md items-center bg-gray-900 md:w-[80%]">
          {/* <p className="text-2xl font-bold mb-4 text-white">Result :</p> */}
          <pre
            className="bg-gray-700  text-[#cacab3] border-2 border-slate-600 whitespace-pre-wrap
       w-full max-h-[80vh] overflow-auto scrollbar scrollbar-thumb-purple-900 scrollbar-track-gray-600"
          >
            {loading ? (
              <>Loading...</>
            ) : data?.error ? (
              data?.error
            ) : (
              data.result
            )}
          </pre>
          <div className="my-1 ">
            {pythonCode.includes("plt.") &&
              data &&
              [...new Set(images)]
                .reverse()

                .map((plt: any, index: any) => {
                  // if (index === 1) {
                  //   return null; // Return null to skip this element
                  // }
                  return (
                    <>
                      <img
                        key={index}
                        src={plt}
                        alt="Histogram"
                        className=" md:max-w-4xl object-contain"
                      />
                    </>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
}
