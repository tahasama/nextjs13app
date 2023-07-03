"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const JavaScriptAndHTMLForms = () => {
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
        JavaScript and HTML Forms{" "}
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${!ShowSection ? "hidden" : "visible"} indent-10 mb-8 mt-3`}
      >
        <h3 className="text-lg font-semibold mb-2">
          JavaScript and HTML Forms
        </h3>
        <h4 className="text-md font-semibold mb-2">
          Form Validation and Submission
        </h4>
        <p className="mb-2">
          HTML forms are used to collect user input. JavaScript can be used to
          validate form data before submission. You can listen for the form's
          submit event and prevent the default form submission if the input is
          invalid. Here's an example of form validation and submission handling:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Perform form validation
  if (formIsValid()) {
    // Submit the form
    form.submit();
  } else {
    // Display error message
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent = "Please fill out all required fields.";
  }
});

function formIsValid() {
  // Get form input values
  const nameInput = document.querySelector("#nameInput");
  const emailInput = document.querySelector("#emailInput");

  // Perform basic validation
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
    return false;
  }

  return true;
}`}
        </pre>
        <p className="mb-2">
          In the example above, the form's submit event is listened for, and the
          default submission is prevented using `event.preventDefault()`. The
          `formIsValid()` function is called to perform basic form validation.
          If the form is valid (in this case, if both the name and email fields
          are filled out), the form's `submit()` method is called to submit the
          form. Otherwise, an error message is displayed.
        </p>

        <h4 className="text-md font-semibold mb-2">Handling Form Events</h4>
        <p className="mb-2">
          JavaScript provides various events that can be used to handle form
          interactions. Some common form events include `input` (fired when the
          value of an input element changes), `change` (fired when the value of
          a form element changes and loses focus), and `submit` (fired when the
          form is submitted). Here's an example of handling the `input` event on
          an input field:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const emailInput = document.querySelector("#emailInput");

emailInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  
  // Perform actions based on the input value
  if (inputValue.length > 0 && !isValidEmail(inputValue)) {
    event.target.classList.add("error"); // Add error style
    showErrorMessage("Please enter a valid email address.");
  } else {
    event.target.classList.remove("error"); // Remove error style
    hideErrorMessage();
  }
});

function isValidEmail(email) {
  // Basic email validation using regular expression
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function showErrorMessage(message) {
  const errorMessage = document.querySelector("#errorMessage");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideErrorMessage() {
  const errorMessage = document.querySelector("#errorMessage");
  errorMessage.style.display = "none";
}`}
        </pre>
        <p className="mb-2">
          In this example, the `input` event is used to handle changes in the
          email input field. When the input value changes, the `isValidEmail()`
          function is called to perform basic email validation using a regular
          expression. If the input value is not a valid email address, an error
          style is applied to the input field, and an error message is
          displayed. Otherwise, the error style is removed, and the error
          message is hidden.
        </p>

        <h4 className="text-md font-semibold mb-2">
          Accessing and Manipulating Form Data
        </h4>
        <p className="mb-2">
          JavaScript provides various methods to access and manipulate form
          data. You can use the `querySelector` method to select form elements
          and retrieve their values. Here's an example:
        </p>
        <pre className="bg-gray-800 rounded-md text-white p-2 mb-4 overflow-auto">
          {`const form = document.querySelector("#myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const nameInput = form.querySelector("#nameInput");
  const emailInput = form.querySelector("#emailInput");

  // Access and manipulate form data
  const name = nameInput.value;
  const email = emailInput.value;

  // Perform actions with form data
  console.log("Name:", name);
  console.log("Email:", email);
});`}
        </pre>
        <p className="mb-2">
          In this example, the `querySelector` method is used to select the form
          and its input fields. The `value` property is used to access the input
          fields' values. The form data can then be accessed and manipulated as
          needed. In this case, the form data is logged to the console.
        </p>
      </div>
    </div>
  );
};

export default JavaScriptAndHTMLForms;
