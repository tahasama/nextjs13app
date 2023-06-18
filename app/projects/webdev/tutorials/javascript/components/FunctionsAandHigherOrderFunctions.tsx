"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const FunctionsAandHigherOrderFunctions = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
  font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Functions and Higher-Order Functions{" "}
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
          Functions and Higher-Order Functions
        </h3>
        <p className="mb-2">
          Functions are a fundamental concept in JavaScript that allow you to
          encapsulate reusable blocks of code. They can be defined and invoked,
          accept parameters, and return values. In addition, JavaScript supports
          callback functions and higher-order functions, which provide powerful
          ways to work with functions.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Defining and Invoking Functions
        </h4>
        <p className="mb-2">
          In JavaScript, you can define a function using the{" "}
          <code>function</code> keyword followed by the function name, a list of
          parameters (optional), and the function body enclosed in curly braces.
          Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`function sayHello() {
  console.log("Hello!");
}

// Invoke the function
sayHello();`}
        </pre>
        <p className="mb-2">
          In this example, the function <code>sayHello</code> is defined without
          any parameters. The function body contains the code that will be
          executed when the function is invoked. To invoke a function, you
          simply write its name followed by parentheses.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Function Parameters and Return Values
        </h4>
        <p className="mb-2">
          Functions can accept parameters, which are values passed to the
          function when it's invoked. Parameters allow you to provide dynamic
          input to a function. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`function greet(name) {
  console.log("Hello, " + name + "!");
}

// Invoke the function with a parameter
greet("John");`}
        </pre>
        <p className="mb-2">
          In this example, the function <code>greet</code> accepts a{" "}
          <code>name</code> parameter. When the function is invoked with the
          value "John," it will print "Hello, John!" to the console. Parameters
          allow functions to work with different values without having to
          rewrite the function logic.
        </p>
        <p className="mb-2">
          Functions can also return values using the <code>return</code>{" "}
          keyword. The returned value can be used by the code that invoked the
          function. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`function add(a, b) {
  return a + b;
}

// Invoke the function and store the result
const sum = add(2, 3);
console.log(sum); // Output: 5`}
        </pre>
        <p className="mb-2">
          In this example, the function <code>add</code> takes two parameters{" "}
          <code>a</code> and <code>b</code>. It returns the sum of the two
          numbers. The returned value is stored in the <code>sum</code> variable
          and then printed to the console.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Callback Functions and Higher-Order Functions
        </h4>
        <p className="mb-2">
          In JavaScript, functions are first-class objects, which means they can
          be assigned to variables, passed as arguments to other functions, and
          returned as values from other functions. This enables the use of
          callback functions and higher-order functions.
        </p>
        <p className="mb-2">
          A callback function is a function that is passed as an argument to
          another function and is invoked inside that function. Callback
          functions are commonly used for asynchronous operations, event
          handling, and more. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Invoke the function with a callback
greet("John", sayGoodbye);`}
        </pre>
        <p className="mb-2">
          In this example, the function <code>greet</code> accepts a{" "}
          <code>name</code> parameter and a <code>callback</code> parameter.
          After greeting the person, it invokes the <code>callback</code>{" "}
          function, which, in this case, is <code>sayGoodbye</code>. The output
          will be "Hello, John!" followed by "Goodbye!".
        </p>
        <p className="mb-2">
          Higher-order functions are functions that can accept other functions
          as arguments and/or return functions. They provide a way to abstract
          and manipulate code behavior. Common examples of higher-order
          functions in JavaScript are <code>map</code>, <code>filter</code>, and{" "}
          <code>reduce</code>. Here's an example using <code>map</code>:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

const doubledNumbers = numbers.map(double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]`}
        </pre>
        <p className="mb-2">
          In this example, the <code>map</code> function is a higher-order
          function that accepts the <code>double</code> function as an argument.
          It applies the <code>double</code> function to each element in the{" "}
          <code>numbers</code> array and returns a new array with the doubled
          values.
        </p>
        <p className="mb-2">
          Understanding and utilizing functions, along with callback functions
          and higher-order functions, is essential for writing modular and
          reusable code in JavaScript.
        </p>
      </div>
    </div>
  );
};

export default FunctionsAandHigherOrderFunctions;
