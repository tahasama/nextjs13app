"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Basic } from "next/font/google";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getBarData } from "@/app/redux/features/barSlice";
const VariablesAndOperators = () => {
  //   const dispatch = useAppDispatch();
  //   const { showSection } = useAppSelector(getBarData);
  const [ShowSection, setShowSection] = useState(false);
  return (
    <div className={`mx-auto max-w-[68rem] p-4  w-full`}>
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Variables and Operators
        {!ShowSection ? (
          <FaCaretDown size={24} className="" />
        ) : (
          <FaCaretUp size={24} className="" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <p className="mb-4">
          In Python, variables are used to store data values. A variable is
          created when a value is assigned to it using the "=" operator. For
          example:
        </p>
        <pre className="bg-gray-800 indent-0 rounded-lg p-4 mb-4">
          <code className="text-white ">
            {`x = 5`}
            <br />
            {`y = "Hello, world!"`}
          </code>
        </pre>
        <p className="mb-4">
          In this example, we've created two variables: "x" and "y". "x" is
          assigned the value of 5, which is an integer, and "y" is assigned the
          value of "Hello, world!", which is a string.
        </p>
        <p className="mb-4">
          Python has several built-in data types, including integers,
          floating-point numbers, strings, booleans, and more. These data types
          can be combined using operators to perform operations on them. Some
          common operators include:
        </p>
        <ul className="mb-4 list-inside p-3 list-disc bg-gray-950 rounded-md indent-0">
          <li>Arithmetic operators {`(+, -, *, /, %, **)`}</li>
          <li>Comparison operators {`(==, !=, <, >, <=, >=)`}</li>
          <li>Logical operators (and, or, not)</li>
          <li>Assignment operators (=, +=, -=, *=, /=, %=, **=)</li>
        </ul>
        <p className="mb-4">
          Here are some examples of using operators with variables:
        </p>
        <pre className="bg-gray-800 rounded-lg p-4 indent-0">
          <code>
            # using these two variables: <br />
            x = 10
            <br />
            y = 5<br />
          </code>
        </pre>
        <br />
        <pre className="bg-gray-800 rounded-lg p-4 indent-0">
          <code className="text-white leading-7 tracking-wide">
            print(x + y) # Output: 15
            <br />
            print(x - y) # Output: 5<br />
            print(x * y) # Output: 50
            <br />
            print(x / y) # Output: 2.0
            <br />
            print(x % y) # Output: 0<br />
            print(x ** y) # Output: 100000
            <br />
            print(x == y) # Output: False
            <br />
            print(x != y) # Output: True
            <br />
            print(x {`>`} y) # Output: True
            <br />
            print(x {`<`} y) # Output: False
            <br />
            print(x {`>`}= y) # Output: True
            <br />
            print(x {`<`}= y) # Output: False
            <br />
            print(not x) # Output: False
            <br />
            print(x and y) # Output: 5<br />
            print(x or y) # Output: 10
            <br />
          </code>
        </pre>
        <br />
        <pre className="bg-gray-800 rounded-lg p-4  indent-0">
          <code className="text-white leading-7 tracking-wide  indent-0">
            x = 10 <br />
            x += 5<br />
            print(x) # Output: 15
            <br />
            x -= 5<br />
            print(x) # Output: 10
            <br />
            x *= 2<br />
            print(x) # Output: 20
            <br />
            x /= 2<br />
            print(x) # Output: 10.0
            <br />
            x %= 3<br />
            print(x) # Output: 1.0
            <br />
            x **= 2<br />
            print(x) # Output: 1.0
            <br />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default VariablesAndOperators;
