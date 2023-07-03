"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Basic } from "next/font/google";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export default function FileIO() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        File Input/Output
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${
          !ShowSection ? "hidden" : "visible"
        } indent-10 mb-8  mt-3`}
      >
        <p className="mb-4">
          File input/output (I/O) is an important aspect of programming. It
          allows you to read from and write to files on your computer. Python
          provides many ways to work with files. In this section, we'll explore
          some of the basics of file I/O in Python.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Opening a File</h3>
        <p className="mb-4">
          The first step in working with a file is to open it. To do this, we
          use the built-in <code>open()</code> function. The <code>open()</code>{" "}
          function takes two arguments: the path to the file and the mode in
          which the file should be opened. The mode can be "r" for reading, "w"
          for writing, or "a" for appending. For example, to open a file called
          "example.txt" for reading, we would use the following code:
        </p>
        <div className="bg-gray-800 rounded-md p-4 mb-8  overflow-auto">
          <code>{`file = open("example.txt", "r") # you can use a path like '/Users/ProjectsFolder/example.txt'`}</code>
        </div>
        <p className="mb-4">
          Once the file is open, we can perform various operations on it such as
          reading or writing data.
        </p>
        <div className="">
          <h3 className="text-2xl font-bold mb-4 mt-10">Reading from a File</h3>
          <p className="mb-4">
            In this example, we first open the file "example.txt" in read mode.
            We then use the <code>read()</code> method to read the contents of
            the file into a variable called "contents". Finally, we use the{" "}
            <code>console.log()</code> function to print the contents of the
            file in the browser console.
          </p>
          <pre className="bg-gray-800 rounded-lg p-4 text-gray-100 mb-4 indent-0 overflow-auto">
            <code>
              {`const readFile = () => {

    // Open the file in read mode
    const file = open("/example.txt", "r");

    // Read the contents of the file
    const contents = file.read();

    // Close the file
    file.close();

    // Print the contents of the file in the browser console
    console.log(contents);

}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
