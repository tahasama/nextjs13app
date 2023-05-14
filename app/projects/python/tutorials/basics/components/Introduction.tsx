import Head from "next/head";
import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Introduction to Python</title>
      </Head>
      <div className={`${lato} w-full `}>
        {/* Introduction */}

        <div className="mx-auto max-w-[68rem] p-8 indent-10  w-full">
          <h1 className="text-4xl font-bold mb-8 indent-0 text-center">
            Welcome to the Python tutorial !
          </h1>
          <p className="mb-4 text-xl leading-loose tracking-normal ">
            Python is a popular high-level programming language that is used for
            a wide range of applications, including web development, data
            analysis, machine learning, and more.
          </p>
          <p className="mb-4 text-xl leading-loose">
            Python is known for its simplicity, ease of use, and versatility,
            making it a great language for beginners and experts alike.
          </p>
          <p className="text-xl leading-loose">
            In this tutorial, we'll cover the basics of Python programming,
            including syntax, data types, variables, functions, object-oriented
            programming, and more. By the end of the tutorial, you'll have a
            solid foundation in Python and be ready to tackle more advanced
            topics and projects.
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
