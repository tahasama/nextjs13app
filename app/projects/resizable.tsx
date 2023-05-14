import React from "react";
import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
  direction:
    | "horizontal"
    | "vertical-down"
    | "vertical-up"
    | "horizontal-react"
    | "vertical-react";
}

const Resizable = ({ direction, children, handleWidth }: any) => {
  let x: number = 0;
  let y: number = 0;
  if (typeof window !== "undefined") {
    (x = window.innerWidth), (y = window.innerHeight);
  }
  let resizableProps: ResizableBoxProps;

  {
    if (direction === "horizontal") {
      resizableProps = {
        className: "resize-horizontal",
        minConstraints: [x * 0.1, Infinity],
        maxConstraints: [x * 0.73, Infinity],
        height: 300,
        width: x * 0.313,
        resizeHandles: ["e"],
      };
    } else if (direction === "horizontal-react") {
      resizableProps = {
        className: "resize-horizontal react",
        minConstraints: [x * 0.1, Infinity],
        maxConstraints: [x * 0.9, Infinity],
        height: Infinity,
        width: handleWidth * 0.9,
        resizeHandles: ["e"],
      };
    } else if (direction === "vertical-react") {
      resizableProps = {
        className: "resize-vertical react",
        minConstraints: [Infinity, 40],
        maxConstraints: [Infinity, y * 0.9],
        height: 220,
        width: handleWidth,
        resizeHandles: ["s"],
      };
    } else if (direction === "vertical-down") {
      resizableProps = {
        className: "resize-vertical down",

        minConstraints: [Infinity, 70],
        maxConstraints: [Infinity, y * 0.81],
        height: y * 0.64,
        width: x * 0.92,
        resizeHandles: ["s"],
      };
    } else {
      resizableProps = {
        className: "resize-vertical up",
        minConstraints: [Infinity, 40],
        maxConstraints: [Infinity, y * 0.9],
        height: 400,
        width: Infinity,
        resizeHandles: ["s"],
      };
    }
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
