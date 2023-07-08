"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Resizable from "../../../resizable";
import Iframe from "./Iframe";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import {
  getProjectData,
  updateCode,
  updateSaved,
} from "@/app/redux/features/projectSlice";
import {
  cssExample,
  htmlExample,
  javaScriptExample,
} from "@/app/projects/constatnts/example";
import Editor from "@monaco-editor/react";
import prettier from "prettier";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import jsParser from "prettier/parser-babel";
import { getAuthData } from "@/app/redux/features/authSlice";

const FrameEeditor = () => {
  const dispatch = useAppDispatch();
  const { uid, email } = useAppSelector(getAuthData);

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
  const editorRef = useRef<any>(null);

  let x: any = 0;
  if (typeof window !== "undefined") {
    x = window;
  }
  const [handleWidth, setHandleWidth] = useState(0);
  console.log(
    "🚀 ~ file: FrameEditor.tsx:15 ~ FrameEeditor ~ handleWidth:",
    handleWidth
  );

  useEffect(() => {
    setHandleWidth(x.innerWidth * 0.8);
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
  }, [x]);
  const handleEditorChange = () => {
    dispatch(
      updateCode(
        selectedDiv === "html"
          ? { code: { html: editorRef.current.getValue() || "" } }
          : selectedDiv === "javascript"
          ? { code: { js: editorRef.current.getValue() || "" } }
          : selectedDiv === "css" && {
              code: { css: editorRef.current.getValue() || "" },
            }
      )
    );
  };
  useEffect(() => {
    if (!uid) {
      dispatch(
        updateCode({
          code: { html: htmlExample, js: javaScriptExample, css: cssExample },
        })
      );
    }
  }, []);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const onFormat = () => {
    const formatted = prettier.format(editorRef.current.getValue(), {
      parser:
        selectedDiv === "html"
          ? "html"
          : selectedDiv === "css"
          ? "css"
          : "babel",
      plugins:
        selectedDiv === "html"
          ? [htmlParser]
          : selectedDiv === "css"
          ? [cssParser]
          : [jsParser],
    });
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-800 to-black rounded-md py-3">
      <Resizable
        direction="vertical-react"
        handleWidth={handleWidth}
        style={{ marginBottom: 20 }}
      >
        <div
          style={{
            height: "calc(100% - 20px)",
            width: "100%",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <Resizable direction="horizontal-react" handleWidth={handleWidth}>
            <button
              onClick={onFormat}
              className="group bg-teal-950 transition-colors duration-700 ease-in-out px-3 md:block hidden hover:bg-teal-900 py-1 tracking-widest md:tracking-normal text-md md:text-lg w-20 text-teal-200 hover:text-gray-100"
            >
              <p className="transform -rotate-90">format</p>
            </button>
            <div
              className={`relative right-0 h-full w-full md:w-[calc(100%-80px)] `}
            >
              <span onClick={() => dispatch(updateSaved(false))}>
                <div className="resizableReactEditor">
                  <Editor
                    height="100%"
                    defaultLanguage={selectedDiv}
                    value={
                      selectedDiv === "html"
                        ? code.html
                        : selectedDiv === "css"
                        ? code.css
                        : code.js
                    }
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
          </Resizable>
          <Iframe />
        </div>
      </Resizable>
      <button
        onClick={onFormat}
        className="bg-teal-950 transition-colors duration-700 ease-in-out px-3 rounded-md md:hidden w-full hover:bg-teal-900 py-2 tracking-widest  text-md  text-teal-200 hover:text-gray-100"
      >
        <p className="">format</p>
      </button>
    </div>
  );
};

export default FrameEeditor;
