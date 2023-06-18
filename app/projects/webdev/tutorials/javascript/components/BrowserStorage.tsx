"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const BrowserStorage = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
    font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Browser Storage{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Browser Storage</h3>
        <h4 className="text-md font-semibold mb-2">Working with Cookies</h4>
        <p className="mb-2">
          Cookies are small pieces of data stored on a user's browser. They are
          commonly used for session management, user tracking, and storing user
          preferences. In JavaScript, you can use the `document.cookie` API to
          read, write, and delete cookies. Here's an example of setting a
          cookie:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`document.cookie = "name=value; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";`}
        </pre>
        <p className="mb-2">
          In the example above, a cookie named "name" is set with the value
          "value". The cookie is set to expire on December 31, 2023, and is
          accessible from the entire website ("/").
        </p>

        <h4 className="text-md font-semibold mb-2">
          Local Storage and Session Storage
        </h4>
        <p className="mb-2">
          Local Storage and Session Storage are web storage APIs that allow you
          to store key-value pairs on the client-side. The main difference
          between them is that Local Storage data persists even after the
          browser is closed, while Session Storage data is cleared when the
          browser session ends. Here's an example of using Local Storage:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`// Storing data in Local Storage
localStorage.setItem("key", "value");

// Retrieving data from Local Storage
const value = localStorage.getItem("key");

// Removing data from Local Storage
localStorage.removeItem("key");

// Clearing all data from Local Storage
localStorage.clear();`}
        </pre>
        <p className="mb-2">
          Session Storage can be used in a similar way, but you replace
          "localStorage" with "sessionStorage".
        </p>

        <h4 className="text-md font-semibold mb-2">
          Using IndexedDB for Client-Side Storage
        </h4>
        <p className="mb-2">
          IndexedDB is a more powerful client-side storage solution that allows
          you to store structured data, query it, and perform complex
          operations. It provides an asynchronous API for working with
          databases. Here's an example of using IndexedDB to store and retrieve
          data:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`// Opening a database
          const request = indexedDB.open('yourDatabaseName', versionNumber);
// Replace 'yourDatabaseName' with the desired name for your database 
// and versionNumber with the version number (integer) of the database. 
// This will open a connection or create a new database if it doesn't already exist.
const request = indexedDB.open("myDatabase", 1);

// Creating object stores and indexes
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
  objectStore.createIndex("name", "name", { unique: false });
};

// Storing data
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction("myObjectStore", "readwrite");
  const objectStore = transaction.objectStore("myObjectStore");
  const data = { id: 1, name: "John" };
  const request = objectStore.add(data);
};

// Retrieving data
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction("myObjectStore", "readonly");
  const objectStore = transaction.objectStore("myObjectStore");
  const request = objectStore.get(1);
  request.onsuccess = function(event) {
    const data = event.target.result;
    console.log(data);
  };
};

// Deleting data
request.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction("myObjectStore", "readwrite");
  const objectStore = transaction.objectStore("myObjectStore");
  const request = objectStore.delete(1);
};`}
        </pre>
        <p className="mb-2">
          In the example above, an IndexedDB database named "myDatabase" is
          opened. Object stores and indexes are created, and then data is
          stored, retrieved, and deleted from the database using transactions
          and requests.
        </p>
      </div>
    </div>
  );
};

export default BrowserStorage;
