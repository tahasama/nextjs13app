"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const SyntaxAndSelectors = () => {
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
        CSS Syntax and Selectors
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
          CSS consists of rules that define how HTML elements should be
          displayed. A CSS rule consists of a selector and a declaration block:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`selector {
  property: value;
}`}
        </pre>
        <p className="mb-2">
          The selector targets the HTML element(s) you want to style, and the
          declaration block contains one or more property-value pairs that
          define the styling. For example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`h1 {
  color: red;
}`}
        </pre>
        <p className="mb-2">
          In this example, the selector <code>h1</code> targets all{" "}
          <code>h1</code> elements, and the <code>color</code> property sets the
          text color to red.
        </p>
        <h3 className="text-lg font-semibold mb-2">CSS Selectors</h3>
        <p className="mb-2">
          CSS selectors are used to target specific HTML elements. Here are some
          commonly used selectors:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>element</code>: Targets all elements of a specific type, e.g.,
            <code>p</code> targets all <code>p</code> elements.
            <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
              {`p {
  color: red;
}`}
            </pre>
          </li>
          <li>
            <code>.class</code>: Targets elements with a specific class, e.g.,
            <code>.highlight</code> targets elements with the class "highlight".
            <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
              {`.highlight {
  background-color: yellow;
}`}
            </pre>
          </li>
          <li>
            <code>#id</code>: Targets an element with a specific ID, e.g.,
            <code>#logo</code> targets the element with the ID "logo".
            <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
              {`#logo {
  width: 100px;
  height: 100px;
}`}
            </pre>
          </li>
          <li>
            <code>elementA elementB</code>: Targets <code>elementB</code> that
            is inside <code>elementA</code>, e.g.,
            <code>ul li</code> targets <code>li</code> elements inside a{" "}
            <code>ul</code> element.
            <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
              {`ul li {
  font-weight: bold;
}`}
            </pre>
          </li>
          <li>
            <code>elementA, elementB</code>: Targets either{" "}
            <code>elementA</code> or <code>elementB</code>, e.g.,
            <code>h1, h2</code> targets both <code>h1</code> and <code>h2</code>{" "}
            elements.
            <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
              {`h1, h2 {
  text-decoration: underline;
}`}
            </pre>
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">
          CSS Selectors and Specificity
        </h2>
        <p className="mb-4">
          CSS selectors are used to target specific elements in an HTML document
          for styling. Understanding CSS specificity is important to determine
          which styles will be applied when there are conflicting selectors.
          Specificity is calculated based on the number and types of selectors
          used.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Understanding CSS Specificity
        </h3>
        <p className="mb-4">
          CSS specificity is a weight that determines the precedence of
          conflicting styles. The more specific a selector is, the higher its
          specificity. Specificity is calculated using the following hierarchy:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Inline styles: Styles applied directly to an element using the{" "}
            <code>style</code> attribute have the highest specificity.
          </li>
          <li>
            ID selectors: Selectors targeting elements by their unique{" "}
            <code>id</code> have higher specificity.
          </li>
          <li>
            Class selectors: Selectors targeting elements by their{" "}
            <code>class</code> have medium specificity.
          </li>
          <li>
            Element selectors: Selectors targeting elements by their tag name
            have the lowest specificity.
          </li>
        </ul>
        <p className="mb-4">
          When multiple conflicting styles are applied to an element, the style
          with the highest specificity will be applied. In case of equal
          specificity, the style defined later in the CSS document will take
          precedence.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Combining Selectors with Multiple Classes and IDs
        </h3>
        <p className="mb-4">
          You can combine multiple classes and IDs to create more specific
          selectors. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          {`.container .card#featured {
  /* Styles for the featured card inside the container */
}`}
        </pre>
        <p className="mb-4">
          In the example above, the selector{" "}
          <code>.container .card#featured</code> targets the card with the{" "}
          <code>id</code> "featured" that is inside an element with the class
          "container". By combining classes and IDs, you can create highly
          specific selectors to target specific elements in your HTML document.
        </p>

        <p className="mb-2">
          These are just a few examples of CSS selectors. There are many more
          selectors available that allow you to target elements based on their
          attributes, relationships, and more.
        </p>
      </div>
    </div>
  );
};

export default SyntaxAndSelectors;
