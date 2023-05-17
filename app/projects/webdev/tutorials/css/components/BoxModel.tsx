"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const BoxModel = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
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
        <p className="mb-2">
          The CSS Box Model is a fundamental concept in CSS that describes the
          layout and sizing of elements on a web page. It consists of several
          properties that define the dimensions, padding, border, and margin of
          an element.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Understanding the Box Model Concept
        </h3>
        <p className="mb-2">
          The box model concept represents each element as a rectangular box
          with four areas: content, padding, border, and margin. These areas
          contribute to the overall size and spacing of the element on the page.
        </p>
        <h3 className="text-lg font-semibold mb-2">Box Model Properties</h3>
        <p className="mb-2">
          The box model properties allow you to control the dimensions and
          spacing of an element:
        </p>{" "}
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`
            .box {
              width: 200px;
              height: 150px;
              padding: 20px;
              border: 1px solid black;
              margin: 10px;
            }
            
            `}
        </pre>
        <ul className="list-disc list-inside mb-4 indent-3">
          <li>
            <strong>Width:</strong> Sets the width of the content area.
          </li>
          <li>
            <strong>Height:</strong> Sets the height of the content area.
          </li>
          <li>
            <strong>Padding:</strong> Adds space between the content and the
            border.
          </li>
          <li>
            <strong>Border:</strong> Defines the border around the content and
            padding area.
          </li>
          <li>
            <strong>Margin:</strong> Creates space outside the border, affecting
            the element's positioning and spacing with other elements.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Box Sizing</h3>
        <p className="mb-2">
          The <code>box-sizing</code> property determines how the total width
          and height of an element is calculated. There are two possible values:
        </p>
        <ul className="list-disc list-inside mb-4 indent-3">
          <li>
            <strong>Content-box:</strong> The default value. The width and
            height only include the content area, excluding padding and border.
          </li>
          <li>
            <strong>Border-box:</strong> The width and height include the
            content, padding, and border areas, making it easier to specify the
            overall size of the element.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxModel;
