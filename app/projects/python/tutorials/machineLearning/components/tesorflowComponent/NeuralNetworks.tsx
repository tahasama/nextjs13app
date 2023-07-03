"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const AdvancedNeuralNetworks = () => {
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
        Advanced Neural Networks
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
          In TensorFlow, you can build advanced neural networks by incorporating
          different types of layers and techniques. Here are some concepts to
          get you started:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <span className="font-bold">Dropout layers:</span> These layers
            randomly drop out a percentage of the neurons during training to
            prevent overfitting.
          </li>
          <li className="mb-2">
            <span className="font-bold">Batch normalization layers:</span> These
            layers normalize the inputs between layers to improve training speed
            and stability.
          </li>
          <li className="mb-2">
            <span className="font-bold">Recurrent layers:</span> These layers
            are designed for sequential data, such as time series or natural
            language processing tasks. They allow information to persist from
            previous time steps and have memory of the past inputs.
          </li>
          <li className="mb-2">
            <span className="font-bold">Transfer learning:</span> This technique
            involves using pre-trained models to speed up training and improve
            accuracy. You can take advantage of the feature extraction
            capabilities of pre-trained models and then fine-tune the model for
            your specific task.
          </li>
        </ul>
        <p className="mb-4">
          Here's an example of building a neural network with dropout, batch
          normalization, and recurrent layers:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md mb-4v overflow-auto">
          <code className="language-python text-xs md:text-sm ">
            {`import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization, Flatten
from tensorflow.keras.applications import VGG16

# Load the pre-trained VGG16 model
vgg = VGG16(include_top=False, weights='imagenet', input_shape=(224, 224, 3))

# Freeze the layers of the pre-trained model so they are not retrained during fine-tuning
for layer in vgg.layers:
layer.trainable = False

# Add a custom output layer for binary classification
model = Sequential()
model.add(vgg)
model.add(Flatten())
model.add(Dense(256, activation='relu'))
model.add(BatchNormalization())
model.add(Dropout(0.5))
model.add(Dense(1, activation='sigmoid'))

# Compile the model
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model
history = model.fit(train_generator, epochs=10, validation_data=val_generator)

# Evaluate the model on the test set
test_loss, test_acc = model.evaluate(test_generator)
print('Test accuracy:', test_acc)

`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default AdvancedNeuralNetworks;
