"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ErrorHandlingAndDebugging = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Error Handling and Debugging{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">
          Error Handling and Debugging
        </h3>
        <p className="mb-2">
          Error handling and debugging are essential skills for JavaScript
          developers. They help identify and fix issues in your code. Let's
          explore some techniques and tools for effective error handling and
          debugging.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Handling Errors with Try-Catch Blocks
        </h4>
        <p className="mb-2">
          JavaScript provides the <code>try-catch</code> statement to handle
          errors. You can enclose the code that may throw an error inside a{" "}
          <code>try</code>
          block and specify the error handling logic in the corresponding{" "}
          <code>catch</code> block.
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`try {
  // Code that may throw an error
} catch (error) {
  // Error handling logic
}`}
        </pre>
        <p className="mb-2">
          If an error occurs within the <code>try</code> block, the code
          execution jumps to the <code>catch</code> block. You can access
          information about the error through the <code>error</code> object,
          which contains properties like
          <code>message</code> to retrieve the error message.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Debugging JavaScript Code
        </h4>
        <p className="mb-2">
          Debugging is the process of finding and fixing bugs in your code. Here
          are some common techniques and tools for debugging JavaScript code:
        </p>
        <ul className="list-disc list-inside mb-4 overflow-auto">
          <li>
            Console Logging: Use <code>console.log()</code> statements to output
            values and messages to the console.
          </li>
          <li>
            Debugger Statement: Insert the <code>debugger</code> statement in
            your code to pause execution and launch the browser's debugging
            tools.
          </li>
          <li>
            Browser DevTools: Open the browser's developer tools to access
            features like breakpoints, variable inspection, and call stacks.
          </li>
        </ul>
        <h4 className="text-md font-semibold mb-2">
          Common Debugging Techniques and Tools
        </h4>
        <p className="mb-2">
          Here are some debugging techniques and tools you can use to identify
          and fix issues in your JavaScript code:
        </p>
        <ul className="list-disc list-inside mb-4 overflow-auto">
          <li>
            Breakpoints: Set breakpoints at specific lines to pause code
            execution and inspect variables and program flow.
          </li>
          <li>
            Step Through Code: Debuggers allow you to step through code line by
            line, helping you track the flow and identify issues.
          </li>
          <li>
            Inspect Variables: Examine variable values at different points in
            your code to identify incorrect or unexpected behavior.
          </li>
          <li>
            Network Monitoring: Use network monitoring tools to inspect network
            requests and responses, helpful for debugging AJAX calls or
            network-related issues.
          </li>
        </ul>
        <p className="mb-2">
          These techniques and tools are invaluable for effective error handling
          and debugging. They enable you to pinpoint and resolve issues in your
          JavaScript code efficiently.
        </p>
        <p className="mb-2">
          Remember to practice and experiment with different debugging
          approaches to become proficient in identifying and fixing bugs in your
          code.
        </p>
      </div>
    </div>
  );
};

export default ErrorHandlingAndDebugging;
