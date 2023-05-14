import React, { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import prettier from "prettier";

import { useDispatch } from "react-redux";
import parser from "prettier/parser-babel";
import { useAppSelector } from "../../../../redux/hooks";
import {
  DeleteCells,
  getProjectData,
  updateCellCode,
  updateSaved,
} from "../../../../redux/features/projectSlice";

const ReactEditor = ({ cell }: any) => {
  // Defining ReactEditor functional component
  const editorRef = useRef<any>(null); // Creating a reference to the editor component

  const dispatch = useDispatch(); // Creating a dispatch function to dispatch actions

  const { reactCode } = useAppSelector(getProjectData); // Using useAppSelector to get project data from redux store

  const handleEditorChange = () => {
    // Defining a function to handle editor changes
    dispatch(
      updateCellCode({
        cellId: cell.cellId,
        cellCode: editorRef.current.getValue() || "", // Dispatching an action to update the cell code in the store
      })
    );
  };

  const handleEditorDidMount = (editor: any) => {
    // Defining a function to handle editor mount
    editorRef.current = editor; // Setting the editorRef to the editor instance
  };

  const onFormat = () => {
    // Defining a function to format the code in the editor
    const formatted = prettier
      .format(editorRef.current.getValue(), {
        // Using prettier to format the code in the editor
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, "");

    // set the formatted value back in the editor
    editorRef.current.setValue(formatted); // Setting the formatted value in the editor
  };

  return (
    <div className="relative h-full w-full z-0">
      {/* <div className="oneEditor"> */}
      <button
        onClick={onFormat}
        className="
        hover:text-yellow-500 border-2 border-yellow-500 text-lg py-1 absolute top-[-84px] 
       rounded-md m-4 w-20 transition duration-700 ease-in-out hover:bg-transparent bg-yellow-600 text-slate-200"
      >
        Format
      </button>

      <span onClick={() => dispatch(updateSaved(false))}>
        <Editor
          // className="thaReactEditor"
          height="100%"
          defaultLanguage="javascript"
          value={cell.cellCode}
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
      </span>
    </div>
  );
};

export default ReactEditor;
