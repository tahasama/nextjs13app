"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const Frameworks = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        CSS Frameworks
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
        <p className="mb-4">
          CSS frameworks are pre-designed sets of CSS rules and components that
          can be used to build websites and web applications more efficiently.
          They provide a foundation of styles, layout systems, and responsive
          components, saving you time and effort in the development process.
        </p>
        <p className="mb-4">
          CSS frameworks typically include a grid system for creating responsive
          layouts, pre-designed UI components such as buttons, forms, and
          navigation menus, and a standardized set of typography and color
          styles. They are often built with a mobile-first approach, ensuring
          that your website or application looks great on different devices and
          screen sizes.
        </p>
        <h3 className="text-lg font-semibold mb-2">Popular CSS Frameworks</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <a
              href="https://getbootstrap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold underline-offset-2"
            >
              <u>Bootstrap : </u>
            </a>
            A widely used CSS framework that provides a comprehensive set of
            responsive components and utilities.
          </li>
          <li>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold underline-offset-2"
            >
              <u>Tailwind CSS : </u>
            </a>
            A utility-first CSS framework that offers a large set of
            pre-designed utility classes for building custom designs.
          </li>
          <li>
            <a
              href="https://bulma.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold underline-offset-2"
            >
              <u>Bulma : </u>
            </a>
            A lightweight and modern CSS framework with a modular approach and
            flexible grid system.
          </li>
          <li>
            <a
              href="https://chakra-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 font-semibold underline-offset-2"
            >
              <u>Chakra UI : </u>
            </a>
            A responsive front-end framework that provides a flexible grid
            system and a range of UI components.
          </li>
        </ul>
        <p className="mb-4">
          These are just a few examples of popular CSS frameworks. Each
          framework has its own set of features, styles, and approaches. You can
          choose a framework that aligns with your project requirements and
          development preferences to streamline your CSS development process.
        </p>
        <p className="mb-4">
          It's worth noting that while CSS frameworks can be helpful for rapid
          prototyping and development, they may also come with some drawbacks.
          They can add extra file size to your project and may require
          customization to match your specific design needs. It's important to
          consider the pros and cons of using a framework before integrating it
          into your project.
        </p>
      </div>
    </div>
  );
};

export default Frameworks;
