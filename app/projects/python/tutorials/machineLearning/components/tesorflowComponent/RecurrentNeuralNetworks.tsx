"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const RecurrentNeuralNetworks = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      <button
        className={`${
          ShowSection ? "sticky top-20 bg-slate-950 -translate-x-7" : ""
        } md:ml-7 ml-6 mb-4 flex flex-row items-start justify-between md:text-xl  md:min-w-[33.3rem] 
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Recurrent Neural Networks{" "}
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
          Recurrent Neural Networks (RNNs) are a type of neural network that can
          process sequential data such as time series, natural language, and
          audio. RNNs are unique in that they have a "memory" that allows them
          to keep track of previous inputs, making them ideal for tasks that
          require understanding of context and temporal dependencies.
        </p>
        <p className="mb-4">
          Here's an example of how to implement a basic RNN :
        </p>
        <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto text-xs md:text-sm ">
          <code>
            {`import tensorflow as tf
import numpy as np

# Define the model architecture
model = tf.keras.Sequential([
tf.keras.layers.SimpleRNN(units=32, input_shape=(None, 1)),
tf.keras.layers.Dense(units=1)
])

# Compile the model
model.compile(loss='mean_squared_error', optimizer='sgd')

# Train the model
xs = np.random.normal(size=(100, 10, 1))
ys = np.random.normal(size=(100, 1))
model.fit(xs, ys, epochs=10)

`}
          </code>
        </pre>
        <p className="mb-4">
          This code creates a basic RNN model using TensorFlow.js. It uses a
          simple RNN layer with 32 units, followed by a dense layer with 1 unit.
          The model is compiled with a mean squared error loss function and
          stochastic gradient descent optimizer. The model is then trained on
          randomly generated data using the fit method.
        </p>
      </div>
    </>
  );
};

export default RecurrentNeuralNetworks;
