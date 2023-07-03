"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
const Numpy = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-500" : ""
        } flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Numpy
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
        {/* Introduction */}
        <div className="">
          <p className=" mb-6">
            {" "}
            Numpy is a fundamental library for scientific computing in Python.
            It provides powerful tools for working with arrays, and is widely
            used in data analysis, machine learning, and other fields. With
            Numpy, you can perform mathematical operations on arrays, manipulate
            and reshape data, and perform a variety of data analysis tasks.
          </p>{" "}
          <div className="flex flex-col ">
            <h2 className="text-3xl font-bold my-2">
              Introduction to Numpy in Python
            </h2>
            <p className=" m-4">
              This is a strightforward task, below you'll find most common and
              basic array usage in Numpy
            </p>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0">
              <code>
                {`
import numpy as np

# Basic Numpy arrays
arr = np.array([1, 2, 3])
print(arr)`}{" "}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0">
              <code>
                {`
# Creating arrays
arr = np.zeros((3, 3))
print(arr)

arr = np.ones((2, 4))
print(arr)

arr = np.random.rand(2, 2)
print(arr)    `}{" "}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 overflow-auto">
              <code>
                {`
# Indexing and slicing arrays
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr[0, 0])
print(arr[1])
print(arr[:, 2])`}
              </code>
            </pre>
            <pre className="bg-gray-800 rounded p-4 text-sm indent-0 overflow-auto">
              <code>
                {`
# Array arithmetic and broadcasting
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
print(arr1 + arr2)
print(arr1 * arr2)
`}
              </code>
            </pre>
          </div>
          <div className="py-8 px-4">
            <h2 className="text-2xl font-bold mb-4">Numpy Data Types</h2>
            <p className="mb-4">
              In Numpy, arrays can have different data types, such as integers,
              floats, and booleans. These data types are important because they
              affect how the data is stored and processed by the computer.
            </p>
            <p className="mb-4">
              The most commonly used data types in Numpy include: int8, int16,
              int32, int64, float16, float32, float64, bool, and complex128. You
              can specify the data type of a Numpy array when you create it or
              change the data type of an existing array using the astype()
              method.
            </p>
            <h3 className="text-lg font-bold mb-2">
              Creating Arrays with Specific Data Types
            </h3>
            <p className="mb-4">
              To create a Numpy array with a specific data type, you can use the
              dtype parameter in the array() function. For example, to create an
              array of integers with 32-bit precision, you would use the
              following code:
            </p>
            <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0  overflow-auto">
              <code className="language-python">
                import numpy as np <br /> arr = np.array([1, 2, 3],
                dtype=np.int32)
              </code>
            </pre>
            <p className="mb-4">
              You can also change the data type of an existing array using the
              astype() method. For example, to change the data type of an array
              of integers to 64-bit floats, you would use the following code:
            </p>
            <pre className="bg-gray-800 rounded p-4 text-sm indent-0 overflow-auto">
              {" "}
              <code className="language-python">
                {` import numpy as np 
              arr = np.array([1, 2, 3]) 
              arr = arr.astype(np.float64)`}
              </code>
            </pre>
          </div>
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">
              Common Numpy Functions for Array Manipulation and Analysis
            </h2>
            <p className="m-4">
              Numpy provides a wide range of functions for manipulating and
              analyzing arrays. Here are some of the most commonly used
              functions:
            </p>
            <ul className="list-disc list-inside">
              <li className="">
                <span className="font-bold">Reshape:</span> This function is
                used to change the shape of an array without changing its data.
                For example, if you have an array with 12 elements, you can
                reshape it into a 3x4 matrix using the reshape function.
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# create a 1D array of 10 elements
a = np.arange(10)

# reshape the array into a 2D array with 5 rows and 2 columns
b = np.reshape(a, (5, 2))

# print both arrays to see the difference
print("Original array:\n", a)
print("Reshaped array:\n", b)
`}
                  </code>{" "}
                </pre>
              </li>

              <li className="mb-2">
                <span className="font-bold">Transpose:</span> This function is
                used to reverse or permute the axes of an array. For example, if
                you have a 2D array with shape (3, 4), you can transpose it to
                get an array with shape (4, 3).
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# create a 2D array
arr = np.array([[1, 2], [3, 4]])

# print the original array
print("Original array:")
print(arr)

# transpose the array
transposed_arr = np.transpose(arr)

# print the transposed array
print("Transposed array:")
print(transposed_arr)
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li className="mb-2">
                <span className="font-bold">Sum:</span> This function is used to
                find the sum of all elements in an array. You can also specify
                the axis along which to compute the sum.
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0  overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

arr = np.array([[1, 2], [3, 4]])

# Calculate the sum of all elements in the array
total_sum = np.sum(arr)

# Calculate the sum of each row
row_sums = np.sum(arr, axis=1)

# Calculate the sum of each column
col_sums = np.sum(arr, axis=0)

print("Total sum:", total_sum)
print("Row sums:", row_sums)
print("Column sums:", col_sums)
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li className="mb-2">
                <span className="font-bold">Mean:</span> This function is used
                to find the mean (average) of all elements in an array. You can
                also specify the axis along which to compute the mean.
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`
import numpy as np

# Create a 2D array with random values
arr = np.random.rand(3, 4)

# Calculate the mean of the entire array
mean = np.mean(arr)

# Calculate the mean along the rows (axis 1)
row_means = np.mean(arr, axis=1)

# Calculate the mean along the columns (axis 0)
col_means = np.mean(arr, axis=0)

print("Array:", arr)
print("Mean of the entire array:", mean)
print("Row means:", row_means)
print("Column means:", col_means)
              `}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li className="mb-2">
                <span className="font-bold">Std:</span> This function is used to
                find the standard deviation of all elements in an array. You can
                also specify the axis along which to compute the standard
                deviation.
                <pre className="bg-gray-800 rounded p-4 mt-4 text-sm indent-0  overflow-auto">
                  {" "}
                  <code>
                    {`
import numpy as np

# Create a sample array
data = np.array([1, 2, 3, 4, 5])

# Calculate the standard deviation
std = np.std(data)

print("Standard deviation:", std)
              `}{" "}
                  </code>{" "}
                </pre>
              </li>
            </ul>
          </div>
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Advanced Numpy Arrays</h2>
            <p className="m-4">
              Numpy arrays can be multi-dimensional and can also be structured
              or record arrays. Here's an overview of these advanced array
              types:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <span className="font-bold">Multi-dimensional arrays:</span>{" "}
                Multi-dimensional arrays, also known as ndarrays, are a
                fundamental data structure in NumPy. They are similar to lists
                in Python but can hold multiple dimensions, allowing for
                efficient manipulation of large amounts of data.
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# Create a 2x3 array
my_array = np.array([[1, 2, 3], [4, 5, 6]])

# Print the array
print(my_array)

# Access individual elements in a multi-dimensional array using indexing
element = my_array[0, 1]
print(element)

`}{" "}
                  </code>{" "}
                </pre>
                <p>
                  You can also perform operations on multi-dimensional arrays,
                  such as np.sum(), np.mean(), np.std(), and many more.
                </p>
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# Create a 2x3 array
my_array = np.array([[1, 2, 3], [4, 5, 6]])

# Sum all elements in the array
total_sum = np.sum(my_array)

# Print the sum
print(total_sum)
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li className="mb-2">
                <span className="font-bold">Structured arrays:</span> Numpy
                allows you to define arrays with named fields, similar to a
                database table. This can be useful for representing structured
                data such as CSV or JSON files.
                <pre className="bg-gray-800 rounded p-4 my-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# Define data types for each field
dtype = [('name', 'S10'), ('age', int)]

# Create structured array
data = np.array([('John', 25), ('Mary', 30), ('Tom', 40)], dtype=dtype)

# Access individual fields
print(data['name'])
print(data['age'])

# Access individual records
print(data[0])
print(data[1])
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li className="mb-2">
                <span className="font-bold">Record arrays:</span> This is a
                subtype of structured arrays where each element is a record that
                contains multiple fields. Record arrays can be accessed using
                field names or indices.
                <pre className="bg-gray-800 rounded p-4 mt-4 text-sm indent-0 overflow-auto">
                  {" "}
                  <code>
                    {`import numpy as np

# Define the data types of the record array
dt = np.dtype([('name', 'U10'), ('age', 'i4'), ('weight', 'f8')])

# Create a record array with three elements
data = np.array([('Alice', 25, 130.0), ('Bob', 30, 150.0), ('Charlie', 35, 180.0)], dtype=dt)

# Access the fields of the record array as object attributes
print(data['name'][0])    # Output: 'Alice'
print(data['age'][1])     # Output: 30
print(data['weight'][2])  # Output: 180.0
`}{" "}
                  </code>
                </pre>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Numpy;
