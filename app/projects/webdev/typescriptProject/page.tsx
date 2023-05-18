"use client";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const page = () => {
  const editorRef = useRef<any>(null); // Creating a reference to the editor component

  const [code, setCode] = useState("");

  const handleEditorChange = (value: any) => {
    setCode(value);
  };
  const handleEditorDidMount = (editor: any) => {
    // Defining a function to handle editor mount
    editorRef.current = editor; // Setting the editorRef to the editor instance
  };
  return (
    // <div className="mt-20"></div>
    <div className="flex flex-col items-center ml-16 w-[70vw] mt-40 bg-gray-950 min-h-screen text-gray-200 relative h-full  z-0">
      <Editor
        // className="thaReactEditor"
        height="70%"
        defaultLanguage="typescript"
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme="vs-dark"
        // width={`${handleWidth < 500 && "40vw"}`}
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
  );
};

export default page;
