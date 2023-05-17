"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const Conclusion = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      {/* Conclusion */}
      <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
        <button
          className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
      font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
          onClick={() => setShowSection(!ShowSection)}
        >
          Conclusion
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
          <div className={`indent-10 mb-8  mt-3`}>
            <p className="mb-4 text-lg leading-loose tracking-normal">
              This tutorial covered the fundamentals of HTML, including text
              formatting and styles, working with links and images, creating
              lists, tables, and forms. We also introduced the concept of
              semantic HTML and how it can improve website accessibility and
              SEO.
            </p>
            <p className="mb-4 text-lg leading-loose">
              However, HTML is a vast topic and there are many more tags and
              features to learn. We briefly discussed additional tags such as{" "}
              <code>p</code>, <code>h1</code>, <code>h2</code>, <code>h3</code>,{" "}
              <code>h4</code>, <code>h5</code>, <code>h6</code>,{" "}
              <code>div</code>, and <code>span</code> that are commonly used in
              web development. Learning these tags and their attributes can
              enhance the structure and presentation of your web pages.
            </p>
            <p className="mb-4 text-lg leading-loose">
              Moving forward, we will delve into the world of CSS, which allows
              us to style and design our HTML content. With CSS, we can add
              colors, typography, layout, and more to our web pages. Stay tuned
              for our CSS tutorial!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conclusion;
