"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const WorkingWithAPIs = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[27rem]
  font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Working with APIs{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">Working with APIs</h3>
        <p className="mb-2">
          APIs (Application Programming Interfaces) allow applications to
          interact and exchange data with external systems. JavaScript provides
          various techniques to work with APIs effectively. Let's explore some
          of these techniques.
        </p>
        <h4 className="text-md font-semibold mb-2">
          Making HTTP Requests with JavaScript
        </h4>
        <p className="mb-2">
          JavaScript provides several methods to make HTTP requests to retrieve
          data from APIs. The most commonly used methods are <code>fetch</code>{" "}
          and
          <code>Axios</code>. Here's an example using the <code>fetch</code>{" "}
          method:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`// GET request
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // Handle the retrieved data
  })
  .catch((error) => {
    // Handle any errors
  });

// POST request
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data
  })
  .catch((error) => {
    // Handle any errors
  });`}
        </pre>
        <p className="mb-2">
          In the example above, a GET request is made to retrieve data, while a
          POST request is made to send data to the API. The POST request
          includes the request method, headers, and body with JSON data.
        </p>
        <p className="mb-2">
          Alternatively, you can also use <code>async/await</code> to handle
          HTTP requests without using <code>then</code>. Here's an example using{" "}
          <code>async/await</code> with <code>fetch</code>:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    // Handle the retrieved data
  } catch (error) {
    // Handle any errors
  }
}

fetchData();`}
        </pre>
        <p className="mb-2">
          The <code>fetchData</code> function is declared as <code>async</code>,
          and the <code>await</code> keyword is used to wait for the response
          and data. Any errors are caught and handled using{" "}
          <code>try/catch</code>.
        </p>
        <h4 className="text-md font-semibold mb-2">Using Third-Party APIs</h4>
        <p className="mb-2">
          Third-party APIs offer a wide range of services and data that you can
          integrate into your applications. To use a third-party API, you
          typically need an API key or access token, which you include in your
          requests. Here's an example of making a request to a weather API:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4">
          {`fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London")
  .then((response) => response.json())
  .then((data) => {
    // Handle the weather data
  })
  .catch((error) => {
    // Handle any errors
  });`}
        </pre>
        <p className="mb-2">
          When using third-party APIs, make sure to read their documentation for
          details on authentication, request parameters, and response formats.
        </p>
      </div>
    </div>
  );
};

export default WorkingWithAPIs;
