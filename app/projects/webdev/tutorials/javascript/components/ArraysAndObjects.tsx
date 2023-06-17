"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ArraysAndObjects = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Arrays and Objects
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
        <h3 className="text-lg font-semibold mb-2">Working with Arrays</h3>
        <p className="mb-2">
          Arrays are used to store multiple values in a single variable. You can
          perform various operations on arrays, such as accessing elements,
          adding or removing elements, and manipulating the array:
        </p>

        <h4 className="text-base font-semibold mb-2">Creating an Array</h4>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const numbers = [1, 2, 3, 4, 5];
  const fruits = ['apple', 'banana', 'orange'];`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Accessing Elements</h4>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const numbers = [1, 2, 3, 4, 5];
  console.log(numbers[0]); // Output: 1
  
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits[1]); // Output: banana`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Array Methods</h4>
        <p className="mb-2">
          JavaScript provides several built-in methods to work with arrays:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const numbers = [1, 2, 3, 4, 5];
  
  // Adding elements
  numbers.push(6); // Adds 6 at the end
  numbers.unshift(0); // Adds 0 at the beginning
  
  // Removing elements
  numbers.pop(); // Removes the last element
  numbers.shift(); // Removes the first element
  
  // Manipulating the array
  numbers.splice(2, 1); // Removes 1 element starting from index 2
  numbers.reverse(); // Reverses the order of elements
  
  // Other array methods
  numbers.length; // Returns the length of the array
  numbers.indexOf(3); // Returns the index of the element 3
  numbers.includes(4); // Returns true if the element 4 exists in the array`}
        </pre>

        <h3 className="text-lg font-semibold mb-2">
          Creating and Manipulating Objects
        </h3>
        <p className="mb-2">
          Objects are used to store collections of key-value pairs. You can
          create objects, access object properties, and manipulate the object:
        </p>

        <h4 className="text-base font-semibold mb-2">Creating an Object</h4>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  };`}
        </pre>

        <h4 className="text-base font-semibold mb-2">
          Accessing Object Properties
        </h4>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  };
  
  console.log(person.name); // Output: John Doe
  console.log(person['age']); // Output: 30
  const person = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St'
  };

  console.log(person.name); // Output: John Doe
  console.log(person['age']); // Output: 30
`}{" "}
        </pre>
        <h4 className="text-base font-semibold mb-2">Manipulating Objects</h4>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St'
};
person.age = 35; // Modifies the value of age
person.job = 'Developer'; // Adds a new property

delete person.address; // Removes the address property`}
        </pre>

        <h4 className="text-base font-semibold mb-2">Object Methods</h4>
        <p className="mb-2">
          Objects can also have methods, which are functions defined as object
          properties:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`const person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
  greet: function() {
    console.log('Hello!');
  }
};
person.greet(); // Output: Hello!`}
        </pre>
      </div>
    </div>
  );
};

export default ArraysAndObjects;
