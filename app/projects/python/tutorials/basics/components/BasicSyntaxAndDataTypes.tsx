"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Basic } from "next/font/google";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { getBarData } from "@/app/redux/features/barSlice";

const basic = Basic({
  subsets: ["latin"],
  weight: "400",
});

const BasicSyntaxAndDataTypes = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className={`mx-auto max-w-[68rem] p-4 w-full`}>
      {/* <div
    className={`mx-auto max-w-[68rem] ${
      !ShowSection ? "p-8" : "px-8 py-3"
    }  w-full`}
  ></div> */}{" "}
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Syntax and Types
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div className={`${!ShowSection ? "hidden" : "visible"} mt-6`}>
        <p className="mb-4">
          Python has a simple and easy-to-learn syntax. Here are some of the
          basic syntax elements:
        </p>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4  overflow-auto">
          {`# This is a comment
print("Hello, World!") # This is also a comment
x = 5
y = 3
z = x + y
print(z) # Output: 8`}
        </pre>
        <p className="mb-4">
          Python supports a variety of data types, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Numbers: integer, float, complex</li>
          <li>Strings</li>
          <li>Lists</li>
          <li>Tuples</li>
          <li>Sets</li>
          <li>Dictionaries</li>
          <li>Booleans</li>
        </ul>
        <p className="mb-4">
          Here are some examples of working with different data types:
        </p>

        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Numbers <br />
            x = 5<br />
            y = 3.14
            <br />
            z = complex(1, 2)
            <br />
            print(x, y, z) # Output: 5 3.14 (1+2j)
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Strings
            <br />
            s1 = "Hello, World!"
            <br />
            s2 = 'Python is awesome'
            <br />
            s3 = """This is a<br />
            &nbsp; &nbsp; multi-line string"""
            <br />
            print(s1, s2, s3) # Output: Hello, World! Python is awesome This is
            a <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; #
            multi-line string
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Lists
            <br />
            fruits = ["apple", "banana", "cherry"]
            <br />
            print(fruits[0]) # Output: apple
            <br />
            fruits.append("orange")
            <br />
            print(fruits) # Output: ['apple', 'banana', 'cherry', 'orange']
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Tuples
            <br />
            numbers = (1, 2, 3)
            <br />
            print(numbers[1]) # Output: 2
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Sets
            <br />
            colors = {`{"red", "green", "blue"}`}
            <br />
            print("green" in colors) # Output: True
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Dictionaries
            <br />
            person ={` {"name": "John", "age": 36, "country": "USA"}`}
            <br />
            print(person["name"], person["age"], person["country"]) # Output:
            John 36 USA
            <br />
            <br />
          </code>
        </pre>
        <pre className="text-white bg-gray-800 rounded-md p-4 mb-4 overflow-auto">
          <code className="text-white leading-7 tracking-wide">
            # Booleans
            <br />
            x = True
            <br />
            y = False
            <br />
            print(x, y) # Output: True False
            <br />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default BasicSyntaxAndDataTypes;
