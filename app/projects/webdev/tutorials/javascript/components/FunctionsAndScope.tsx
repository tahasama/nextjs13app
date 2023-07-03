"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FunctionsAndScope = () => {
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
        Functions and Scope
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Functions</h3>
        <p className="mb-2">
          Functions in JavaScript allow you to group and reuse blocks of code.
        </p>

        <h4 className="text-base font-semibold mb-2">Declaring Functions</h4>
        <p className="mb-2">
          You can declare a function using the <code>function</code> keyword:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function greet() {
  console.log('Hello, world!');
}`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Calling Functions</h4>
        <p className="mb-2">
          You can call a function by using its name followed by parentheses:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`greet();`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Function Parameters</h4>
        <p className="mb-2">
          Functions can accept parameters, which are values passed to the
          function:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('John');`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Return Statement</h4>
        <p className="mb-2">
          Functions can return a value using the <code>return</code> statement:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // Output: 8`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">Scope</h3>
        <p className="mb-2">
          Scope determines the accessibility and lifetime of variables and
          functions.
        </p>

        <h4 className="text-base font-semibold mb-2">Global Scope</h4>
        <p className="mb-2">
          Variables declared outside of any function have global scope and can
          be accessed anywhere in the code:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const globalVariable = 'I am global';

function printGlobal() {
  console.log(globalVariable);
}

printGlobal(); // Output: I am global`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Local Scope</h4>
        <p className="mb-2">
          Variables declared inside a function have local scope and can only be
          accessed within that function:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function printLocal() {
  const localVariable = 'I am local';
  console.log(localVariable);
}

printLocal(); // Output: I am local
console.log(localVariable); // Throws an error: localVariable is not defined`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Block Scope</h4>
        <p className="mb-2">
          Variables declared with <code>let</code> and <code>const</code>{" "}
        </p>
        <h4 className="text-base font-semibold mb-2">Block Scope</h4>
        <p className="mb-2">
          Variables declared with <code>let</code> and <code>const</code> have
          block scope and are only accessible within the block they are defined
          in:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function printBlock() {
  if (true) {
    let blockVariable = 'I am inside a block';
    console.log(blockVariable);
  }
  console.log(blockVariable); // Throws an error: blockVariable is not defined
}

printBlock(); // Output: I am inside a block`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Function Scope</h4>
        <p className="mb-2">
          Each function creates its own scope, and variables declared inside a
          function are only accessible within that function:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`function outerFunction() {
  const outerVariable = 'I am outer';

  function innerFunction() {
    const innerVariable = 'I am inner';
    console.log(innerVariable);
    console.log(outerVariable);
  }

  innerFunction(); // Output: I am inner, I am outer
  console.log(innerVariable); // Throws an error: innerVariable is not defined
}

outerFunction();`}
        </pre>
      </div>
    </div>
  );
};

export default FunctionsAndScope;
