"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import {
  FaBook,
  FaChartLine,
  FaInfoCircle,
  FaRobot,
  FaUserPlus,
} from "react-icons/fa";
import { RiArrowRightSLine, RiCodeBoxLine } from "react-icons/ri";
import python from "../../images/python-logo.png";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/redux/hooks";
import { getAuthData } from "@/app/redux/features/authSlice";
import ModalLR from "@/app/(user)/modalLR";

const page = () => {
  const gettingStartedRef = useRef<any>(null);
  const browsingTutorialsRef = useRef<any>(null);
  const { uid } = useAppSelector(getAuthData);

  const scrollToGettingStarted = () => {
    gettingStartedRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBrowsingTutorials = () => {
    browsingTutorialsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gray-100">
      {/* Hero section */}
      <section id="hero" className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pt-24 md:py-32 md:mt-16">
            <div className="max-w-lg">
              <h1 className="text-4xl mt-6 md:mt-0 font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block">Get started with</span>
                <span className="block text-indigo-600">Python</span>
              </h1>

              <p className="mt-6 text-xl text-gray-300">
                Python is a powerful, easy-to-learn programming language that's
                widely used in web development, data analysis, artificial
                intelligence, and more. Our platform provides you with
                everything you need to get started with Python, including
                tutorials, examples, and a specialized web editor.
              </p>
              <div className="mt-8 w-full">
                <button
                  onClick={scrollToGettingStarted}
                  className="text-slate-200 inline-flex items-center md:px-6 px-1.5 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700"
                >
                  <RiCodeBoxLine className="w-5 h-5 md:mr-2 mr-1 " />
                  Get started
                </button>
                <button
                  onClick={scrollToBrowsingTutorials}
                  className="ml-3 inline-flex items-center md:px-6 px-1.5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  <FaInfoCircle className="w-5 h-5 md:mr-2 mr-1" />
                  Browse Tutorials
                </button>
              </div>
            </div>
            <div className="hidden md:flex ml-40 w-full justify-center">
              <Image
                src={python}
                alt="Python logo"
                className="h-auto w-[55%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting started section */}
      <section
        id="getting-started"
        ref={gettingStartedRef}
        className="bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 py-16">
          {!uid && (
            <div className="text-center my-10 ">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Get started with web Python today
                </h2>
                <p className="mt-4 text-lg text-gray-400 md:mx-28">
                  Whether you're a beginner or an experienced programmer, our
                  platform has everything you need to build amazing websites and
                  web applications. With tutorials and examples, we'll guide you
                  through web development fundamentals, teaching the skills to
                  create responsive and interactive interfaces using Python.
                  Join us today and start your Python programming journey.
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    // onClick={() => router.push("/register")}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <FaUserPlus className="w-5 h-5 mr-2" />
                    <ModalLR initialMode={"register"} />
                  </button>
                </div>
              </div>
              <p className="mt-8">
                Start using our platform to explore Python or create simple data
                science projects.
              </p>
            </div>
          )}
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Editor for Python
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Use our editor to write and run Python code, and explore
                  Python's capabilities.
                </p>
                <Link
                  href={{
                    pathname: "projects/python/python-project/?type=basic",
                    query: { type: "basic" },
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Try now
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-6">
              <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Simple Data Science Projects
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Create and explore simple data science projects, and visualize
                  data using Python.
                </p>
                <Link
                  href={{
                    pathname: "projects/python/python-project/?type=data",
                    query: { type: "data" },
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Try now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials section */}
      <section
        id="tutorials"
        ref={browsingTutorialsRef}
        className="bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              <span className="block">Learn with our</span>
              <span className="block text-indigo-600">Tutorials</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Our tutorials cover everything from the basics of Python to
              advanced topics like machine learning and data visualization.
            </p>
          </div>
          <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center">
                <FaBook className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">
                Python Basics
              </h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn the fundamentals of Python programming, including
                variables, data types, and control structures.
              </p>
              <a
                href="/projects/python/tutorials/basics"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">
                Data Analysis
              </h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn how to use Python to analyze and visualize data, including
                libraries like Pandas and Matplotlib.
              </p>
              <a
                href="/projects/python/tutorials/dataAnalysis"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center">
                <FaRobot className="w-8 h-8 text-white" />
              </div>
              <h3 className="mt-8 text-xl font-medium text-white">
                Machine Learning
              </h3>
              <p className="mt-6 text-base text-gray-300 text-center">
                Learn how to use Python to build machine learning models, with
                libraries like Scikit-Learn and TensorFlow.
              </p>
              <a
                href="/projects/python/tutorials/machineLearning"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700"
              >
                <RiArrowRightSLine className="w-5 h-5 mr-2" />
                Start tutorial
              </a>
            </div>
          </div>{" "}
        </div>
      </section>
      {/* Examples section */}
      <section
        id="examples"
        className=" flex flex-row justify-around bg-gray-900"
      >
        <div className="container mx-10 px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">Examples</h2>
            <p className="mt-4 text-white">
              Explore different examples of Python code and learn how to
              implement them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Data Science
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Learn how to use Python libraries like NumPy and Pandas to
                analyze and manipulate data for data science.
              </p>
              <a
                target="_blank"
                href={"/projects/python/python-project/XqOaVvbWYxHUrngjJedC"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View example
              </a>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Machine Learning
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Discover how to use Python to build machine learning models for
                tasks like classification and regression.
              </p>
              <a
                target="_blank"
                href={"/projects/python/python-project/CTeIbXzRD0BCg4SwpqDk"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View example
              </a>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                General Programming
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Find examples for using Python in general programming tasks, to
                enhance your problem-solving skills.
              </p>
              <a
                target="_blank"
                href={"/projects/python/python-project/6hm3ohGXCd40AHHzIh7u"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View example
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Resources section */}
      <section id="resources" className="bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white">Resources</h2>
            <p className="mt-4 text-gray-400">
              Here are some helpful resources to take your Python skills to the
              next level:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                Official Python Documentation
              </h3>
              <p className="text-gray-400 mb-4">
                The official Python documentation is the go-to resource for all
                things Python. It includes tutorials, reference guides, ...
              </p>
              <a
                href="https://docs.python.org/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">
                Python for Data Science Handbook
              </h3>
              <p className="text-gray-400 mb-4">
                This free online book is a comprehensive guide to using Python
                for data analysis and machine learning.
              </p>
              <a
                href="https://jakevdp.github.io/PythonDataScienceHandbook/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
            <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-10 xl:mb-4">
                Real Python
              </h3>
              <p className="text-gray-400 mb-4">
                Real Python is a website with tutorials and resources for
                learning Python, including courses, videos, and articles.
              </p>
              <a
                href="https://realpython.com/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                target="_blank"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
