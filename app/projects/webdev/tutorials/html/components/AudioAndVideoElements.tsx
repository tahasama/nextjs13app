"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const AudioAndVideoElements = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
    font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Audio and Video Elements
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
          HTML5 introduced the <strong>&lt;audio&gt;</strong> and{" "}
          <strong>&lt;video&gt;</strong> elements for embedding media in web
          pages.
        </p>
        <h3 className="text-xl font-bold my-2">Audio Element</h3>
        <p className="mb-2">
          The <strong>&lt;audio&gt;</strong> element is used to embed audio
          content in a web page. It supports various attributes such as src,
          controls, autoplay, loop, and more.
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<audio src="/path/to/audio.mp3" controls></audio>`}
        </pre>
        <audio src="/path/to/audio.mp3" controls></audio>
        <h3 className="text-xl font-bold my-2">Video Element</h3>
        <p className="mb-2">
          The <strong>&lt;video&gt;</strong> element is used to embed video
          content in a web page. It supports various attributes such as src,
          controls, autoplay, loop, width, height, and more.
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-x-auto">
          {`<video src="/path/to/video.mp4" controls width="640" height="360"></video>`}
        </pre>
        <video
          src="/path/to/video.mp4"
          controls
          width="640"
          height="360"
        ></video>
      </div>
    </div>
  );
};

export default AudioAndVideoElements;
