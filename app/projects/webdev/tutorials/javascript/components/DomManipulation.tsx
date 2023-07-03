"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DomManipulation = () => {
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
        DOM Manipulation
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">DOM Manipulation</h3>
        <p className="mb-2">
          The Document Object Model (DOM) is a programming interface for HTML
          and XML documents. It represents the structure of a document as a tree
          of objects that can be accessed and manipulated using JavaScript. With
          the DOM, you can dynamically modify the content, structure, and styles
          of a web page.
        </p>
        <h4 className="text-md font-semibold mb-2">Selecting Elements</h4>
        <p className="mb-2">
          To select elements from the DOM, you can use various methods such as
          <code>getElementById</code>, <code>querySelector</code>,{" "}
          <code>querySelectorAll</code>, and more. Here are some examples:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Select an element by its ID
const elementById = document.getElementById("myElement");

// Select the first element that matches a CSS selector
const element = document.querySelector(".myClass");

// Select all elements that match a CSS selector
const elements = document.querySelectorAll("p");`}
        </pre>
        <h4 className="text-md font-semibold mb-2">Manipulating Elements</h4>
        <p className="mb-2">
          Once you have selected an element, you can manipulate its properties,
          attributes, and content using JavaScript. Here are some common
          operations:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Change the text content of an element
element.textContent = "New text";

// Change the HTML content of an element
element.innerHTML = "<strong>Updated content</strong>";

// Change the value of an input element
inputElement.value = "New value";

// Add a CSS class to an element
element.classList.add("newClass");

// Remove a CSS class from an element
element.classList.remove("oldClass");

// Toggle a CSS class on an element
element.classList.toggle("active");`}
        </pre>
        <h4 className="text-md font-semibold mb-2">
          Handling Events and Event Listeners
        </h4>
        <p className="mb-2">
          Events are actions or occurrences that happen in the browser, such as
          a button click, mouse movement, or key press. You can handle events by
          attaching event listeners to elements. Here's an example of attaching
          a click event listener to a button:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const button = document.getElementById("myButton");

function handleClick(event) {
  // Handle the click event here
}

button.addEventListener("click", handleClick);`}
        </pre>
        <p className="mb-2">
          In this example, when the button is clicked, the{" "}
          <code>handleClick</code> function will be called.
        </p>
        <p className="mb-2">
          You can also remove an event listener using the{" "}
          <code>removeEventListener</code> method:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`button.removeEventListener("click", handleClick);`}
        </pre>
        <p className="mb-2">
          Event listeners can be attached to various events such as "click",
          "mouseover", "keydown", and many more. Additionally, you can use event
          delegation to handle events on multiple elements efficiently:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const parentElement = document.getElementById("parent");

parentElement.addEventListener("click", function(event) {
  if (event.target.classList.contains("child")) {
    // Handle the click event on child elements
  }
});`}
        </pre>
        <p className="mb-2">
          By using event delegation, you attach a single event listener to a
          parent element and handle events for its child elements.
        </p>
        <p className="mb-2">
          Remember to access and manipulate elements within the appropriate
          scope, ensuring that the DOM is fully loaded before accessing elements
          using the <code>DOMContentLoaded</code> event or placing the script at
          the bottom of the HTML file.
        </p>
        <h4 className="text-md font-semibold mb-2">Modifying Styles</h4>
        <p className="mb-2">
          You can modify the styles of elements using JavaScript. The{" "}
          <code>style</code> property allows you to access and modify inline
          styles directly. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const element = document.getElementById("myElement");

// Modify styles directly
element.style.color = "red";
element.style.fontSize = "20px";`}
        </pre>
        <p className="mb-2">
          Alternatively, you can add or remove CSS classes to apply predefined
          styles or toggle specific styles. This approach is more flexible and
          recommended when working with complex style changes or multiple
          elements. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const element = document.getElementById("myElement");

// Add a CSS class
element.classList.add("highlight");

// Remove a CSS class
element.classList.remove("highlight");

// Toggle a CSS class
element.classList.toggle("active");`}
        </pre>
        <h4 className="text-md font-semibold mb-2">
          Creating and Modifying Elements
        </h4>
        <p className="mb-2">
          You can create new elements dynamically and add them to the DOM using
          JavaScript. The <code>createElement</code> method creates a new
          element, and you can modify its properties and content before
          appending it to the document. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const newElement = document.createElement("div");
newElement.textContent = "New element content";
newElement.classList.add("customClass");

// Append the new element to an existing element
const container = document.getElementById("container");
container.appendChild(newElement);`}
        </pre>
        <p className="mb-2">
          You can also modify existing elements by changing their attributes or
          content. Here are a few examples:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`// Change the text content of an element
element.textContent = "Updated content";

// Change an attribute value
element.setAttribute("src", "new-image.jpg");

// Remove an attribute
element.removeAttribute("disabled");`}
        </pre>
        <h4 className="text-md font-semibold mb-2">
          Event Propagation and Event Object
        </h4>
        <p className="mb-2">
          When working with events, it's essential to understand event
          propagation and the event object. Event propagation refers to how
          events propagate through the DOM hierarchy, and it can be either
          capturing or bubbling. The event object contains information about the
          event and provides methods and properties to interact with it. Here's
          an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const container = document.getElementById("container");
const button = document.getElementById("myButton");

function handleClick(event) {
  // Prevent the default behavior of the event
  event.preventDefault();

  // Stop the event from propagating further
  event.stopPropagation();

  // Access event properties
  console.log(event.target); // Element that triggered the event
  console.log(event.type); // Type of event (e.g., "click", "mouseover")
}

container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);`}
        </pre>
        <p className="mb-2">
          In this example, the <code>preventDefault</code> method prevents the
          default behavior of the event (e.g., preventing a form submission).
          The <code>stopPropagation</code> method stops the event from
          propagating further in the DOM hierarchy, preventing it from
          triggering other event listeners.
        </p>
        <p className="mb-2">
          These are just a few examples of the many possibilities offered by the
          DOM API for element manipulation, style modification, creating new
          elements, and working with events and event objects.
        </p>
        That covers more relevant utilizations of DOM manipulation. Feel free to
        explore the DOM API documentation for further details and examples.
      </div>
    </div>
  );
};

export default DomManipulation;
