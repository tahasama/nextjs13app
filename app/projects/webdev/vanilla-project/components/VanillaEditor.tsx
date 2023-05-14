"use client";

import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import prettier from "prettier";
import htmlParser from "prettier/parser-html";
import cssParser from "prettier/parser-postcss";
import jsParser from "prettier/parser-babel";

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
} from "../../../constatnts/example";
import { Dancing_Script } from "next/font/google";
import { getAuthData } from "@/app/redux/features/authSlice";

const bilbo = Dancing_Script({
  subsets: ["latin"],
});

const VanillaEditor = () => {
  const editorRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { selectedDiv, code } = useAppSelector(getProjectData);
  const { uid } = useAppSelector(getAuthData);

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
    <>
      <button
        onClick={onFormat}
        className=" 
        bg-teal-950 transition-colors duration-700 ease-in-out hover:bg-transparent px-3
    hover:bg-teal-700 py-1 text-lg w-20 text-slate-200
         "

        // top-[-84px]
      >
        format
      </button>
      <div className={`relative right-0 h-full w-full `}>
        <span onClick={() => dispatch(updateSaved(false))}>
          <div className="resizableReactEditor">
            <Editor
              // className="thaReactEditor"
              height="100%"
              defaultLanguage={selectedDiv}
              // defaultLanguage="html"
              value={
                selectedDiv === "html"
                  ? code.html
                  : selectedDiv === "css"
                  ? code.css
                  : code.js
              }
              // value={code.html}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              theme="vs-dark"
              // width={`${handleWidth < 500 && "40vw"}`}
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
  );
};

export default VanillaEditor;
