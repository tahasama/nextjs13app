"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const SupervisedLearning = () => {
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
        SupervisedLearning
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
        <div className="mx-auto p-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold my-4">
            Supervised learning: Regression and Classification
          </h1>
          <p className="mb-4">
            Supervised learning is a type of machine learning where the
            algorithm is trained on a labeled dataset, meaning that the input
            data has corresponding output values. The goal of supervised
            learning is to learn a mapping from inputs to outputs that
            generalizes well to new, unseen data.
          </p>
          <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto">
            <code>
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load iris dataset
iris = load_iris()

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=42)

# Create a decision tree classifier with max_depth=2
clf = DecisionTreeClassifier(max_depth=2)

# Train the classifier on the training data
clf.fit(X_train, y_train)

# Predict the target values for the testing data
y_pred = clf.predict(X_test)

# Compute the accuracy of the classifier
acc = accuracy_score(y_test, y_pred)

# Print the accuracy
print("Accuracy:", acc)
`}
            </code>{" "}
          </pre>
          <p className="mb-4">
            This code loads the iris dataset, splits it into training and
            testing sets, creates a decision tree classifier, trains the
            classifier on the training data, predicts the target values for the
            testing data, and computes the accuracy of the classifier. Finally,
            it prints the accuracy.
          </p>
          <h2 className="text-xl font-bold mb-2">Regression</h2>
          <p className="mb-4">
            Regression is a type of supervised learning where the goal is to
            predict a continuous output variable, such as the price of a house
            or the temperature of a city. Scikit-Learn provides a variety of
            linear and non-linear regression algorithms, as well as tools for
            preprocessing data and tuning hyperparameters.
          </p>
          <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto">
            <code>
              {`from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Load diabetes dataset
diabetes = load_diabetes()

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(diabetes.data, diabetes.target, test_size=0.2, random_state=42)

# Create a linear regression model
reg = LinearRegression()

# Train the model on the training data
reg.fit(X_train, y_train)

# Predict the target values for the testing data
y_pred = reg.predict(X_test)

# Compute the mean squared error and R^2 score
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Print the mean squared error and R^2 score
print("Mean Squared Error:", mse)
print("R^2 Score:", r2)
`}
            </code>{" "}
          </pre>
          <p className="mb-4">
            This code loads the load_diabetes dataset, splits it into training
            and testing sets, creates a linear regression model, trains the
            model on the training data, predicts the target values for the
            testing data, and computes the mean squared error and R^2 score.
            Finally, it prints the mean squared error and R^2 score.
          </p>
          <h2 className="text-xl font-bold mb-2">Classification</h2>
          <p className="mb-4">
            Classification is another type of supervised learning where the goal
            is to predict a categorical output variable, such as whether an
            email is spam or not, or which species a plant belongs to.
            Scikit-Learn provides a variety of classification algorithms,
            including logistic regression, decision trees, and support vector
            machines (SVMs).
          </p>
          <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto">
            <code>
              {`from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# Load breast cancer dataset
breast_cancer = load_breast_cancer()

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(breast_cancer.data, breast_cancer.target, test_size=0.2, random_state=42)

# Create a logistic regression model
clf = LogisticRegression()

# Train the model on the training data
clf.fit(X_train, y_train)

# Predict the target values for the testing data
y_pred = clf.predict(X_test)

# Compute the accuracy, precision, recall, and F1 score
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# Print the accuracy, precision, recall, and F1 score
print("Accuracy:", accuracy)
print("Precision:", precision)
print("Recall:", recall)
print("F1 Score:", f1)
`}
            </code>{" "}
          </pre>
          <p className="mb-4">
            This code loads the load_breast_cancer dataset, splits it into
            training and testing sets, creates a logistic regression model,
            trains the model on the training data, predicts the target values
            for the testing data, and computes the accuracy, precision, recall,
            and F1 score. Finally, it prints the accuracy, precision, recall,
            and F1 score.
          </p>
        </div>
      </div>
    </>
  );
};

export default SupervisedLearning;
