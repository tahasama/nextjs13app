"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const ControlFlow = () => {
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
        Control Flow
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Control Flow</h3>
        <h4 className="text-md font-semibold mb-2">If Statement</h4>
        <p className="mb-2">
          The if statement is used to perform a certain block of code if a
          specified condition is true. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`let num = 5;
if (num > 0) {
  console.log("Number is positive");
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">Switch Statement</h4>
        <p className="mb-2">
          The switch statement is used to select one of many code blocks to be
          executed. It evaluates an expression and matches the expression's
          value to a case clause. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  default:
    console.log("It's another day");
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">While Loop</h4>
        <p className="mb-2">
          The while loop is used to execute a block of code as long as a
          specified condition is true. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">Do-While Loop</h4>
        <p className="mb-2">
          The do-while loop is similar to the while loop, but it executes the
          block of code at least once before checking the condition. Here's an
          example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`}
        </pre>

        <h4 className="text-md font-semibold mb-2">Break Statement</h4>
        <p className="mb-2">
          The break statement is used to exit a loop or switch statement. It
          terminates the current loop and transfers control to the next
          statement outside the loop. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">Continue Statement</h4>
        <p className="mb-2">
          The continue statement is used to skip the current iteration of a loop
          and continue with the next iteration. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}`}
        </pre>
        <h4 className="text-md font-semibold mb-2">For Loop</h4>
        <p className="mb-2">
          The for loop is used to execute a block of code a specified number of
          times. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">For...In Loop</h4>
        <p className="mb-2">
          The for...in loop is used to iterate over the properties of an object.
          Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">For...Of Loop</h4>
        <p className="mb-2">
          The for...of loop is used to iterate over the elements of an iterable
          object, such as an array or a string. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}`}
        </pre>

        <h4 className="text-md font-semibold mb-2">forEach Loop</h4>
        <p className="mb-2">
          The forEach loop is a method available for arrays in JavaScript. It
          allows you to iterate over each element of the array and perform a
          specified action. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});`}
        </pre>
      </div>
    </div>
  );
};

export default ControlFlow;
