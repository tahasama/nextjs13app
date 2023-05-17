"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const CreatingLists = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Lists
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
          Lists are a great way to organize content in HTML. There are two types
          of lists you can create: ordered lists and unordered lists.
        </p>
        <h3 className="text-lg font-semibold mb-2">Ordered Lists</h3>
        <p className="mb-2">
          Ordered lists are numbered lists, where each item is numbered in
          order. To create an ordered list, use the &lt;ol&gt; tag:
        </p>
        <ol className="list-decimal list-inside mb-4 indent-3">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
        <pre className="bg-gray-800 overflow-x-auto">
          {` <ol>
       <li>List item 1</li>
       <li>List item 2</li>
       <li>List item 3</li>
     </ol>`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Unordered Lists</h3>
        <p className="mb-2">
          Unordered lists are bullet-pointed lists, where each item is preceded
          by a bullet point. To create an unordered list, use the &lt;ul&gt;
          tag:
        </p>
        <ul className="list-disc list-inside mb-4 indent-3">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <pre className="bg-gray-800 overflow-x-auto">
          {` <ul>
       <li>List item</li>
       <li>List item</li>
       <li>List item</li>
      </ul>`}
        </pre>
        <h3 className="text-lg font-semibold my-3">Nested Lists</h3>
        <p className="mb-2">
          You can also create nested lists, which are lists within lists. To
          create a nested list, you simply add another list within an existing
          list item.
        </p>
        <p className="mb-2">Here's an example of a nested list:</p>
        <ul className="list-disc list-inside mb-4 indent-3">
          <li>List item 1</li>
          <li>
            List item 2
            <ul className="list-disc list-inside mb-2 ml-4">
              <li>Nested list item 1</li>
              <li>Nested list item 2</li>
              <li>Nested list item 3</li>
            </ul>
          </li>
          <li>List item 3</li>
        </ul>
        <pre className="bg-gray-800 overflow-x-auto">
          {` <ul>
        <li>List item 1</li>
        <li>
          List item 2
          <ul>
            <li>Nested list item 1</li>
            <li>Nested list item 2</li>
            <li>Nested list item 3</li>
          </ul>
        </li>
        <li>List item 3</li>
      </ul>`}
        </pre>
      </div>
    </div>
  );
};

export default CreatingLists;
