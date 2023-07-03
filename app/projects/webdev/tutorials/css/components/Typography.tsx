"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
const Typography = () => {
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
        CSS Typography
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
        <h3 className="text-xl font-bold mb-4">
          Font Families and Web-Safe Fonts
        </h3>
        <p className="mb-2">
          You can specify different font families for your text using the{" "}
          <code>font-family</code> property. These fonts are considered web-safe
          and are available on most devices:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Arial, sans-serif</li>
          <li>Helvetica, sans-serif</li>
          <li>Times New Roman, serif</li>
          <li>Courier New, monospace</li>
          <li>Verdana, sans-serif</li>
        </ul>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4  overflow-auto">
          {`body {
  font-family: Arial, sans-serif;
}`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">Using a Custom Font</h3>
        <p className="mb-2">
          You can also use custom fonts in your web projects. One popular way is
          to use Google Fonts:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Visit{" "}
            <a
              href="https://fonts.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonts.google.com
            </a>{" "}
            and choose a font you like.
          </li>
          <li>
            Add the font link to your HTML head:
            <pre className="bg-gray-800 rounded-md text-white p-2 mt-2  overflow-auto">
              {`<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">`}
            </pre>
          </li>
          <li>
            Use the custom font in your CSS:
            <pre className="bg-gray-800 rounded-md text-white p-2 mt-2 overflow-auto">
              {`body {
  font-family: 'Open Sans', sans-serif;
}`}
            </pre>
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Font Sizes and Units</h3>
        <p className="mb-2">
          When setting font sizes, you can use different units of measurement.
          Here are some common options:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4  overflow-auto">
          {`h1 {
  font-size: 2rem; /* Sets the font size to 2 times the root font size */
}

p {
  font-size: 16px; /* Sets the font size to 16 pixels */
}

span {
  font-size: 1.2em; /* Sets the font size to 1.2 times the parent element's font size */
}

h2 {
  font-size: 18pt; /* Sets the font size to 18 points */
}`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">
          Text Decoration and Transformation
        </h3>
        <p className="mb-2">
          To add text decoration or apply text transformations, use the{" "}
          <code>text-decoration</code> and <code>text-transform</code>{" "}
          properties. You can underline, overline, or strike through the text,
          and transform it to uppercase, lowercase, or capitalize it:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`a {
  text-decoration: underline;
}

h1 {
  text-transform: uppercase;
}

p {
  text-transform: capitalize;
}

span {
  text-transform: lowercase;
}

h2 {
  text-transform: none;
}`}
        </pre>
      </div>
    </div>
  );
};

export default Typography;
