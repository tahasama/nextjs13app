"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const VariablesAndDataTypes = () => {
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
        Variables and Data Types
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={` ${
          !ShowSection ? "hidden" : "visible"
        } indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Variables in JavaScript</h3>
        <p className="mb-2">
          Variables are used to store and manipulate data in JavaScript. They
          are like containers that hold values.
        </p>
        <h3 className="text-lg font-semibold mb-2">Declaring Variables</h3>
        <p className="mb-2">
          In JavaScript, you can declare variables using the <code>var</code>,{" "}
          <code>let</code>, or <code>const</code> keywords.
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Declaring variables
var name = "John";
let age = 25;
const PI = 3.14;`}
        </pre>
        <p className="mb-2">
          The <code>var</code> keyword is used to declare variables that have
          function scope or global scope. It can be redeclared and reassigned
          throughout the program, and its value can be hoisted to the top of its
          scope.
        </p>
        <p className="mb-2">
          The <code>let</code> keyword is used to declare variables that have
          block scope. It is the recommended way to declare variables in modern
          JavaScript. Unlike <code>var</code>, variables declared with{" "}
          <code>let</code> are limited to the block in which they are defined,
          such as within a function or a loop. They cannot be redeclared in the
          same scope.
        </p>
        <p className="mb-2">
          The <code>const</code> keyword is used to declare variables that have
          block scope and whose value cannot be reassigned once it is assigned.
          Use <code>const</code> when you know the value will not change. It
          provides read-only access to the variable. Like <code>let</code>, it
          is also limited to the block in which it is defined and cannot be
          redeclared in the same scope.
        </p>

        <h3 className="text-lg font-semibold mb-2">Primitive Data Types</h3>
        <p className="mb-2">JavaScript has several primitive data types:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Number: represents numeric values (e.g., 42, 3.14)</li>
          <li>String: represents text values (e.g., "Hello, World!")</li>
          <li>Boolean: represents true or false values</li>
          <li>Undefined: represents the absence of a value</li>
          <li>Null: represents the intentional absence of any object value</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Complex Data Types</h3>
        <p className="mb-2">JavaScript also has complex data types:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Object: represents a collection of key-value pairs</li>
          <li>Array: represents an ordered list of values</li>
          <li>Function: represents a reusable block of code</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Type Coercion</h3>
        <p className="mb-2">
          JavaScript performs type coercion when combining different data types:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`console.log(5 + "5"); // "55"`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">Type Checking</h3>
        <p className="mb-2">
          You can check the type of a variable or value using the typeof
          operator:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`console.log(typeof 42); // "number"
console.log(typeof "Hello, World!"); // "string"
console.log(typeof true); // "boolean"`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">
          Assigning Types to Variables
        </h3>
        <p className="mb-2">
          In JavaScript, you can assign types to variables using the var, let,
          or const keywords:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`var age = 25; // Number
let name = "John"; // String
const isStudent = true; // Boolean`}
        </pre>
      </div>
    </div>
  );
};

export default VariablesAndDataTypes;
