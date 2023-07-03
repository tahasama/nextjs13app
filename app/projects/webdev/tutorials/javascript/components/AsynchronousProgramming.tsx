"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const AsynchronousProgramming = () => {
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
        Asynchronous Programming{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Asynchronous JavaScript</h3>
        <p className="mb-2">
          Asynchronous programming in JavaScript allows you to execute tasks
          concurrently, without blocking the execution of other operations. It's
          particularly useful for handling time-consuming operations such as
          network requests, file operations, and animations.
        </p>
        <p className="mb-2">
          JavaScript provides several mechanisms for asynchronous programming,
          including timers, callbacks, Promises, and async/await. Let's explore
          some of these concepts in more detail.
        </p>

        <h4 className="text-md font-semibold mb-2">Timers and Intervals</h4>
        <p className="mb-2">
          Timers and intervals are used to schedule the execution of code after
          a certain delay or at regular intervals. JavaScript offers two main
          functions for this purpose:
        </p>
        <ul>
          <li>
            <code>setTimeout</code>: Executes a function once after a specified
            delay.
          </li>
          <li>
            <code>setInterval</code>: Executes a function repeatedly at
            specified intervals.
          </li>
        </ul>
        <p className="mb-2">
          Here's an example that demonstrates the usage of these functions:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Execute code after a delay of 2 seconds
setTimeout(() => {
  console.log("Delayed code executed");
}, 2000);

// Execute code every 1 second
const intervalId = setInterval(() => {
  console.log("Interval code executed");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);`}
        </pre>

        <h4 className="text-md font-semibold mb-2">Promises and Async/Await</h4>
        <p className="mb-2">
          Promises are a way to handle asynchronous operations in a more
          structured manner. A Promise represents the eventual completion or
          failure of an asynchronous operation and allows you to chain
          operations using <code>then</code> and <code>catch</code> methods.
        </p>
        <p className="mb-2">
          Here's an example that demonstrates the usage of Promises:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Simulating an asynchronous operation
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 2000);
  });
};

// Using the Promise
fetchData()
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });`}
        </pre>

        <p className="mb-2">
          Async/await is a syntax introduced in ES2017 that provides a more
          concise way to work with Promises. It allows you to write asynchronous
          code that resembles synchronous code, making it easier to read and
          maintain.
        </p>
        <p className="mb-2">
          Here's an example that demonstrates the usage of async/await:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Using async/await with Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      resolve(data);
    }, 2000);
  });
};

// Using async/await
const getData = async () => {
  try {
    const data = await fetchData();
    console.log(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
};

getData();`}
        </pre>

        <p className="mb-2">
          By using async/await, the code reads sequentially, and errors can be
          caught using a try-catch block, similar to synchronous code.
        </p>

        <p className="mb-2">
          These are some of the mechanisms provided by JavaScript for handling
          asynchronous operations. They allow you to write efficient and
          responsive code by leveraging the non-blocking nature of JavaScript.
        </p>

        <p className="mb-2">
          Feel free to explore further documentation and examples on each of
          these topics to gain a more comprehensive understanding of
          asynchronous programming in JavaScript.
        </p>
      </div>
    </div>
  );
};

export default AsynchronousProgramming;
