"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const FunctionsAndModules = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[29rem]
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Functions and Modules{" "}
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
          Functions and modules are essential building blocks of any Python
          program. They allow you to break down your code into smaller, reusable
          pieces that can be organized and maintained more easily. Here are some
          examples of functions and modules in Python:
        </p>
        <h3 className="text-lg font-bold mb-2">Functions</h3>
        <p className="mb-4">
          A function is a block of code that performs a specific task. Functions
          help to make your code more modular and reusable, and can also take in
          inputs and return outputs.
        </p>
        <p className="mb-4">
          To define a function in Python, use the <code>def</code> keyword
          followed by the function name and its arguments in parentheses. The
          code inside the function should be indented, and the function can
          optionally return a value using the <code>return</code> keyword.
        </p>
        <p className="mb-4"> Here's a basic example:</p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0">
          result = add_numbers(5, 10) <br />
          print(result) # Output: 15
        </pre>
        <p className="mb-4">
          In this example, we call the <code>add_numbers</code> function with
          the arguments <code>5</code> and <code>10</code>, and store the result
          in a variable called <code>result</code>. Finally, we print the result
          using the <code>print</code> function, which outputs <code>15</code>.
        </p>
        <p className="mb-4">
          Here's an example of a function that takes in a list of numbers and
          returns the sum:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0">
          def sum_numbers(numbers): <br />
          &nbsp; result = 0 <br />
          &nbsp; for num in numbers: <br />
          &nbsp;&nbsp;&nbsp;&nbsp; result += num <br />
          &nbsp; return result <br />
          <br />
          my_numbers = [1, 2, 3, 4, 5] <br />
          total = sum_numbers(my_numbers) <br />
          print(total) # Output: 15
        </pre>
        <p className="mb-4">
          In this example, we define a function called <code>sum_numbers</code>{" "}
          that takes in a list of numbers called <code>numbers</code>, and
          returns their sum. We initialize a variable called <code>result</code>{" "}
          to 0, and then use a <code>for</code> loop to iterate through the list
          of numbers and add each one to the result. Finally, we return the
          result.
        </p>
        <p className="mb-4">
          To call a function, simply use its name followed by its arguments in
          parentheses. In the example above, we call the{" "}
          <code>sum_numbers</code> function with the list of numbers{" "}
          <code>[1, 2, 3, 4, 5]</code> and store the result in a variable called{" "}
          <code>total</code>. We then print the result, which is <code>15</code>
          .
        </p>
        <p className="mb-4">
          Functions can also have optional arguments with default values. Here's
          an example:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0">
          def greet(name, greeting="Hello"): <br />
          &nbsp; print(greeting + ", " + name + "!") <br />
          <br />
          greet("Alice") # Output: "Hello, Alice!" <br />
          greet("Bob", "Hi") # Output: "Hi, Bob!"
        </pre>
        <p className="mb-4">
          In this example, we define a function called <code>greet</code> that
          takes in two arguments, <code>name</code> and <code>greeting</code>,
          with a default value of "Hello". We then print out the greeting
          followed by the name.
        </p>
        <p className="mb-4">
          When we call the function with just one argument (
          <code>greet("Alice")</code>), it uses the default value for{" "}
          <code>greeting</code> and prints "Hello, Alice!". When we call the
          function with both arguments (<code>greet("Bob", "Hi")</code>), it
          uses the provided value for <code>greeting</code> and prints "Hi,
          Bob!".
        </p>
        <h3 className="text-lg font-bold mb-2">Modules</h3>
        <p className="mb-4">
          A module is a file that contains Python code, which can be imported
          and used in other Python files. Modules help to organize your code and
          keep related functionality together. Here's an example of a module
          called
          <code>math_utils.py</code> that defines some mathematical functions:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7">
          # math_utils.py <br />
          def add_numbers(a, b): <br />
          &nbsp; return a + b <br />
          def multiply_numbers(a, b): <br />
          &nbsp; return a * b <br />
          def subtract_numbers(a, b): <br />
          &nbsp; return a - b
        </pre>
        <p className="mb-4">
          In this example, we define three functions for adding, multiplying,
          and subtracting numbers. We can then import this module into another
          Python file and use these functions. Here's an example of how we can
          use this module in a file called <code>main.py</code>:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7 tracking-wide">
          # main.py <br />
          import math_utils <br />
          result1 = math_utils.add_numbers(5, 10) <br />
          result2 = math_utils.multiply_numbers(5, 10) <br />
          result3 = math_utils.subtract_numbers(5, 10) <br />
          print(result1) # Output: 15
          <br />
          print(result2) # Output: 50 <br />
          print(result3) # Output: -5
        </pre>
        In this example, we import the <code> math_utils </code> module and use
        its functions to perform some basic arithmetic operations. We call the{" "}
        <code> add_numbers </code> function with the arguments <code> 5 </code>{" "}
        and <code> 10 </code>, which returns the sum of the two numbers. We then
        call the <code> multiply_numbers </code> function with the same
        arguments, which returns their product. Finally, we call the{" "}
        <code> subtract_numbers </code> function with the same arguments, which
        returns their difference. We store the results in variables called{" "}
        <code> result1 </code>, <code> result2 </code>, and{" "}
        <code> result3 </code>, respectively, and print them to the console.
      </div>
    </div>
  );
};

export default FunctionsAndModules;
