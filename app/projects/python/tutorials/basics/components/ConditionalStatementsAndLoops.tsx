"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ConditionalStatementsAndLoops = () => {
  const [ShowSection, setShowSection] = useState(false);

  let originalDict: any = [];
  let newDict: any = {};
  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[29rem]
      font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Conditinal Statements and Loops
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
          Conditional statements and loops are fundamental concepts in
          programming that allow you to control the flow of your code. They
          enable you to make decisions based on certain conditions and perform
          repetitive tasks efficiently.
        </p>
        <h3 className="text-lg font-bold mb-2">Conditional Statements</h3>
        <p className="mb-4">
          Conditional statements are used to execute different blocks of code
          depending on whether a certain condition is true or false. In Python,
          we use the <code>if</code>, <code>for</code>, and <code>while</code>{" "}
          statements to create conditional statements.
        </p>
        <p className=" font-light text-lg p-3">
          1. the{" "}
          <code>
            {" "}
            <u>if</u>
          </code>{" "}
          statement
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-6">
          if condition1: <br />
          &nbsp; # execute code if condition1 is true <br />
          elif condition2: <br />
          &nbsp; # execute code if condition2 is true <br />
          else: <br />
          &nbsp; #execute code if none of the above conditions are true
        </pre>
        <p className="mb-4">
          Here's an example that uses conditional statements to determine
          whether a number is positive, negative, or zero:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-6">
          num = -5 if num {`>`} 0: <br />
          &nbsp; print("Positive number") <br />
          elif num == 0:
          <br />
          &nbsp; print("Zero") else: print("Negative number")
        </pre>
        <p className=" font-light text-lg p-3">
          2. the{" "}
          <code>
            {" "}
            <u>for</u>
          </code>{" "}
          statement
        </p>
        <p className="mb-4">
          Here's an example that uses a <code>for</code> loop to iterate over a
          list and print each item:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          fruits = ["apple", "banana", "cherry"] for fruit in fruits:
          print(fruit)
          <br />
          # or <br />
          fruits = ["apple", "banana", "cherry"]
          <br />
          for fruit in fruits:
          <br />
          &nbsp; print(fruits)
        </pre>
        <p className="mb-4">It is also possibe mix them as needed</p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          fruits = ["apple", "banana", "cherry"] for fruit in fruits:
          print(fruit)
          <br />
          # or <br />
          fruits = ["apple", "banana", "cherry"]
          <br />
          for fruit in fruits:
          <br />
          &nbsp; if fruit == "cherry" <br /> &nbsp; &nbsp; print(fruits)
        </pre>
        <p className=" font-light text-lg p-3">
          1. the{" "}
          <code>
            {" "}
            <u>while</u>
          </code>{" "}
          statement
        </p>
        <p className="mb-4">
          Here's an example that uses a <code>while</code> loop to print the
          numbers from 1 to 5:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-6">
          num = 1 <br />
          while num {`<`}= 5:
          <br /> &nbsp; print(num) num += 1
        </pre>
        <h2 className="text-xl font-bold mb-4">List Comprehensions</h2>
        <p className="mb-4">
          List comprehensions provide a concise way to create lists based on
          existing lists. They are a more Pythonic way of iterating over a list
          and transforming its elements.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          {/* list comprehension example */}
          original_list = [1, 2, 3, 4, 5] <br />
          new_list = [item * 2 for item in original_list] <br />
          print(newList) # [2, 4, 6, 8, 10]
        </pre>
        <p className="mb-4">
          In this example, we create a new list <code>newList</code> based on an
          existing list <code>originalList</code>. The new list is created using
          a list comprehension, which consists of the expression{" "}
          <code>item * 2</code>
          followed by a <code>for</code> statement that specifies how to iterate
          over the elements of the original list.
        </p>
        <p className="mb-4">
          List comprehensions can also include conditional statements to filter
          the elements of the original list. Here's an example that creates a
          new list containing only the even numbers from the original list:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          original_list = [1, 2, 3, 4, 5] <br />
          new_list = [item * 2 for item in original_list if item % 2 == 0]{" "}
          <br />
          print(newList) # [2, 4]
        </pre>
        <p className="mb-4">
          In this example, we add a conditional statement to the list
          comprehension using the <code>if</code> keyword. The conditional
          statement checks whether each element of the original list is even (
          <code>item % 2 === 0</code>), and only the even elements are included
          in the new list.
        </p>
        <h2 className="text-xl font-bold mb-4">Dictionary Comprehensions</h2>
        <p className="mb-4">
          In addition to list comprehensions, Python also supports dictionary
          comprehensions, which provide a concise way to create dictionaries
          based on existing dictionaries.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          {/* dictionary comprehension example */}
          original_dict = {`{"apple": 1, "banana": 2, "cherry": 3}`} <br />
          {`new_dict = {key: value * 2 for key, value in original_dict.items()}`}{" "}
          <br />
          {`print(new_dict) # {"apple": 2, "banana": 4, "cherry": 6}`}
        </pre>
        <p className="mb-4">
          In this example, we create a new dictionary <code>newDict</code> based
          on an existing dictionary <code>originalDict</code>. The new
          dictionary is created using a dictionary comprehension, which consists
          of the expression <code>value * 2</code> followed by a{" "}
          <code>for</code> statement that specifies how to iterate over the
          key-value pairs of the original dictionary.
        </p>
        <p className="mb-4">
          Dictionary comprehensions can also include conditional statements to
          filter the key-value pairs of the original dictionary. Here's an
          example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm overflow-auto indent-0 leading-6">
          {`original_dict = {"apple": 1, "banana": 2, "cherry": 3}`} <br />
          {`new_dict = {key: value * 2 for key, value in original_dict.items() if value > 1}`}{" "}
          <br />
          {`print(new_dict) # {"banana": 4, "cherry": 6}`} <br />
        </pre>

        <p className="mb-4">
          As you can see, dictionary comprehensions are similar to list
          comprehensions, but they produce dictionaries instead of lists. They
          can be a very powerful tool for manipulating dictionaries in a concise
          and readable way.
        </p>
      </div>
    </div>
  );
};

export default ConditionalStatementsAndLoops;
