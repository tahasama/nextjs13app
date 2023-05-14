"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Resizable from "../../../resizable";
import VanillaEditor from "./VanillaEditor";
import Iframe from "./Iframe";

const FrameEeditor = () => {
  let x: any = 0;
  if (typeof window !== "undefined") {
    x = window;
  }
  const [handleWidth, setHandleWidth] = useState(0);

  useEffect(() => {
    setHandleWidth(x.innerWidth * 0.8);
  }, []);

  useEffect(() => {
    // Define function to handle window resize
    const handleResize = () => {
      setHandleWidth(x.innerWidth * 0.8);
    };

    // Add event listener for window resize

    x.addEventListener("resize", handleResize);

    // Clean up event listener and timer
    return () => {
      x.removeEventListener("resize", handleResize);
    };
  }, [x]);

  return (
    <div className=" bg-gradient-to-b from-gray-800 to-black rounded-md py-3">
      <Resizable direction="vertical-react" handleWidth={handleWidth}>
        <div
          style={{
            height: "100%",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <Resizable direction="horizontal-react" handleWidth={handleWidth}>
            <VanillaEditor />
          </Resizable>
          <Iframe />
        </div>
      </Resizable>
    </div>
  );
};

export default FrameEeditor;
