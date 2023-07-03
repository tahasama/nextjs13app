"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const RegularExpressions = () => {
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
        Regular Expressions{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">
          Understanding Regular Expressions
        </h3>
        <h4 className="text-md font-semibold mb-2">
          Using Regular Expressions for Pattern Matching and Validation
        </h4>
        <p className="mb-2">
          Regular expressions, also known as regex, are powerful tools for
          pattern matching and text manipulation. They allow you to define
          specific patterns and perform operations on strings. One common use
          case is validating user input, such as an email address or phone
          number. Let's take a look at an example of using a regular expression
          for email validation:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const email = "example@example.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (emailRegex.test(email)) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}`}
        </pre>
        <p className="mb-2">
          In this example, we define a regular expression pattern{" "}
          {`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`} for email
          validation. Let's break it down:
        </p>
        <ul className="list-disc ml-6 mb-4 overflow-auto">
          <li>
            <code>^</code> - Matches the beginning of the string.
          </li>
          <li>
            <code>[a-zA-Z0-9._%+-]</code> - Matches any alphanumeric character,
            period (.), underscore (_), percent (%), plus (+), or hyphen (-).
          </li>
          <li>
            <code>+</code> - Matches one or more occurrences of the preceding
            pattern.
          </li>
          <li>
            <code>@</code> - Matches the "@" symbol literally.
          </li>
          <li>
            <code>[a-zA-Z0-9.-]</code> - Matches any alphanumeric character,
            period (.), or hyphen (-).
          </li>
          <li>
            <code>\.</code> - Matches the dot (.) symbol literally. We use a
            backslash (\) to escape the dot and treat it as a literal character.
          </li>
          <li>
            <code>{"[a-zA-Z]{2,}"}</code> - Matches any alphabetical character
            (case-insensitive) repeated two or more times.
          </li>
          <li>
            <code>$</code> - Matches the end of the string.
          </li>
        </ul>
        <p className="mb-2">
          By using the <code>test()</code> method with the regular expression,
          we can check if an email address matches the defined pattern. If the
          email passes the test, it is considered valid; otherwise, it is
          considered invalid.
        </p>
        <p className="mb-2">
          Here is another example, extracting Phone Numbers: <br /> Regular
          expressions can also be used to extract specific information from
          strings. Here's an example of how to extract phone numbers from a
          string using a regular expression in JavaScript
        </p>

        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const text = 'Contact us at 123-456-7890 or 987-654-3210.';
const phoneRegex = /\d{3}-\d{3}-\d{4}/g;
const phoneNumbers = text.match(phoneRegex);

console.log(phoneNumbers);
`}
        </pre>
        <p className="mb-2">
          In this example, the phoneRegex regular expression pattern \d{3}-\d{3}
          -\d{4} is used to match phone numbers in the format of three digits,
          followed by a hyphen, three more digits, another hyphen, and finally
          four digits. The match() function is used to extract all occurrences
          of phone numbers from the text variable and store them in the
          phoneNumbers array.
          <br />
          When you run this code, it will output an array containing the phone
          numbers found in the text: ['123-456-7890', '987-654-3210'].
        </p>
        <h4 className="text-md font-semibold mb-2">
          Common Regular Expression Patterns and Modifiers
        </h4>
        <p className="mb-2">
          Regular expressions consist of patterns and optional modifiers. Here
          are some commonly used patterns and modifiers:
        </p>
        <ul className="list-disc ml-6 mb-4 overflow-auto">
          <li>
            <code>^</code> - Matches the beginning of a string.
          </li>
          <li>
            <code>$</code> - Matches the end of a string.
          </li>
          <li>
            <code>[abc]</code> - Matches any character within the brackets.
          </li>
          <li>
            <code>[^abc]</code> - Matches any character not within the brackets.
          </li>
          <li>
            <code>\d</code> - Matches any digit.
          </li>
          <li>
            <code>\w</code> - Matches any word character (alphanumeric and
            underscore).
          </li>
          <li>
            <code>\s</code> - Matches any whitespace character.
          </li>
          <li>
            <code>*</code> - Matches zero or more occurrences of the preceding
            pattern.
          </li>
          <li>
            <code>+</code> - Matches one or more occurrences of the preceding
            pattern.
          </li>
          <li>
            <code>?</code> - Matches zero or one occurrence of the preceding
            pattern.
          </li>
        </ul>
        <p className="mb-2">
          These are just a few examples of the patterns and modifiers you can
          use in regular expressions. Regular expressions can become more
          complex and powerful, allowing you to create intricate search patterns
          and perform advanced string operations. As a beginner, it's helpful to
          refer to regular expression resources and practice with simpler
          patterns before diving into more advanced ones.
        </p>
      </div>
    </div>
  );
};

export default RegularExpressions;
