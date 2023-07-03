"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const ConvolutionalNeuralNetworks = () => {
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
        Convolutional Neural Networks
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
          Convolutional Neural Networks (CNNs) are a type of neural network that
          are commonly used in computer vision tasks such as image recognition
          and classification. They are made up of several layers, including
          convolutional layers, pooling layers, and fully connected layers.
        </p>
        <p className="mb-4">
          The convolutional layers perform convolutions on the input image to
          extract features such as edges and corners. The pooling layers
          downsample the feature maps to reduce the dimensionality of the data.
          Finally, the fully connected layers use the features extracted by the
          convolutional and pooling layers to make predictions.
        </p>
        <p className="mb-4">
          CNNs are particularly effective at image recognition tasks because
          they are able to learn spatial hierarchies of features from the input
          images. This allows them to recognize complex patterns and objects in
          images with a high degree of accuracy.
        </p>
        <p className="mb-4">
          Here's an example code block that shows how to create a simple CNN
          using the TensorFlow library in Python:
        </p>
        <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm overflow-x-auto">
          <code>
            {`import tensorflow as tf
from tensorflow.keras import datasets, layers, models

# Load the CIFAR-10 dataset
(train_images, train_labels), (test_images, test_labels) = datasets.cifar10.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.0

# Define the CNN architecture
model = models.Sequential([
layers.Conv2D(32, (3, 3), activation='relu', input_shape=(32, 32, 3)),
layers.MaxPooling2D((2, 2)),
layers.Conv2D(64, (3, 3), activation='relu'),
layers.MaxPooling2D((2, 2)),
layers.Conv2D(64, (3, 3), activation='relu'),
layers.Flatten(),
layers.Dense(64, activation='relu'),
layers.Dense(10)
])

# Compile the model
model.compile(optimizer='adam',
      loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
      metrics=['accuracy'])

# Train the model
history = model.fit(train_images, train_labels, epochs=10, 
            validation_data=(test_images, test_labels))`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default ConvolutionalNeuralNetworks;
