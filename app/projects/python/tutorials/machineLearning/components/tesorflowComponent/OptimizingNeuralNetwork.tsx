"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const OptimizingNeuralNetwork = () => {
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
        Optimizing Neural Networks{" "}
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
          When training neural networks, it's important to optimize the model's
          parameters to achieve better performance. Here are some common
          techniques for optimizing neural networks:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            <span className="font-bold">Learning rate:</span> The learning rate
            controls the step size of the optimization algorithm during
            training. It's important to choose an appropriate learning rate to
            avoid underfitting or overfitting.
          </li>
          <li className="mb-2">
            <span className="font-bold">Regularization:</span> This technique
            adds a penalty term to the loss function to prevent overfitting. Two
            common types of regularization are L1 regularization (Lasso) and L2
            regularization (Ridge).
          </li>
          <li className="mb-2">
            <span className="font-bold">Optimizers:</span> These algorithms
            determine how the model's parameters are updated during training.
            Some popular optimizers include stochastic gradient descent (SGD),
            Adam, and RMSprop.
          </li>
          <li className="mb-2">
            <span className="font-bold">Early stopping:</span> This technique
            involves monitoring the validation loss during training and stopping
            the training when the loss stops improving.
          </li>
        </ul>
        <p className="mb-4">
          Here's an example of building a neural network with regularization, a
          custom optimizer, and early stopping:
        </p>
        <pre className="bg-gray-800 p-4 rounded-md mb-4">
          <code className="language-python text-xs md:text-sm ">
            {`from tensorflow.keras import regularizers
from tensorflow.keras.optimizers import SGD
from tensorflow.keras.callbacks import EarlyStopping

model = Sequential()
model.add(Dense(64, input_dim=X.shape[1], activation='relu', kernel_regularizer=regularizers.l2(0.01)))
model.add(Dropout(0.5))
model.add(Dense(32, activation='relu', kernel_regularizer=regularizers.l2(0.01)))
model.add(Dropout(0.5))
model.add(Dense(1, activation='sigmoid'))

sgd = SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
model.compile(loss='binary_crossentropy', optimizer=sgd, metrics=['accuracy'])

early_stopping = EarlyStopping(monitor='val_loss', patience=5, mode='min')
model.fit(X_train, y_train, validation_split=0.2, epochs=50, batch_size=32, callbacks=[early_stopping])`}
          </code>
        </pre>
      </div>
    </>
  );
};

export default OptimizingNeuralNetwork;
