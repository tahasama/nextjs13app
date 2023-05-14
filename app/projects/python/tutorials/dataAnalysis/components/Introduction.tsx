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
        <title>Introduction to Data Analysis with Python</title>
      </Head>
      <div className={`${lato} w-full `}>
        {/* Introduction */}
        <div className="mx-auto max-w-[68rem] p-8 indent-10 w-full">
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center">
            Welcome to the Data Analysis tutorial!
          </h1>
          <p className="mb-4 text-lg leading-loose tracking-normal">
            Data analysis is the process of cleaning, transforming, and modeling
            data to extract meaningful insights and inform decision-making. In
            today's world, data analysis has become a critical skill for
            businesses, researchers, and policymakers alike.
          </p>
          <p className="mb-4 text-lg leading-loose">
            Data analysis helps organizations identify trends, patterns, and
            relationships in their data and use these insights to drive business
            decisions, optimize processes, and gain a competitive advantage.
          </p>
          <p className="mb-4 text-lg leading-loose">
            Python has made it possible for analysts and data scientists to
            quickly and efficiently perform a wide range of data-related tasks,
            from data cleaning and preparation to statistical analysis and
            machine learning.
          </p>
          {/* <p className="text-lg mb-6">
            In this tutorial, we will cover the following topics:
          </p>
          <ul className="list-disc pl-6 text-lg mb-6 leading-loose">
            <li>
              <strong>Data Manipulation with Pandas:</strong> Learn how to load
              data into Pandas, clean and prepare data, perform data indexing
              and selection, and perform data aggregation and grouping.
            </li>
            <li>
              <strong>Data Visualization with Matplotlib:</strong> Learn how to
              create basic plots and charts, customize them, and apply advanced
              visualization techniques.
            </li>
            <li>
              <strong>Exploratory Data Analysis with Seaborn:</strong> Learn how
              to perform statistical visualization, create relationship plots,
              and categorical plots with Seaborn.
            </li>
            <li>
              <strong>Machine Learning with Scikit-Learn:</strong> Learn the
              basics of Scikit-Learn, including supervised learning (regression
              and classification), unsupervised learning (clustering and
              dimensionality reduction), and model evaluation and selection.
            </li>
          </ul> */}
          <p className="">
            {" "}
            <span className="text-rose-600 font-semibold text-lg leading-8">
              Note :
            </span>{" "}
            An important piece of code while trying to generate multiple plots
            use:
            <code className="p-2 mx-2 bg-slate-700 rounded-md  text-green-600">
              plt.close('all')
            </code>{" "}
            That will avoid creating ba or wrongly generated plot
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
