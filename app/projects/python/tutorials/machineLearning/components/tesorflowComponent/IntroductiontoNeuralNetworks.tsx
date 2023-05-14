"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
const IntroductiontoNeuralNetworks = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <>
      <button
        className={`md:ml-7 ml-6 mb-4 flex flex-row items-start justify-between md:text-xl  md:min-w-[33.3rem] 
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Introduction to Neural Networks
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
          Neural networks are a powerful class of machine learning models that
          are designed to mimic the way the human brain works. At a high level,
          a neural network consists of layers of interconnected nodes or
          "neurons" that process input data and produce output predictions. Here
          are some key concepts to understand when building basic neural
          networks:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-bold">Input layer:</span> This is the first
            layer of the network, which receives the input data. Each node in
            the input layer represents a feature or input variable.
            <p className="mb-4">
              Here's an example of how to create an input layer :{" "}
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>
                {`import tensorflow as tf

# Define the shape of the input data
input_shape = (32, 32, 3) # (height, width, channels)
# it corresponds to a 32x32 RGB image

# Create an input layer with the specified shape
inputs = tf.keras.layers.Input(shape=input_shape)

# Print the input shape of the layer
print(inputs.shape)
`}{" "}
              </code>{" "}
            </pre>
            <p>
              Note that the input layer is typically the first layer in a neural
              network model and is used to specify the shape of the input data
              that will be fed into the model.
            </p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Hidden layers:</span> These are one or
            more layers of neurons that process the input data and transform it
            into a format that is more suitable for producing accurate
            predictions. The nodes in hidden layers use mathematical functions
            to transform the input data and pass it on to the next layer.
            <p className="mb-4">
              here's an example of how to create hidden layers :{" "}
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>
                {`
          # The "input" value is fron the previous code example

          # Create a hidden layer with 64 units and a ReLU activation function
          hidden1 = tf.keras.layers.Dense(64, activation='relu')(inputs)
          
          # Create another hidden layer with 32 units and a ReLU activation function
          hidden2 = tf.keras.layers.Dense(32, activation='relu')(hidden1)
          
          # Print the output shape of the last hidden layer
          print(hidden2.shape)`}
              </code>
            </pre>
            <p>
              Note that the number of hidden layers and the number of units in
              each hidden layer can vary depending on the complexity of the
              problem being solved. The choice of activation function can also
              have a significant impact on the performance of the model.
            </p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Output layer:</span> This is the final
            layer of the network, which produces the output predictions. The
            nodes in the output layer represent the target variable(s) of the
            model, and their activation values represent the predicted values
            for each target variable.
            <p className="mb-4">
              here's an example of how to create an output layer :{" "}
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>
                {`
          # this is a continuation of previous example
          # Create an output layer with 10 units and a softmax activation function
          outputs = tf.keras.layers.Dense(10, activation='softmax')(hidden2)
          
          # Print the output shape of the output layer
          print(outputs.shape)`}{" "}
              </code>{" "}
            </pre>
            <p>
              Note that the number of units in the output layer should match the
              number of classes in the problem being solved. The choice of
              activation function for the output layer also depends on the
              problem being solved, e.g., sigmoid activation function for binary
              classification problems.
            </p>
          </li>
          <li className="mb-2">
            <span className="font-bold">Activation functions:</span>
            <br /> &nbsp; These are mathematical functions that are applied to
            the nodes in each layer of the network. Activation functions help to
            introduce non-linearity into the model, allowing it to learn complex
            patterns and relationships in the data.
            <ul className="mx-10 list-decimal list-inside  mt-4">
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  ReLU (Rectified Linear Unit)
                </u>
                <p className=" my-4">
                  &nbsp; &nbsp; &nbsp; This is one of the most commonly used
                  activation functions in deep learning. ReLU sets all negative
                  values to zero, and leaves positive values unchanged.
                  Mathematically, it is defined as f(x) = max(0, x). The ReLU
                  activation function is computationally efficient and helps to
                  prevent the vanishing gradient problem.
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf
from tensorflow.keras.datasets import mnist

# Load the MNIST dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Reshape the input data to 1D vectors
x_train = x_train.reshape(-1, 784)
x_test = x_test.reshape(-1, 784)

# Normalize the input data
x_train = x_train / 255.0
x_test = x_test / 255.0

# Convert the labels to one-hot encoding
y_train = tf.keras.utils.to_categorical(y_train, num_classes=10)
y_test = tf.keras.utils.to_categorical(y_test, num_classes=10)

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(784,))

# Define a hidden layer with ReLU activation function
hidden_layer = tf.keras.layers.Dense(units=128, activation='relu')(input_layer)

# Define the output layer with softmax activation function
output_layer = tf.keras.layers.Dense(units=10, activation='softmax')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with categorical crossentropy loss and Adam optimizer
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold">Sigmoid:</u>
                <p className=" my-4">
                  &nbsp; &nbsp; &nbsp; Sigmoid is commonly used in binary
                  classification problems where the output should be a
                  probability between 0 and 1. The sigmoid function has an
                  S-shaped curve and is defined as f(x) = 1 / (1 + exp(-x)).
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(10,))

# Define a hidden layer with sigmoid activation function
hidden_layer = tf.keras.layers.Dense(units=5, activation='sigmoid')(input_layer)

# Define the output layer with sigmoid activation function
output_layer = tf.keras.layers.Dense(units=1, activation='sigmoid')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with binary crossentropy loss and Adam optimizer
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Generate some random data for training and testing
import numpy as np
x_train = np.random.randn(100, 10)
y_train = np.random.randint(0, 2, size=(100, 1))
x_test = np.random.randn(20, 10)
y_test = np.random.randint(0, 2, size=(20, 1))

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Tanh (Hyperbolic Tangent):
                </u>
                <p className="my-4">
                  Tanh is a common activation function used in neural networks.
                  It is similar to the sigmoid function, but it outputs values
                  between -1 and 1. The tanh function is defined as f(x) =
                  (exp(x) - exp(-x)) / (exp(x) + exp(-x)).
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(10,))

# Define a hidden layer with tanh activation function
hidden_layer = tf.keras.layers.Dense(units=5, activation='tanh')(input_layer)

# Define the output layer with sigmoid activation function
output_layer = tf.keras.layers.Dense(units=1, activation='sigmoid')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with binary crossentropy loss and Adam optimizer
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# Generate some random data for training and testing
import numpy as np
x_train = np.random.randn(100, 10)
y_train = np.random.randint(0, 2, size=(100, 1))
x_test = np.random.randn(20, 10)
y_test = np.random.randint(0, 2, size=(20, 1))

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">Softmax:</u>
                <p className="my-4">
                  Softmax is used in multiclass classification problems, where
                  the output should be a probability distribution over multiple
                  classes. The softmax function outputs values between 0 and 1
                  and ensures that the sum of the outputs is 1. The softmax
                  function is defined as f(x) = exp(x) / sum(exp(x)).
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(10,))

# Define a hidden layer with ReLU activation function
hidden_layer = tf.keras.layers.Dense(units=5, activation='relu')(input_layer)

# Define the output layer with softmax activation function
output_layer = tf.keras.layers.Dense(units=3, activation='softmax')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with categorical crossentropy loss and Adam optimizer
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Generate some random data for training and testing
import numpy as np
x_train = np.random.randn(100, 10)
y_train = np.random.randint(0, 3, size=(100, 1))
y_train = tf.keras.utils.to_categorical(y_train, num_classes=3)
x_test = np.random.randn(20, 10)
y_test = np.random.randint(0, 3, size=(20, 1))
y_test = tf.keras.utils.to_categorical(y_test, num_classes=3)

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
            </ul>
          </li>
          <li className="my-6 ">
            <span className="font-bold">Loss functions:</span>
            <br />
            &nbsp; &nbsp; These are mathematical functions that are used to
            measure the difference between the predicted values and the actual
            values in the training data. The goal of the model is to minimize
            the value of the loss function, which indicates that the model is
            making accurate predictions.
            <ul className=" ml-5 list-inside list-decimal mt-4">
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Mean Squared Error (MSE)
                </u>
                <p className="my-4">
                  This loss function is used in regression problems where the
                  output is a continuous variable. The MSE is calculated as the
                  average of the squared differences between the predicted and
                  actual values. The formula for calculating MSE is: MSE = (1/n)
                  * ∑(y_pred - y_actual)^2
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(10,))

# Define a hidden layer with ReLU activation function
hidden_layer = tf.keras.layers.Dense(units=5, activation='relu')(input_layer)

# Define the output layer with linear activation function
output_layer = tf.keras.layers.Dense(units=1, activation='linear')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with MSE loss and Adam optimizer
model.compile(loss='mean_squared_error', optimizer='adam')

# Generate some random data for training and testing
import numpy as np
x_train = np.random.randn(100, 10)
y_train = np.random.randn(100, 1)
x_test = np.random.randn(20, 10)
y_test = np.random.randn(20, 1)

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Binary Crossentropy
                </u>
                <p className="my-4">
                  &nbsp; &nbsp; &nbsp; This loss function is used in binary
                  classification problems where the output is a binary variable.
                  It measures the difference between the predicted probabilities
                  and the actual binary labels. The formula for calculating
                  Binary Crossentropy is: Binary Crossentropy = -(y_actual *
                  log(y_pred) + (1 - y_actual) * log(1 - y_pred))
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf

# Define the input layer
input_layer = tf.keras.layers.Input(shape=(10,))

# Define a hidden layer with ReLU activation function
hidden_layer = tf.keras.layers.Dense(units=5, activation='relu')(input_layer)

# Define the output layer with sigmoid activation function
output_layer = tf.keras.layers.Dense(units=1, activation='sigmoid')(hidden_layer)

# Create a model
model = tf.keras.models.Model(inputs=input_layer, outputs=output_layer)

# Compile the model with Binary Crossentropy loss and Adam optimizer
model.compile(loss='binary_crossentropy', optimizer='adam')

# Generate some random data for training and testing
import numpy as np
x_train = np.random.randn(100, 10)
y_train = np.random.randint(2, size=(100, 1))
x_test = np.random.randn(20, 10)
y_test = np.random.randint(2, size=(20, 1))

# Train the model on the training data
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Categorical Crossentropy
                </u>
                <p className="my-4">
                  &nbsp; &nbsp; &nbsp; This loss function is used in multi-class
                  classification problems where the output is a categorical
                  variable. It measures the difference between the predicted
                  probabilities and the actual categorical labels. . The formula
                  for calculating Categorical Crossentropy is: Categorical
                  Crossentropy = - ∑(y_actual * log(y_pred))
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`
              import numpy as np
              from tensorflow.keras.models import Sequential
              from tensorflow.keras.layers import Dense
              
              # Define the input shape
              input_shape = (784,)
              
              # Create a sequential model
              model = Sequential()
              
              # Add a dense layer with 64 units and relu activation
              model.add(Dense(units=64, activation='relu', input_shape=input_shape))
              
              # Add a dense output layer with softmax activation
              model.add(Dense(units=10, activation='softmax'))
              
              # Compile the model with categorical crossentropy loss and adam optimizer
              model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
              
              # Load the data
              from tensorflow.keras.datasets import mnist
              (x_train, y_train), (x_test, y_test) = mnist.load_data()
              
              # Reshape the data to have the expected input shape
              x_train = x_train.reshape((x_train.shape[0], 784))
              x_test = x_test.reshape((x_test.shape[0], 784))
              
              # Normalize the data
              x_train = x_train.astype('float32') / 255
              x_test = x_test.astype('float32') / 255
              
              # Convert the labels to categorical one-hot encoding
              num_classes = 10
              y_train = np.eye(num_classes)[y_train]
              y_test = np.eye(num_classes)[y_test]
              
              # Train the model
              model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
              
              `}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Sparse Categorical Crossentropy
                </u>
                <p className="my-4">
                  &nbsp; &nbsp; &nbsp; This loss function is similar to
                  categorical crossentropy, but it is used when the actual
                  categorical labels are represented as integers.
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Define the input shape
input_shape = (784,)

# Create a sequential model
model = Sequential()

# Add a dense layer with 64 units and relu activation
model.add(Dense(units=64, activation='relu', input_shape=input_shape))

# Add a dense output layer with softmax activation
model.add(Dense(units=10, activation='softmax'))

# Compile the model with categorical crossentropy loss and adam optimizer
model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

# Load the data
from tensorflow.keras.datasets import mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Reshape the data to have the expected input shape
x_train = x_train.reshape((x_train.shape[0], 784))
x_test = x_test.reshape((x_test.shape[0], 784))

# Normalize the data
x_train = x_train.astype('float32') / 255
x_test = x_test.astype('float32') / 255

# Convert the labels to categorical one-hot encoding
num_classes = 10
y_train = np.eye(num_classes)[y_train]
y_test = np.eye(num_classes)[y_test]

# Train the model
model.fit(x_train, y_train, batch_size=32, epochs=10, validation_data=(x_test, y_test))
`}{" "}
                  </code>{" "}
                </pre>
              </li>
              <li>
                <u className=" underline-offset-4 font-semibold ">
                  Kullback-Leibler (KL) Divergence
                </u>
                <p className="mt-4">
                  &nbsp; &nbsp; &nbsp; This loss function is used to measure the
                  difference between two probability distributions. It is
                  commonly used in generative models such as variational
                  autoencoders.
                </p>
                <p className="mb-4">
                  &nbsp; &nbsp; &nbsp; The KL divergence between two probability
                  distributions p and q is defined as: KL(p || q) = ∑x p(x)
                  log(p(x) / q(x)) where x is the set of possible outcomes, p(x)
                  is the probability of outcome x under distribution p, and q(x)
                  is the probability of outcome x under distribution q.
                </p>
                <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
                  <code>
                    {`import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.losses import KLDivergence

# generate some dummy data for demonstration purposes
import numpy as np
x_train = np.random.rand(1000, 10)
y_train = np.random.rand(1000, 5)

# define the model architecture
model = Sequential()
model.add(Dense(16, activation='relu', input_shape=(10,)))
model.add(Dense(8, activation='relu'))
model.add(Dense(5, activation='softmax'))

# compile the model with KL divergence loss
model.compile(optimizer='adam', loss=KLDivergence())

# train the model
model.fit(x_train, y_train, epochs=10)
`}{" "}
                  </code>{" "}
                </pre>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <u className=" underline-offset-4 font-semibold ">
              Backpropagation:
            </u>{" "}
            <p className="my-4">
              {" "}
              This is an algorithm that is used to adjust the weights of the
              nodes in the network during training. Backpropagation uses the
              gradients of the loss function with respect to the weights to
              update the weights in the direction that minimizes the loss.
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm overflow-x-auto">
              <code>
                {`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import SGD
import numpy as np

# generate some dummy data for training
X_train = np.random.rand(100, 10)
y_train = np.random.randint(2, size=(100, 1))

# create the model
model = Sequential()
model.add(Dense(5, input_shape=(10,), activation='sigmoid')) # input layer + hidden layer
model.add(Dense(1, activation='sigmoid')) # output layer

# configure the model for training
sgd = SGD(learning_rate=0.1)
model.compile(optimizer=sgd, loss='binary_crossentropy')

# train the model for 10 epochs
model.fit(X_train, y_train, epochs=10)

# evaluate the model on some test data
X_test = np.random.rand(10, 10)
y_test = np.random.randint(2, size=(10, 1))
loss = model.evaluate(X_test, y_test)
print("Test loss:", loss)
`}{" "}
              </code>{" "}
            </pre>
          </li>
        </ul>
        <h3 className="text-gray-300 text-lg indent-0">
          In general the common way of creating a Basic Neural Networks is:
        </h3>
        <ul className="list-disc tracking-wide leading-7 indent-2">
          <li>
            <p className="my-2">Import the necessary libraries:</p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>{`import tensorflow as tf
import numpy as np
`}</code>
            </pre>
          </li>
          <li>
            <p className="my-2">
              Define the input data and the expected output data:
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>{`# Input data
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]], dtype=np.float32)

# Expected output data
y = np.array([[0], [1], [1], [0]], dtype=np.float32)
`}</code>
            </pre>
          </li>
          <li>
            <p className="my-2">
              Define the layers of the neural network using the tf.keras.layers
              API:
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>
                {`# Define the layers
input_layer = tf.keras.layers.Input(shape=(2,))
hidden_layer = tf.keras.layers.Dense(4, activation='sigmoid')(input_layer)
output_layer = tf.keras.layers.Dense(1, activation='sigmoid')(hidden_layer)
`}
              </code>
            </pre>
          </li>
          <li>
            <p className="my-2">
              Define the model and compile it using an optimizer and a loss
              function:
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>{`# Define the model
model = tf.keras.Model(inputs=input_layer, outputs=output_layer)

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
`}</code>
            </pre>
          </li>
          <li>
            <p className="my-2">
              Train the model using the input and output data:
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto">
              <code>{`# Train the model
model.fit(X, y, epochs=1000, verbose=0)
`}</code>
            </pre>
          </li>
          <li>
            <p className="my-2">Make predictions using the trained model:</p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 text-xs md:text-sm  overflow-x-auto">
              <code>{`# Make predictions using the trained model
predictions = model.predict(X)

# Print the predictions
print(predictions)
`}</code>
            </pre>
          </li>
          <p>
            <span className="text-red-600">Note :</span> This is a typic but not
            only way to create a neural network, and that this example is just
            for explaining
          </p>
        </ul>
      </div>
    </>
  );
};

export default IntroductiontoNeuralNetworks;
