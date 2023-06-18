"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ES6Features = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
    font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        ES6+ Features{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">ES6+ Features</h3>
        <p className="mb-2">
          ES6+ (ECMAScript 6 and later versions) introduced several powerful
          features that enhance JavaScript functionality and make code more
          concise and expressive. Let's explore some of these features.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Arrow Functions and Lexical Scope
        </h4>
        <p className="mb-2">
          Arrow functions provide a concise syntax for writing functions. They
          capture the lexical scope of the surrounding code, which means they
          inherit the context in which they are defined. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const greet = (name) => {
  console.log("Hello, " + name);
};

greet("John"); // Output: Hello, John`}
        </pre>
        <h4 className="text-md font-semibold mb-2">
          Destructuring and Object Shorthand
        </h4>
        <p className="mb-2">
          Destructuring allows you to extract values from arrays or objects into
          individual variables. It provides a convenient way to access and use
          specific values. Object shorthand notation simplifies object creation
          by directly using variable names as object properties. Here's an
          example of both features:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`// Array Destructuring
const [x, y] = [1, 2];
console.log(x, y); // Output: 1 2

// Object Shorthand
const name = "John";
const age = 30;
const person = { name, age };
console.log(person); // Output: { name: "John", age: 30 }`}
        </pre>
        <h4 className="text-md font-semibold mb-2">
          Modules and Module Import/Export
        </h4>
        <p className="mb-2">
          Modules allow you to organize and separate code into reusable
          components. You can use the <code>import</code> and{" "}
          <code>export</code> keywords to define dependencies between modules
          and share functionality across files. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`// File: module.js
export const greeting = "Hello, world!";

// File: main.js
import { greeting } from "./module.js";
console.log(greeting); // Output: Hello, world!`}
        </pre>
        <h4 className="text-md font-semibold mb-2">Classes and Inheritance</h4>
        <p className="mb-2">
          Classes provide a way to define objects with shared properties and
          methods. You can create class instances using the <code>new</code>{" "}
          keyword. Classes also support inheritance through the{" "}
          <code>extends</code> keyword, allowing you to create subclasses that
          inherit from a base class. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const square = new Square("red", 5);
console.log(square.getColor()); // Output: red
console.log(square.getArea()); // Output: 25`}
        </pre>
        <p className="mb-2">
          These are just a few examples of the powerful features introduced in
          ES6+. They contribute to writing more concise and readable code,
          improving developer productivity and code maintainability.
        </p>
      </div>
    </div>
  );
};

export default ES6Features;
