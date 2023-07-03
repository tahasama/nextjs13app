"use client";
import { Lato } from "next/font/google";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
const Introduction = () => {
  const [showSection, setShowSection] = useState(false);

  return (
    <>
      <div className={`${lato} w-full bg-gray-900 text-white`}>
        {/* Introduction */}
        <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center">
            Welcome to the JavaScript tutorial!
          </h1>
          <p className="mb-4 text-xl leading-loose tracking-normal">
            JavaScript is a programming language commonly used for web
            development. It allows you to add interactivity and dynamic behavior
            to your web pages.
          </p>
          <p className="text-xl leading-loose">
            In this tutorial, we will cover the basics of JavaScript, including
            variables, data types, control flow, functions, DOM manipulation,
            asynchronous programming, and more. By the end of the tutorial, you
            will have a solid understanding of JavaScript and be able to build
            interactive web applications.
          </p>
          <div className="mt-10">
            <button
              className={`${
                showSection ? "sticky top-20 bg-slate-500" : ""
              } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
              onClick={() => setShowSection(!showSection)}
            >
              Basic Concepts
              {!showSection ? (
                <FaCaretDown size={24} className="ml-8" />
              ) : (
                <FaCaretUp size={24} className="ml-8" />
              )}
            </button>
            <div
              className={`${
                !showSection ? "hidden" : "visible"
              } indent-10 mb-8 mt-3`}
            >
              <h2 className="text-lg font-medium text-gray-200">
                JavaScript Syntax and Structure
              </h2>
              <p className="mt-2">
                To use JavaScript in your web pages, you can include a
                <code className="bg-gray-800 px-1">{"<script>"}</code> element
                within the HTML
                <code className="bg-gray-800 px-1">{"<head>"}</code> section or
                at the end of the
                <code className="bg-gray-800 px-1">{"<body>"}</code> element.
              </p>
              <pre className="bg-gray-800 rounded-md p-4 mt-2 overflow-auto">
                {`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <script>
      // JavaScript code goes here
    </script>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
