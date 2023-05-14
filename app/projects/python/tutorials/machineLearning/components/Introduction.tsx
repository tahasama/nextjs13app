import { Lato } from "next/font/google";
import Head from "next/head";
import React from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
const Introduction = () => {
  return (
    <>
      <Head>
        <title>Introduction to Machine Learning</title>
      </Head>
      <div className={`${lato} w-full `}>
        {/* Introduction */}
        <div className="mx-auto max-w-[68rem] p-5 indent-10 w-full">
          <h1 className="md:text-4xl text-3xl font-bold mb-8 indent-0 text-center">
            Welcome to the Data Machine Learning tutorial!
          </h1>
          <p className="mb-4 text-lg leading-loose tracking-normal">
            Welcome to the machine learning tutorial with scikit-learn and
            TensorFlow. If you've completed a data analysis tutorial with tools
            like NumPy, Pandas, and Matplotlib, then you're ready to take the
            next step and dive into machine learning.
          </p>
          <p className="text-lg leading-loose">
            In this tutorial, we'll explore two popular machine learning
            libraries: scikit-learn and TensorFlow. Scikit-learn is a powerful
            library for building traditional machine learning models, while
            TensorFlow is a popular library for building deep learning models.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
