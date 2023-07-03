"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";

const BestPractices = () => {
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
        Best Practices
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
        <h2 className="text-2xl font-bold mb-4">CSS Best Practices</h2>
        <p className="mb-4">
          Following best practices in CSS development can help you write
          cleaner, more maintainable, and efficient code. It ensures
          consistency, improves readability, and reduces the likelihood of
          encountering issues in your CSS stylesheets. Here are some essential
          best practices to consider:
        </p>
        <h3 className="text-lg font-semibold mb-2">1. Keep it Organized</h3>
        <p className="mb-4">
          Keeping your CSS code organized is crucial for readability and
          maintainability. Use comments to separate different sections and group
          related styles together. For example, you can have separate sections
          for layout styles, typography styles, and component-specific styles.
          Additionally, use consistent naming conventions for your classes and
          ids to make it easier to understand their purpose and maintain them in
          the future.
        </p>
        <h3 className="text-lg font-semibold mb-2">2. Keep it Simple</h3>
        <p className="mb-4">
          Simplify your CSS code by avoiding unnecessary complexity. Write clear
          and concise styles that are easy to understand. Avoid using excessive
          selectors and prioritize specificity only when necessary. Use
          shorthand properties, such as `margin` and `padding`, to reduce code
          repetition and make your stylesheets more compact.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          3. Use a CSS Preprocessor
        </h3>
        <p className="mb-4">
          CSS preprocessors like Sass or Less offer advanced features that can
          greatly enhance your CSS workflow. They provide variables, mixins,
          nesting, and more, allowing you to write more modular and reusable
          stylesheets. By using a preprocessor, you can keep your code
          organized, reduce duplication, and improve overall maintainability.
        </p>
        <h3 className="text-lg font-semibold mb-2">4. Avoid Inline Styles</h3>
        <p className="mb-4">
          Inline styles, defined using the `style` attribute in HTML elements,
          should be avoided whenever possible. Inline styles make your HTML code
          more cluttered and mix presentational styles with the structure of
          your document. Instead, use external stylesheets and apply styles
          using classes and ids, which promotes separation of concerns and makes
          your code easier to manage and update.
        </p>
        <h3 className="text-lg font-semibold mb-2">5. Use Responsive Design</h3>
        <p className="mb-4">
          Ensure that your website is responsive and adapts well to different
          screen sizes. Use media queries to define specific styles for
          different devices or breakpoints. This allows your website to provide
          an optimal user experience across various devices, such as desktops,
          tablets, and mobile phones.
        </p>
        <h3 className="text-lg font-semibold mb-2">6. Test Your Code</h3>
        <p className="mb-4">
          Always test your CSS code thoroughly before deploying it to a live
          website. Test it on different browsers and devices to ensure
          cross-browser compatibility and responsiveness. By testing your code,
          you can identify and fix any issues or conflicts, ensuring that your
          CSS works as intended and provides a consistent experience to your
          users.
        </p>
        <p className="mb-4">
          These are just a few CSS best practices to keep in mind. By following
          these practices and continuously learning and improving your CSS
          skills,
        </p>
      </div>
    </div>
  );
};

export default BestPractices;
