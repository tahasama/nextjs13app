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
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      <Head>
        <title>Getting Started with CSS</title>
      </Head>
      <div className={`${lato} w-full bg-gray-900 text-white`}>
        {/* Introduction */}
        <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center">
            Welcome to the CSS tutorial!
          </h1>
          <p className="mb-4 text-xl leading-loose tracking-normal">
            CSS (Cascading Style Sheets) is a stylesheet language used for
            describing the presentation of a document written in HTML. It is
            used to control the layout, formatting, and appearance of web pages.
          </p>
          <p className="text-xl leading-loose">
            In this tutorial, we will explore the fundamentals of CSS, including
            its syntax, selectors, box model, typography, colors and
            backgrounds, layouts and positioning, transitions and animations,
            and more. By the end of the tutorial, you will have a strong
            understanding of CSS and be able to style and design beautiful web
            pages.
          </p>
          <div className="mt-10">
            <button
              className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
              onClick={() => setShowSection(!ShowSection)}
            >
              Box Model
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
              <h2 className="text-lg font-medium text-gray-200">
                Basic Structure of a CSS Document
              </h2>
              <p className="mt-2">
                To apply CSS styles to an HTML document, you can include a{" "}
                <code className="bg-gray-800 px-1">{"<style>"}</code> element
                within the HTML{" "}
                <code className="bg-gray-800 px-1">{"<head>"}</code> section or
                link an external CSS file using the{" "}
                <code className="bg-gray-800 px-1">{"<link>"}</code> element.
              </p>
              <pre className="bg-gray-800 rounded-md p-4 mt-2">
                {`<!DOCTYPE html>
  <html>
    <head>
      <title>Page Title</title>
      <style>
        /* CSS styles go here */
      </style>
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
