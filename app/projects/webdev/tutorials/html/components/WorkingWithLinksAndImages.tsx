"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const WorkingWithLinksAndImages = () => {
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
        Links and Images
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
          Links and images are important elements in HTML. Here's how you can
          use them:
        </p>
        <h3 className="text-lg font-semibold mb-2">Links</h3>
        <p className="mb-2">
          To create a link, use the <code>&lt;a&gt;</code> tag with the{" "}
          <code>href</code> attribute:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<a href="https://www.example.com">Example Link</a>`}
        </pre>
        <p className="mb-2">
          You can also use the <code>target</code> attribute to specify where
          the link should open:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<a href="https://www.example.com" target="_blank">Open in New Tab</a>`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Images</h3>
        <p className="mb-2">
          To add an image, use the <code>&lt;img&gt;</code> tag with the{" "}
          <code>src</code> attribute:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<img src="https://www.example.com/image.jpg" alt="Example Image">`}
        </pre>
        <p className="mb-2">
          You can also use the <code>width</code> and <code>height</code>{" "}
          attributes to resize the image:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<img src="https://www.example.com/image.jpg" alt="Example Image" width="400" height="300">`}
        </pre>
      </div>
    </div>
  );
};

export default WorkingWithLinksAndImages;
