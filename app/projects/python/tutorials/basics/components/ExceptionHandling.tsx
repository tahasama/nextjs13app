"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Basic } from "next/font/google";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ExceptionHandling = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[29rem]
     font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Exception Handling{" "}
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
          In Python, exceptions are raised when errors or other exceptional
          events occur during program execution. Exception handling allows us to
          gracefully handle these exceptions, preventing our program from
          crashing and allowing us to handle errors in a controlled manner.
        </p>
        <p className="mb-4">
          When an exception is raised, Python looks for a matching exception
          handler in the current function, then in the calling function, and so
          on up the call stack until it finds a handler. If it does not find a
          handler, the program will crash and an error message will be
          displayed.
        </p>
        <p className="my-5">
          {" "}
          Here is some of the common used built-in exceptions
        </p>
        <ol className=" mx-5 list-inside list-decimal tracking-wide leading-8 ">
          <li>
            <span className="font-bold text-base">SyntaxError: </span> Raised
            when there is a syntax error in the program.
          </li>
          <li>
            {" "}
            <span className="font-bold text-base">NameError: </span> Raised when
            an undefined variable is used.
          </li>
          <li>
            <span className="font-bold text-base">TypeError: </span> Raised when
            an operation or function is applied to an object of inappropriate
            type.
          </li>
          <li>
            <span className="font-bold text-base"> ZeroDivisionError: </span>{" "}
            Raised when division or modulo by zero is encountered.
          </li>
          <li>
            <span className="font-bold text-base">IndexError: </span> Raised
            when an index is not found in a sequence.
          </li>
          <li>
            <span className="font-bold text-base">KeyError: </span> Raised when
            a key is not found in a dictionary.
          </li>
          <li>
            <span className="font-bold text-base">ValueError: </span> Raised
            when an operation or function receives an argument of the correct
            type but with an inappropriate value.
          </li>
          <li>
            <span className="font-bold text-base">FileNotFoundError: </span>{" "}
            Raised when a file or directory is not found by the operating
            system.
          </li>
          <li>
            <span className="font-bold text-base">IOError: </span> Raised when
            an input/output operation fails.
          </li>
          <li>
            <span className="font-bold text-base">Exception: </span> Base class
            for all built-in exceptions.
          </li>
        </ol>
        <p className="my-4">
          We can use the <code>try</code> and <code>except</code> statements to
          catch and handle exceptions in our code. The <code>try</code> block
          contains the code that may raise an exception, and the{" "}
          <code>except</code> block contains the code that handles the
          exception. For example:
        </p>
        <div className="bg-gray-800 p-4 rounded-lg mb-6 text-green-600 indent-0">
          <code className="">try:</code>
          <br />
          <code className="ml-4"># Some code that may raise an exception</code>
          <br />
          <code className="">except ExceptionType:</code>
          <br />
          <code className="ml-4"># Code to handle the exception</code>
        </div>
        <p className="mb-4">
          In the example above, if an exception of type{" "}
          <code>ExceptionType</code> is raised in the <code>try</code> block,
          Python will execute the code in the <code>except</code> block to
          handle the exception.
        </p>
        <p className="mb-4">
          Here is an example that demonstrates how to use exception handling in
          Python to catch and handle a <code>ZeroDivisionError</code>:
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-green-600  indent-0">
          <code className="">try:</code>
          <br />
          <code className="ml-4">
            # Perform a division that may raise a ZeroDivisionError
          </code>
          <br />
          <code className="ml-4">result = 10 / 0</code>
          <br />
          <code className="">except ZeroDivisionError:</code>
          <br />
          <code className="ml-4"># Handle the ZeroDivisionError</code>
          <br />
          <code className="ml-4">print("Cannot divide by zero!")</code>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Example: Handling Multiple Exceptions
          </h2>
          <p className="mb-4">
            In Python, you can also handle multiple exceptions using a single{" "}
            <code>except</code> block. Here's an example that demonstrates this:
          </p>
          <pre className="bg-gray-800 rounded-md p-4 overflow-x-auto">
            <code className="text-green-600">
              try: <br /> a = int(input("Enter a number: ")) <br /> b =
              int(input("Enter another number: ")) <br /> result = a / b <br />
              print("Result:", result)
              <br /> except (ValueError, ZeroDivisionError) as e:
              <br /> print("Error:", e)
              <br />
              print("Please enter a valid number and make sure the second number
              is not zero.")
            </code>
          </pre>
          <p className="mt-4">
            In this example, we're trying to divide two numbers that the user
            inputs. If either of the inputs is not a valid integer, or if the
            second input is zero, a corresponding exception will be raised.
            We're using a single <code>except</code> block to handle both of
            these exceptions, and printing an appropriate error message to the
            user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExceptionHandling;
