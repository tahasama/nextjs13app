"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const HTML5SemanticTags = () => {
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
        Advanced HTML
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
        <h2 className="text-xl font-bold mb-4">HTML5 Semantic Tags</h2>
        <p className="mb-4">
          HTML5 introduced a number of new semantic tags that allow you to
          describe the content of your web pages in a more meaningful way. Here
          are some of the most commonly used tags:
        </p>
        <ul className="list-disc list-inside mb-4 indent-3">
          <li>
            <strong>&lt;header&gt;</strong> - defines a header for a document or
            section
          </li>
          <li>
            <strong>&lt;nav&gt;</strong> - defines a set of navigation links
          </li>
          <li>
            <strong>&lt;main&gt;</strong> - defines the main content of a
            document
          </li>
          <li>
            <strong>&lt;article&gt;</strong> - defines an article
          </li>
          <li>
            <strong>&lt;section&gt;</strong> - defines a section
          </li>
          <li>
            <strong>&lt;aside&gt;</strong> - defines content aside from the
            content (like a sidebar)
          </li>
          <li>
            <strong>&lt;footer&gt;</strong> - defines a footer for a document or
            section
          </li>
        </ul>
        <p className="mb-4">
          Using semantic tags can help search engines and other tools better
          understand the structure and content of your web pages, and can also
          make it easier for people with disabilities to navigate your site.
        </p>
        <h3 className="font-bold mb-2">Example Usage:</h3>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content goes here.</p>
    </article>
    <section>
      <h2>Section Title</h2>
      <p>Section content goes here.</p>
    </section>
    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">Article 1</a></li>
        <li><a href="#">Article 2</a></li>
        <li><a href="#">Article 3</a></li>
      </ul>
    </aside>
  </main>
  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>`}
        </pre>
      </div>
    </div>
  );
};

export default HTML5SemanticTags;
