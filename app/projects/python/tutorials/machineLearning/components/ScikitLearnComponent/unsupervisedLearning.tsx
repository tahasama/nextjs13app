"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const UnsupervisedLearning = () => {
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
        Unsupervised Learning
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
      </div>
    </>
  );
};

export default UnsupervisedLearning;
