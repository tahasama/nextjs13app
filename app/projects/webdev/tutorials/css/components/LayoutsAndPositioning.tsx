"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const LayoutsAndPositioning = () => {
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
        Layouts and Positioning
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
        <h3 className="text-lg font-semibold mb-2">
          Display Property and Values
        </h3>
        <p className="mb-2">
          The <code>display</code> property defines how an element should be
          displayed. Here are some common values:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <code>block</code>: Displays an element as a block-level element,
            taking up the full width of its parent container.
          </li>
          <li className="mb-2">
            <code>inline</code>: Displays an element inline, allowing other
            elements to appear beside it on the same line.
          </li>
          <li className="mb-2">
            <code>inline-block</code>: Displays an element inline, but allows
            setting width, height, padding, and margin properties like a
            block-level element.
          </li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">
          Floats and Clearing Floats
        </h3>
        <p className="mb-2">
          The <code>float</code> property allows elements to float to the left
          or right of their containing elements. This is commonly used for
          creating multiple columns or wrapping text around images. To clear
          floats and prevent elements from wrapping around a floated element,
          you can use the <code>clear</code> property.
        </p>
        <h3 className="text-lg font-semibold mb-2">Positioning Schemes</h3>
        <p className="mb-2">
          CSS offers several positioning schemes to control the layout of
          elements. These include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <code>static</code>: The default positioning scheme where elements
            follow the normal document flow.
          </li>
          <li className="mb-2">
            <code>relative</code>: Allows elements to be positioned relative to
            their normal position in the document flow.
          </li>
          <li className="mb-2">
            <code>absolute</code>: Positions elements relative to their closest
            positioned ancestor or to the initial containing block.
          </li>
          <li className="mb-2">
            <code>fixed</code>: Positions elements relative to the browser
            window, so they stay in the same place even if the page is scrolled.
          </li>
        </ul>
        <>
          {/* Flexbox */}
          <h3 className="text-lg font-semibold mb-2">Flexbox</h3>
          <p className="mb-2">
            Flexbox is a powerful layout mechanism in CSS that allows you to
            create flexible and responsive layouts. It provides a simple and
            efficient way to distribute space among items in a container, even
            when the container's size changes.
          </p>
          <p className="mb-2">
            To create a flex container, you can use the{" "}
            <code>display: flex</code> property on the parent element. This
            turns the element into a flex container, and its child elements
            become flex items.
          </p>
          <p className="mb-2">
            Flexbox provides several properties that allow you to control the
            behavior of flex items within the container:
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              <code>flex-direction</code>: Specifies the direction of the flex
              items within the container. It can be set to <code>row</code>{" "}
              (horizontal), <code>column</code> (vertical),{" "}
              <code>row-reverse</code>, or <code>column-reverse</code>.
            </li>
            <li>
              <code>justify-content</code>: Defines how flex items are
              positioned along the main axis of the container. It can be set to{" "}
              <code>flex-start</code>, <code>flex-end</code>,{" "}
              <code>center</code>, <code>space-between</code>,{" "}
              <code>space-around</code>, or <code>space-evenly</code>.
            </li>
            <li>
              <code>align-items</code>: Determines how flex items are aligned
              along the cross axis of the container. It can be set to{" "}
              <code>flex-start</code>, <code>flex-end</code>,{" "}
              <code>center</code>, <code>baseline</code>, or{" "}
              <code>stretch</code>.
            </li>
            <li>
              <code>flex-wrap</code>: Specifies whether flex items should wrap
              to multiple lines if they exceed the container's width. It can be
              set to <code>nowrap</code>, <code>wrap</code>, or{" "}
              <code>wrap-reverse</code>.
            </li>
          </ul>
          <p className="mb-2">
            With the combination of these properties, you can create a wide
            range of flexible layouts. Flexbox provides an intuitive and
            powerful way to handle alignment, spacing, and responsiveness within
            a container.
          </p>
          <p className="mb-2">
            It's important to note that Flexbox is well-supported by modern
            browsers, making it a reliable choice for building responsive web
            designs. By leveraging Flexbox, you can achieve complex layouts with
            ease and adapt them to different screen sizes and devices.
          </p>
        </>
        <>
          {/* Grid */}
          <h3 className="text-lg font-semibold mb-2">CSS Grid</h3>
          <p className="mb-2">
            CSS Grid is a powerful layout system in CSS that allows you to
            create two-dimensional grid layouts with ease. It provides a
            flexible and intuitive way to organize content in rows and columns,
            making it ideal for complex grid-based designs.
          </p>
          <p className="mb-2">
            To create a grid container, you can use the{" "}
            <code>display: grid</code> property on the parent element. This
            turns the element into a grid container, and its child elements
            become grid items.
          </p>
          <p className="mb-2">
            CSS Grid provides several properties that allow you to control the
            layout of grid items:
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              <code>grid-template-columns</code>: Specifies the width and number
              of columns in the grid. It allows you to define the size of each
              column individually or using repeat notation.
            </li>
            <li>
              <code>grid-template-rows</code>: Defines the height and number of
              rows in the grid. It works similarly to{" "}
              <code>grid-template-columns</code> but for rows.
            </li>
            <li>
              <code>grid-gap</code>: Sets the spacing between grid items and the
              gaps between rows and columns.
            </li>
            <li>
              <code>justify-items</code>: Determines how grid items are
              positioned along the inline axis (horizontally). It can be set to{" "}
              <code>start</code>, <code>end</code>, <code>center</code>,{" "}
              <code>stretch</code>, or <code>baseline</code>.
            </li>
            <li>
              <code>align-items</code>: Specifies how grid items are aligned
              along the block axis (vertically). It can be set to{" "}
              <code>start</code>, <code>end</code>, <code>center</code>,{" "}
              <code>stretch</code>, or <code>baseline</code>.
            </li>
          </ul>
          <p className="mb-2">
            CSS Grid offers a powerful set of tools for creating complex and
            responsive grid layouts. It enables you to define precise grid
            structures, control item placement, and handle responsive behavior
            with ease. With CSS Grid, you can create sophisticated grid-based
            designs that adapt gracefully to different screen sizes and devices.
          </p>
          <p className="mb-2">
            It's important to note that CSS Grid is well-supported by modern
            browsers, making it a reliable choice for building responsive web
            layouts. By leveraging CSS Grid, you can achieve intricate
            grid-based designs and create visually appealing and flexible
            interfaces.
          </p>
        </>
        <>
          {/* Responsive Design */}
          <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
          <p className="mb-2">
            Responsive design is an essential aspect of modern web development.
            It involves creating websites that adapt and respond to different
            screen sizes and devices, providing an optimal user experience
            across desktops, tablets, and mobile devices.
          </p>
          <p className="mb-2">
            CSS provides several techniques to achieve responsive design. One
            commonly used approach is CSS media queries. Media queries allow you
            to apply different CSS styles based on the characteristics of the
            device or viewport, such as screen width, height, orientation, and
            resolution.
          </p>
          <p className="mb-2">
            To use media queries, you define specific breakpoints where the
            layout or design needs to change. For example, you can set a
            breakpoint at 768 pixels to target tablet-sized devices and another
            at 1024 pixels for desktop screens. Within each breakpoint, you can
            modify the CSS properties to adjust the layout, font sizes, or
            hide/show certain elements.
          </p>
          <pre className="bg-gray-800 rounded-md p-4 mb-2 overflow-auto">
            {`/* CSS Media Query Example */
@media screen and (max-width: 768px) {
  /* CSS styles for tablets and smaller screens */
  .container {
    width: 90%;
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  /* CSS styles for mobile devices */
  .container {
    width: 100%;
    font-size: 12px;
  }
}`}
          </pre>
          <p className="mb-2">
            In the example above, we define two media queries targeting
            different screen sizes. Within each media query block, we specify
            different CSS styles for the `.container` class. This allows us to
            adjust the width and font size based on the device's screen width.
          </p>
          <p className="mb-2">
            In addition to media queries, other techniques like fluid layouts,
            flexible images, and responsive typography can also be used to
            create responsive designs. It's important to consider factors like
            viewport meta tag, CSS frameworks, and testing on different devices
            to ensure a consistent and optimized experience for users across
            various devices.
          </p>
          <p className="mb-2">
            Responsive design enables your website to adapt to the ever-growing
            range of devices and screen sizes, improving accessibility and user
            satisfaction. By employing CSS techniques for responsive design, you
            can create websites that look and function beautifully on any
            device, enhancing the user experience and engagement.
          </p>
        </>
      </div>
    </div>
  );
};

export default LayoutsAndPositioning;
