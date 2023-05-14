"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Head from "next/head";
const ScikitLearn = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="md:mx-auto md:max-w-[68rem] md:p-8 p-3 indent-10 w-full">
      <button
        className={`flex flex-row items-start justify-between md:text-2xl text-xl md:min-w-[33.3rem] min-w-full
          font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Scikit-Learn
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
        <p className="mb-5">
          Scikit-Learn is a popular Python library for machine learning. It
          provides simple and efficient tools for data mining and data analysis,
          as well as a consistent interface for a variety of machine learning
          algorithms.{" "}
        </p>

        <p className="mb-4">
          Scikit-Learn is built on top of NumPy, SciPy, and matplotlib, which
          are other popular Python libraries for scientific computing and data
          visualization.
        </p>
        <p className="mb-4">
          In this section, we will explore some of the key concepts and features
          of Scikit-Learn, including supervised and unsupervised learning,
          regression and classification, clustering, and model evaluation and
          selection.
        </p>
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
        <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
          <div className=" mx-auto p-4 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Unsupervised Learning: Clustering and Dimensionality Reduction
            </h1>
            <p className="mb-4">
              Unsupervised learning is a type of machine learning where the data
              is not labeled or classified. The goal of unsupervised learning is
              to find patterns or groups in the data without prior knowledge or
              guidance from the user.
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md mb-4 p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# generate a sample dataset with 3 clusters
X, y = make_blobs(n_samples=300, centers=3, cluster_std=0.5, random_state=0)

# initialize KMeans with 3 clusters
kmeans = KMeans(n_clusters=3, random_state=0)

# fit KMeans to the dataset
kmeans.fit(X)

# get cluster labels for each data point
labels = kmeans.predict(X)

# plot the dataset with color-coded clusters
plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis')
plt.show()
`}
              </code>{" "}
            </pre>
            <p className="mb-4">
              This example generates a sample dataset with three clusters using
              the make_blobs function, initializes the KMeans algorithm with
              three clusters, fits it to the dataset, and then assigns cluster
              labels to each data point using the predict method. Finally, it
              visualizes the data points with color-coded clusters using
              matplotlib.
            </p>
            <p className="font-bold mb-2">Clustering</p>
            <p className="mb-4">
              Clustering is an unsupervised learning technique that involves
              grouping together similar data points based on their features. It
              can be used to identify patterns or structures within data, and is
              commonly used in fields such as marketing, biology, and social
              science.
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 mb-4 overflow-x-auto">
              <code>
                {`
            from sklearn.datasets import load_iris
            from sklearn.cluster import KMeans
            import matplotlib.pyplot as plt
            
            
            # load the iris dataset
            iris = load_iris()
            X = iris.data
            
            # initialize KMeans with 3 clusters
            kmeans = KMeans(n_clusters=3, random_state=0)
            
            # fit KMeans to the dataset
            kmeans.fit(X)
            
            # get cluster labels for each data point
            labels = kmeans.predict(X)
            
            # plot the dataset with color-coded clusters
            plt.scatter(X[:, 0], X[:, 1], c=labels, s=50, cmap='viridis')
            plt.show()
            `}
              </code>{" "}
            </pre>
            <p className="mb-4">
              This example loads the iris dataset, initializes the KMeans
              algorithm with three clusters, fits it to the dataset, and then
              assigns cluster labels to each data point using the predict
              method. Finally, it visualizes the data points with color-coded
              clusters using matplotlib.
            </p>
            <p className="font-bold mb-2">Dimensionality Reduction</p>
            <p className="mb-4">
              Dimensionality reduction is another unsupervised learning
              technique that involves reducing the number of features in a
              dataset while preserving as much of the original information as
              possible. This is useful when dealing with high-dimensional data
              that may be difficult to visualize or analyze. Examples of
              dimensionality reduction algorithms include Principal Component
              Analysis (PCA) and t-Distributed Stochastic Neighbor Embedding
              (t-SNE).
            </p>
          </div>
          <pre className="bg-gray-800 text-gray-100 rounded-md p-4 mb-4 overflow-x-auto">
            <code>
              {`from sklearn.datasets import load_digits
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt

# load the digits dataset
digits = load_digits()
X = digits.data
y = digits.target

# reduce dimensionality with PCA
pca = PCA(n_components=2)
X_reduced = pca.fit_transform(X)

# plot the reduced dataset
plt.scatter(X_reduced[:, 0], X_reduced[:, 1], c=y, edgecolor='none', alpha=0.8, cmap=plt.cm.get_cmap('viridis', 10))
plt.xlabel('component 1')
plt.ylabel('component 2')
plt.colorbar()
plt.show()
`}
            </code>{" "}
          </pre>
          <p className="mb-4">
            This example loads the digits dataset, reduces the dimensionality of
            the dataset from 64 dimensions to 2 dimensions using PCA, and then
            visualizes the reduced dataset with points color-coded by their true
            class using matplotlib.
          </p>
        </div>
        <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
          <div className="mx-auto p-4 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">
              Model Evaluation and Selection
            </h1>
            <h2 className="text-lg font-semibold mb-2">Introduction</h2>
            <p className="mb-4">
              Once we have trained a model on our data, we need to evaluate its
              performance and select the best model for our problem. In this
              section, we will explore some of the techniques for model
              evaluation and selection in Scikit-Learn.
            </p>
            <h2 className="text-lg font-semibold mb-2">Holdout Method</h2>
            <p className="mb-4">
              The holdout method involves splitting our data into a training set
              and a test set. We use the training set to fit the model and the
              test set to evaluate its performance. This method is quick and
              easy to implement, but it may not provide an accurate estimate of
              the model's performance on new, unseen data. Here is an example
              with Linear Regression
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load the Iris dataset
iris = load_iris()

# Split the dataset into training and testing sets using the holdout method
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)

# Train a linear regression model on the training set
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model on the testing set
score = model.score(X_test, y_test)
print("Model accuracy: {:.2f}%".format(score * 100))
`}
              </code>{" "}
            </pre>
            <p className="my-4">
              In this example, we load the Iris dataset using the load_iris()
              function from scikit-learn. We then split the dataset into a
              training set and a testing set using the holdout method with
              train_test_split(). We train a linear regression model on the
              training set using LinearRegression() and fit(). Finally, we
              evaluate the model on the testing set using score(), and print the
              accuracy score.
            </p>
            <p className="mb-4"> here is an example of polynomial regression</p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`
            from sklearn.datasets import fetch_california_housing
            from sklearn.linear_model import LinearRegression
            from sklearn.preprocessing import PolynomialFeatures
            from sklearn.model_selection import train_test_split
            from sklearn.metrics import mean_squared_error, r2_score
            import numpy as np
            
            # Load the California Housing dataset
            housing = fetch_california_housing()
            
            # Split the data into training and testing sets
            X_train, X_test, y_train, y_test = train_test_split(
                housing.data, housing.target, test_size=0.2, random_state=42)
            
            # Create a polynomial features object with degree 2
            poly_features = PolynomialFeatures(degree=2, include_bias=False)
            
            # Transform the training features to include polynomial terms up to degree 2
            X_train_poly = poly_features.fit_transform(X_train)
            
            # Fit a linear regression model on the transformed features
            lin_reg = LinearRegression()
            lin_reg.fit(X_train_poly, y_train)
            
            # Transform the testing features to include polynomial terms up to degree 2
            X_test_poly = poly_features.transform(X_test)
            
            # Make predictions on the testing set
            y_pred = lin_reg.predict(X_test_poly)
            
            # Calculate the mean squared error and R-squared score
            mse = mean_squared_error(y_test, y_pred)
            r2 = r2_score(y_test, y_pred)
            
            print("Mean squared error: {:.2f}".format(mse))
            print("R-squared score: {:.2f}".format(r2))
            `}
              </code>{" "}
            </pre>
            <p className="my-4">
              This code uses the California Housing dataset from Scikit-Learn,
              splits the data into training and testing sets, creates a
              PolynomialFeatures object with degree 2, transforms the training
              features to include polynomial terms up to degree 2, fits a linear
              regression model on the transformed features, transforms the
              testing features to include polynomial terms up to degree 2, makes
              predictions on the testing set, and calculates the mean squared
              error and R-squared score.
            </p>
            <p className="mb-4">
              {" "}
              here's an example of Decision Tree Regression using the diabetes
              dataset
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error

# Load the diabetes dataset
diabetes = load_diabetes()

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(diabetes.data, diabetes.target, test_size=0.2, random_state=42)

# Create a decision tree regressor with max depth of 3
regressor = DecisionTreeRegressor(max_depth=3)

# Train the model on the training data
regressor.fit(X_train, y_train)

# Make predictions on the test data
y_pred = regressor.predict(X_test)

# Compute the mean squared error of the predictions
mse = mean_squared_error(y_test, y_pred)
print("Mean squared error:", mse)
`}
              </code>{" "}
            </pre>
            <p className="my-4">
              In this example, we load the diabetes dataset and split it into
              training and testing sets. We then create a decision tree
              regressor with a max depth of 3 and train it on the training data.
              We use the model to make predictions on the test data and compute
              the mean squared error of the predictions.
            </p>
            <p className="mb-4">
              ! Here's an example of Random Forest Regression using the
              California Housing dataset
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`import numpy as np
from sklearn.datasets import fetch_california_housing
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# Load the California Housing dataset
data = fetch_california_housing(as_frame=True)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42)

# Create a Random Forest Regression model
model = RandomForestRegressor(n_estimators=100, random_state=42)

# Train the model on the training set
model.fit(X_train, y_train)

# Make predictions on the testing set
y_pred = model.predict(X_test)

# Evaluate the model using mean squared error
mse = mean_squared_error(y_test, y_pred)
print(f"Mean squared error: {mse:.2f}")
`}
              </code>{" "}
            </pre>
            <p className="my-4">
              In this example, we first load the California Housing dataset
              using fetch_california_housing from Scikit-Learn. We then split
              the data into training and testing sets using train_test_split and
              create a Random Forest Regression model using
              RandomForestRegressor. We train the model on the training set
              using fit and make predictions on the testing set using predict.
              Finally, we evaluate the model using mean squared error from
              mean_squared_error in Scikit-Learn's metrics module.
            </p>
            <p className="mb-4">
              {" "}
              here is an example of using the fetch_california_housing dataset
              with K-Nearest Neighbors Regression{" "}
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`
            from sklearn.datasets import fetch_california_housing
            from sklearn.neighbors import KNeighborsRegressor
            from sklearn.model_selection import train_test_split
            
            # Load the dataset
            data = fetch_california_housing(as_frame=True)
            
            # Split the data into training and testing sets
            X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.2)
            
            # Create and train the K-Nearest Neighbors Regression model
            knn_reg = KNeighborsRegressor(n_neighbors=5)
            knn_reg.fit(X_train, y_train)
            
            # Make predictions on the test set
            y_pred = knn_reg.predict(X_test)
            
            # Evaluate the performance of the model
            score = knn_reg.score(X_test, y_test)
            print(f"R^2 score: {score:.3f}")
            
            `}{" "}
              </code>{" "}
            </pre>
            <p className="my-4">
              This code loads the fetch_california_housing dataset as a pandas
              dataframe using the as_frame=True argument. The data is then split
              into training and testing sets using train_test_split(). A
              K-Nearest Neighbors Regression model is created and trained on the
              training set using KNeighborsRegressor() and fit(). Predictions
              are made on the test set using predict(), and the performance of
              the model is evaluated using the R^2 score, which is calculated
              using score().
            </p>
            <h2 className="text-lg font-semibold mb-2">Cross-Validation</h2>
            <p className="mb-4">
              Cross-validation is a technique that involves splitting our data
              into k folds, training the model on k-1 folds, and testing it on
              the remaining fold. We repeat this process k times, with each fold
              used once as the test set. This technique can provide a more
              accurate estimate of the model's performance and is especially
              useful when we have limited data.
            </p>
            <p>
              The most common type of cross-validation is k-fold
              cross-validation, where the dataset is split into k equally-sized
              folds. The model is trained on k-1 of these folds and evaluated on
              the remaining fold. This process is repeated k times, with each
              fold serving as the test set exactly once. The results of each
              evaluation are then averaged to produce a final performance
              metric. Here is an example
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import fetch_california_housing
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score

# Load the California housing dataset
X, y = fetch_california_housing(return_X_y=True)

# Create a linear regression model
model = LinearRegression()

# Evaluate the model using k-fold cross-validation
scores = cross_val_score(model, X, y, cv=5) # Use 5 folds

# Print the mean and standard deviation of the scores
print("Mean score:", scores.mean())
print("Standard deviation:", scores.std())

`}{" "}
              </code>
            </pre>
            <p className="my-4">
              In this example, we first load the California housing dataset
              using the fetch_california_housing function. We then create a
              LinearRegression model and evaluate its performance using 5-fold
              cross-validation, as specified by the cv parameter. Finally, we
              print the mean and standard deviation of the scores to get an idea
              of the model's overall performance.
            </p>
            <p className="mb-4">
              Here is another example of cross-validation using the diabetes
              dataset
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score

# Load the diabetes dataset
diabetes = load_diabetes()

# Use linear regression model
lr = LinearRegression()

# Perform 10-fold cross-validation
scores = cross_val_score(lr, diabetes.data, diabetes.target, cv=10)

# Print the mean and standard deviation of the scores
print("Accuracy: %0.2f (+/- %0.2f)" % (scores.mean(), scores.std() * 2))
`}{" "}
              </code>{" "}
            </pre>
            <p className="my-4">
              In this example, we first load the diabetes dataset and create a
              LinearRegression model. We then perform 10-fold cross-validation
              using the cross_val_score function, which takes in the model,
              input data, target data, and the number of folds (cv=10). Finally,
              we print the mean and standard deviation of the scores to evaluate
              the performance of the model.
            </p>
            <h2 className="text-lg font-bold mb-2">Hyperparameter Tuning</h2>
            <p className="mb-4">
              Hyperparameter tuning is the process of selecting the best values
              for the hyperparameters of a machine learning model. This is
              typically done by evaluating the performance of the model on a
              validation set, and then adjusting the hyperparameters
              accordingly. Hyperparameter tuning is often done using a
              combination of manual search, grid search, and other optimization
              techniques such as Bayesian optimization.
            </p>
            <h2 className="text-md font-bold mb-2">Grid Search</h2>
            <p className="mb-4">
              Grid search is a technique for hyperparameter tuning that involves
              defining a grid of hyperparameter values and exhaustively
              searching over the grid to find the best combination of
              hyperparameters for the model. We train and evaluate the model on
              each combination of hyperparameters in the grid and select the one
              that performs the best. Grid search can be time-consuming and
              computationally expensive, but it can help us find the optimal
              hyperparameters for our model. <br /> here's an example of Grid
              Search
            </p>
            <pre className="bg-gray-800 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code>
                {`from sklearn.datasets import load_iris
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

# Load the iris dataset
iris = load_iris()

# Define the hyperparameters to tune
param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [0.01, 0.1, 1, 10], 'kernel': ['linear', 'rbf', 'poly']}

# Create a support vector classifier object
svc = SVC()

# Create a GridSearchCV object
grid = GridSearchCV(svc, param_grid, cv=5)

# Fit the GridSearchCV object to the data
grid.fit(iris.data, iris.target)

# Print the best hyperparameters and the corresponding accuracy score
print("Best hyperparameters: ", grid.best_params_)
print("Accuracy score: ", grid.best_score_)
`}
              </code>
            </pre>
            <p className="my-4">
              In this example, we load the Iris dataset and define a set of
              hyperparameters to tune using Grid Search. We create a Support
              Vector Classifier (SVC) object and a GridSearchCV object. We then
              fit the GridSearchCV object to the data and print the best
              hyperparameters and the corresponding accuracy score. The cv
              parameter is set to 5, which means that a 5-fold cross-validation
              is performed during the Grid Search.
            </p>
            <p>
              This line{" "}
              <code>
                {" "}
                {`param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [0.01, 0.1, 1, 10], 'kernel': ['linear', 'rbf', 'poly']}`}
              </code>{" "}
              defines the hyperparameters and their possible values for the
              Support Vector Machine (SVM) model. Specifically, C, gamma, and
              kernel are three hyperparameters that can significantly impact the
              performance of the SVM model.
            </p>
            <ul className="list-inside list-disc text-neutral-200">
              <li>
                C controls the trade-off between achieving a low training error
                and a low testing error by creating a softer or harder margin
                for the SVM. A smaller value of C will result in a wider margin
                but may lead to misclassification errors on the training set,
                while a larger value of C will create a narrow margin and may
                lead to overfitting.
              </li>
              <li>
                gamma determines the influence of a single training example. A
                low value of gamma will result in a broader bell-shaped curve,
                while a high value of gamma will result in a narrower
                peak-shaped curve. The choice of gamma affects the smoothness of
                the decision boundary.
              </li>
              <li>
                kernel specifies the kernel function to be used by the SVM. The
                choice of kernel function can impact the ability of the SVM to
                model non-linear relationships in the data. In this example, we
                have specified three different kernels: linear, radial basis
                function (RBF), and polynomial.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScikitLearn;
