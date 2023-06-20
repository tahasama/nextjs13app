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

let x: any = 0;
if (typeof window !== "undefined") {
  x = window;
}

export default function PythonEdit() {
  const editorRef = useRef<any>(null);

  const [data, setData] = useState<any>({
    error: "",
    result: "",
    result_images: "",
  });
  const [images, setImages] = useState<any>([]);
  console.log("🚀 ~ file: page.tsx:30 ~ images:", images);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { pythonCode, title, updatedAt, createdAt } =
    useAppSelector(getProjectData);

  console.log("🚀 ~ file: page.tsx:34 ~ pythonCode000000000000:", pythonCode);
  const ffffffff = useAppSelector(getProjectData);
  const { uid } = useAppSelector(getAuthData);
  const [handleWidth, setHandleWidth] = useState(x.innerWidth * 0.8);

  const query = useSearchParams().get("type");
  const projectId = useParams();
  console.log("🚀 ~ file: page.tsx:41 ~ projectId:", projectId);

  const updatedAt1 = new Date(
    // @ts-ignore
    updatedAt.seconds * 1000 + updatedAt.nanoseconds / 1000000
  );
  const createdAt1 = new Date(
    // @ts-ignore
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000
  );
  console.log("🚀 ~ file: page.tsx:49 ~ updatedAt1:", updatedAt1);

  useEffect(() => {
    if (!projectId) {
      dispatch(
        updatePythonCode(query === "basic" ? pythonExample2 : pythonExample)
      );
    } else {
      dispatch(fetchProjectById("projectId"));
    }
  }, []);

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

    fetch("http://localhost:8000/execute-python/", {
      method: "POST",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("IIIIIIII", data?.result_images);
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
    <div className=" flex flex-col items-center ml-14 md:ml-0 justify-center w-[calc(100vw-4.7rem)]  md:w-[calc(100vw-1.4rem)] ">
      {projectId && (
        <div className="mt-24 pb-4 flex flex-row justify-around w-full">
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
            <div className="flex flex-col">
              <p className="date ">
                Updated on:
                {updatedAt1.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })}
                &nbsp;
                {updatedAt1.toLocaleTimeString("en-US")}
              </p>
              <p className="date ">
                created on:
                {createdAt1.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })}
                &nbsp;
                {createdAt1.toLocaleTimeString("en-US")}
              </p>
            </div>
          )}
        </div>
      )}

      <div className=" bg-gradient-to-b from-gray-800 to-black rounded-md py-3 px-0 ">
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
                    <div className="resizableReactEditor">
                      <Editor
                        height="100%"
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
                            <>
                              <img
                                key={index}
                                src={plt}
                                alt="Histogram"
                                className=""
                              />
                            </>
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
