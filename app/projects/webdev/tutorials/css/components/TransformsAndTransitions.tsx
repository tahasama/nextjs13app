"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const TransformsAndTransitions = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
    font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Transforms and Transitions
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
          CSS transforms allow you to manipulate the position, size, and shape
          of elements. You can scale, rotate, skew, and translate elements in
          both 2D and 3D space. Combined with CSS transitions, you can create
          smooth and interactive effects that enhance the user experience.
        </p>
        <h2 className="text-2xl font-bold mb-4">Transforming Elements</h2>
        <p className="mb-4">
          CSS transforms allow you to manipulate the position, size, and shape
          of elements. You can apply various transformations such as scaling,
          rotation, skewing, and translation to elements. These transformations
          can be used individually or combined to create more complex effects.
        </p>
        <h3 className="text-lg font-semibold mb-2">Scaling Elements</h3>
        <p className="mb-4">
          The <code>scale()</code> function allows you to scale an element along
          the x and y axes. You can specify scaling factors to enlarge or shrink
          the element. Here's an example that scales an image to 1.5 times its
          original size:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.scaled-image {
  transform: scale(1.5);
}`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Rotating Elements</h3>
        <p className="mb-4">
          The <code>rotate()</code> function allows you to rotate an element by
          a specified angle. Positive angles rotate the element clockwise, while
          negative angles rotate it counterclockwise. Here's an example that
          rotates a div by 45 degrees:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.rotated-div {
  transform: rotate(45deg);
}`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Skewing Elements</h3>
        <p className="mb-4">
          The <code>skew()</code> function enables you to skew an element along
          the x and y axes. You can specify angles to create diagonal effects.
          Here's an example that skews a paragraph horizontally:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.skewed-paragraph {
  transform: skewX(20deg);
}`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Translating Elements</h3>
        <p className="mb-4">
          The <code>translate()</code> function allows you to move an element
          along the x and y axes. You can specify lengths or percentages to
          define the amount of translation. Here's an example that moves a div
          50 pixels to the right and 20 pixels down:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.translated-div {
  transform: translate(50px, 20px);
}`}
        </pre>
        <h2 className="text-2xl font-bold mb-4">Transitioning Elements</h2>
        <p className="mb-4">
          CSS transitions allow you to add smooth and animated changes to
          elements. You can define the transition properties to specify which
          CSS properties should transition and the duration, timing function,
          and delay of the transition. Transitions can be triggered by various
          events such as hovering over an element or applying a class.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Defining Transition Properties
        </h3>
        <p className="mb-4">
          The <code>transition</code> property is used to specify the CSS
          properties that should transition and their respective durations,
          timing functions, and delays. Here's an example that transitions the
          background color and width of a button:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.transition-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  transition-property: background-color, width;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.transition-button:hover {
  background-color: #ff0000;
  width: 200px;
}`}
        </pre>
        <p className="mb-4">
          In the example above, when hovering over the button, the background
          color smoothly transitions from <code>#007bff</code> to{" "}
          <code>#ff0000</code> and the width expands to <code>200px</code> over
          a duration of <code>0.3s</code> using an ease-in-out timing function.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Applying Transitions to Other CSS Properties
        </h3>
        <p className="mb-4">
          Transitions can be applied to various CSS properties such as color,
          font size, opacity, and more. Here's an example that transitions the
          font size and color of a heading:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.transition-heading {
  font-size: 24px;
  color: #000;
  transition-property: font-size, color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.transition-heading:hover {
  font-size: 36px;
  color: #ff0000;
}`}
        </pre>
        <p className="mb-4">
          When hovering over the heading, the font size smoothly transitions
          from <code>24px</code> to <code>36px</code> and the color changes from{" "}
          <code>#000</code> to <code>#ff0000</code> over a duration of{" "}
          <code>0.5s</code> using an ease-in-out timing function.
        </p>
        <h2 className="text-2xl font-bold mb-4">Animations</h2>
        <p className="mb-4">
          CSS animations allow you to create dynamic and interactive effects on
          elements. You can define keyframes with different styles and apply
          them to elements to create the animation sequence. Animations can be
          triggered by various events or by applying a class using JavaScript.
        </p>
        <h3 className="text-lg font-semibold mb-2">Defining Keyframes</h3>
        <p className="mb-4">
          The <code>@keyframes</code> rule is used to define the styles at
          various points during the animation. You can specify the percentage
          values or keywords like <code>from</code> and <code>to</code> to
          indicate the start and end of the animation. Here's an example that
          animates the opacity of an element:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-element {
  animation-name: fade-in;
  animation-duration: 1s;
}`}
        </pre>
        <p className="mb-4">
          In the example above, the <code>@keyframes</code> rule defines the{" "}
          <code>fade-in</code> animation that gradually increases the opacity of
          an element from <code>0</code> to <code>1</code>. The{" "}
          <code>.fade-in-element</code> class applies the animation to the
          element with a duration of <code>1s</code>.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Applying Animation Properties
        </h3>
        <p className="mb-4">
          The <code>animation</code> property is used to specify the animation
          name, duration, timing function, delay, and other properties. Here's
          an example that animates the rotation of an image:
        </p>
        <pre className="bg-gray-800 rounded-md p-4 mb-4">
          {`.rotate-image {
  animation-name: rotate;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}
        </pre>
        <p className="mb-4">
          In the example above, the <code>.rotate-image</code> class applies the{" "}
          <code>rotate</code> animation to the image. The animation rotates the
          image from <code>0deg</code> to <code>360deg</code> over a duration of{" "}
          <code>2s</code> using an ease-in-out timing function. The{" "}
          <code>animation-iteration-count</code> property is set to{" "}
          <code>infinite</code> to make the animation repeat indefinitely.
        </p>
      </div>
    </div>
  );
};

export default TransformsAndTransitions;
