"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const OperatorsAndExpressions = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
  font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Operators and Expressions{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Assignment Operator</h3>
        <p className="mb-2">
          The assignment operator (=) is used to assign a value to a variable:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`var x = 5; // Assigning a value to a variable`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">Comparison Expressions</h3>
        <p className="mb-2">
          Comparison expressions compare values and return a boolean result
          (true or false). Here are some examples:
        </p>
        <p className="mb-2">
          JavaScript supports various comparison operators:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Equal to (==): checks if two values are equal</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 == 5; // true`}</pre>
          <li>Not equal to (!=): checks if two values are not equal</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 != 3; // true`}</pre>
          <li>
            Strict equal to (===): checks if two values are equal and have the
            same type
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 === "5"; // false`}</pre>
          <li>
            Strict not equal to (!==): checks if two values are not equal or do
            not have the same type
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 !== "5"; // true`}</pre>
          <li>
            Greater than ({`>`}): checks if the first value is greater than the
            second
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 > 3; // true`}</pre>
          <li>
            Less than ({`<`}): checks if the first value is less than the second
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 < 3; // false`}</pre>
          <li>
            Greater than or equal to ({`>=`}): checks if the first value is
            greater than or equal to the second
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 >= 5; // true`}</pre>
          <li>
            Less than or equal to ({`<=`}): checks if the first value is less
            than or equal to the second
          </li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 <= 3; // false`}</pre>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Logical Expressions</h3>
        <p className="mb-2">JavaScript includes several logical operators:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Logical AND (&&): returns true if both operands are true</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`(5 > 3) && (10 < 20); // true`}</pre>
          <li>Logical OR (||): returns true if at least one operand is true</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`(5 > 10) || (3 > 1); // true`}</pre>
          <li>Logical NOT (!): inverts the logical state of an operand</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`!(5 > 3); // false`}</pre>
        </ul>

        <h3 className="text-lg font-semibold mb-2">
          Conditional (Ternary) Operator
        </h3>
        <p className="mb-2">
          The conditional operator is a shorthand way to write an if-else
          statement:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`var age = 18;
    // If age is greater than or equal to 18, assign "Yes" to canVote, otherwise assign "No"
    var canVote = (age >= 18) ? "Yes" : "No"; `}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Arithmetic Operators</h3>
        <p className="mb-2">
          JavaScript provides arithmetic operators for mathematical
          calculations:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Addition (+): adds two values</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 + 3; // 8`}</pre>
          <li>Subtraction (-): subtracts the second value from the first</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 - 3; // 2`}</pre>
          <li>Multiplication (*): multiplies two values</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 * 3; // 15`}</pre>
          <li>Division (/): divides the first value by the second</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`15 / 3; // 5`}</pre>
          <li>Modulus (%): returns the remainder after division</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`5 % 3; // 2`}</pre>
          <li>Increment (++): increases the value of a variable by 1</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
            {`var x = 5; x++; // x becomes 6`}
          </pre>{" "}
          <li>Decrement (--): decreases the value of a variable by 1</li>
          <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">{`var y = 5;y--; // y becomes 4`}</pre>
        </ul>
        <h3 className="text-lg font-semibold mb-2">
          String Concatenation Operator
        </h3>
        <p className="mb-2">
          The string concatenation operator (+) is used to concatenate strings:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName; // Concatenates the two strings`}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Typeof Operator</h3>
        <p className="mb-2">
          The typeof operator is used to determine the data type of a variable:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`var x = 5;
typeof x; // "number"`}
        </pre>
      </div>
    </div>
  );
};

export default OperatorsAndExpressions;
