"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const ColorsAndBackgrounds = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Colors and Backgrounds
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
        <h3 className="text-lg font-semibold mb-2">Color Representation</h3>
        <p className="mb-2">
          Colors can be represented using different formats:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Hexadecimal (hex): #RRGGBB</li>
          <li>RGB: rgb(red, green, blue)</li>
          <li>HSL: hsl(hue, saturation, lightness)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          Applying Colors to Elements
        </h3>
        <p className="mb-2">
          You can apply colors to elements using the <code>color</code>{" "}
          property:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`h1 {
  color: #ff0000; /* Red */
}`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">
          Background Colors and Images
        </h3>
        <p className="mb-2">
          You can set background colors and images using the{" "}
          <code>background-color</code> and <code>background-image</code>{" "}
          properties:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`body {
  background-color: #f2f2f2; /* Light gray */
}

.section {
  background-image: url('path/to/image.jpg');
}`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">
          Background Positioning and Sizing
        </h3>
        <p className="mb-2">
          You can control the positioning and sizing of background images using
          the <code>background-position</code> and <code>background-size</code>{" "}
          properties:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`.hero {
  background-image: url('path/to/image.jpg');
  background-position: center top; /* Center top */
  background-size: cover; /* Cover the entire element */
}`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">Opacity and Transparency</h3>
        <p className="mb-2">
          You can adjust the opacity of elements using the <code>opacity</code>{" "}
          property:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
}`}
        </pre>
      </div>
    </div>
  );
};

export default ColorsAndBackgrounds;
